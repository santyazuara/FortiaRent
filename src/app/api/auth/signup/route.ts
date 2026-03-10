import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import prisma from "@/lib/prisma";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "secreto_fortia_2024");

export async function POST(request: Request) {
    let phase = "initialization";
    try {
        phase = "parsing_json";
        const { name, email: rawEmail, password } = await request.json();
        const email = rawEmail?.toLowerCase().trim();

        if (!name || !email || !password) {
            return NextResponse.json({ error: "Campos incompletos" }, { status: 400 });
        }

        phase = "check_existing_user";
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return NextResponse.json({ error: "El correo ya está registrado" }, { status: 400 });
        }

        phase = "hashing_password";
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        phase = "creating_user";
        // 1. Crear usuario real en la base de datos
        const user = await prisma.user.create({
            data: {
                name,
                email,
                passwordHash,
            }
        });

        phase = "signing_jwt";
        // 2. Generar JWT
        const token = await new SignJWT({ userId: user.id, email: user.email, name: user.name })
            .setProtectedHeader({ alg: "HS256" })
            .setExpirationTime("7d")
            .sign(JWT_SECRET);

        phase = "preparing_response";
        const response = NextResponse.json({
            success: true,
            user: { id: user.id, name, email }
        });

        // 3. Guardar en Cookie HTTP-Only
        response.cookies.set("fortia_auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });

        return response;
    } catch (error: any) {
        console.error(`Signup error at phase: ${phase}`, error);

        // Provide more detailed feedback for the 500 error
        let errorMsg = `Error en el servidor (fase: ${phase})`;
        if (error.code === 'P2002') {
            errorMsg = `El correo ya está registrado (Error de base de datos en fase: ${phase})`;
        } else if (error.message) {
            errorMsg = `Error interno en fase ${phase}: ${error.message}`;
        }

        return NextResponse.json({
            error: errorMsg,
            phase,
            debug: error.message || error.stack
        }, { status: 500 });
    }
}
