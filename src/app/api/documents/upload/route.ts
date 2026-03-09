import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import fs from "fs/promises";
import path from "path";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "secreto_fortia_2024");

export async function POST(request: Request) {
    try {
        // 1. Verificar sesión desde cookies
        const cookieStore = await cookies();
        const token = cookieStore.get("fortia_auth_token")?.value;

        if (!token) {
            return NextResponse.json({ error: "No autorizado" }, { status: 401 });
        }

        const { payload } = await jwtVerify(token, JWT_SECRET);
        const userId = payload.userId as string;

        // 2. Obtener datos del archivo
        const formData = await request.formData();
        const file = formData.get("file") as File;
        const requirementIdStr = formData.get("requirementId") as string;
        const categoryName = formData.get("category") as string; // ej: 'arrendatario'

        if (!file || !requirementIdStr) {
            return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
        }

        const requirementId = parseInt(requirementIdStr);

        // 3. Obtener o crear el Expediente (Dossier) para este usuario
        // Como simplificación: creamos uno si no existe, o usamos el último 'Incompleto'
        let dossier = await prisma.dossier.findFirst({
            where: { userId, status: 'INCOMPLETO' }
        });

        if (!dossier) {
            // Necesitamos mapear la categoría string (ej: 'arrendatario') al Enum de Prisma (ARRENDATARIO)
            const catMap: Record<string, any> = {
                'arrendador': 'ARRENDADOR',
                'arrendatario': 'ARRENDATARIO',
                'solidario_sin': 'SOLIDARIO_SIN',
                'solidario_con': 'SOLIDARIO_CON',
                'empresa': 'EMPRESA'
            };

            dossier = await prisma.dossier.create({
                data: {
                    userId,
                    category: catMap[categoryName] || 'ARRENDATARIO'
                }
            });
        }

        // 4. Guardar archivo físicamente en disco (public/uploads/[userId])
        const data = await file.arrayBuffer();
        const buffer = Buffer.from(data);

        // Carpeta por usuario para organización
        const userUploadDir = path.join(process.cwd(), "public", "uploads", userId);
        await fs.mkdir(userUploadDir, { recursive: true });

        // Limpiar nombre del archivo para evitar caracteres raros
        const safeFileName = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
        const filePath = path.join(userUploadDir, safeFileName);

        await fs.writeFile(filePath, buffer);

        const fileUrl = `/uploads/${userId}/${safeFileName}`;

        // 5. Registrar en la base de datos
        // Si ya existía un documento para este requisito en este dossier, lo actualizamos o borramos el anterior
        const existingDoc = await prisma.userDocument.findFirst({
            where: { dossierId: dossier.id, requirementId }
        });

        let documentRecord;
        if (existingDoc) {
            documentRecord = await prisma.userDocument.update({
                where: { id: existingDoc.id },
                data: { fileUrl, fileName: file.name, status: 'PENDIENTE' }
            });
        } else {
            documentRecord = await prisma.userDocument.create({
                data: {
                    dossierId: dossier.id,
                    requirementId,
                    fileUrl,
                    fileName: file.name,
                    status: 'PENDIENTE'
                }
            });
        }

        return NextResponse.json({
            success: true,
            message: "Archivo guardado correctamente",
            data: {
                id: documentRecord.id,
                url: fileUrl,
                fileName: file.name,
                status: "PENDIENTE"
            }
        });

    } catch (error) {
        console.error("Error en subida real:", error);
        return NextResponse.json({ error: "Error al procesar el archivo" }, { status: 500 });
    }
}
