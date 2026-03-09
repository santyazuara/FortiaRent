import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import prisma from "@/lib/prisma";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "secreto_fortia_2024");

export async function POST(request: Request) {
    let phase = "initialization";
    try {
        const { email: rawEmail, password } = await request.json();
        const email = rawEmail?.toLowerCase().trim();

        if (!email || !password) {
            return NextResponse.json({ error: "Faltan credenciales" }, { status: 400 });
        }

        phase = "database_lookup";
        // 1. Buscar usuario en la base de datos
        const user = await prisma.user.findUnique({
            where: { email }
        });

        console.log(`Login phase ${phase} for: ${email}, Found: ${!!user}`);

        if (!user) {
            return NextResponse.json({ error: "No existe una cuenta con este correo" }, { status: 401 });
        }

        phase = "bcrypt_compare";
        // 2. Verificar contraseña
        const isValid = await bcrypt.compare(password, user.passwordHash);

        console.log(`Login phase ${phase} for: ${email}, Valid: ${isValid}`);

        if (!isValid) {
            return NextResponse.json({ error: "La contraseña es incorrecta" }, { status: 401 });
        }

        // 3. Generar JWT
        const token = await new SignJWT({ userId: user.id, email: user.email, name: user.name })
            .setProtectedHeader({ alg: "HS256" })
            .setExpirationTime("7d")
            .sign(JWT_SECRET);

        const response = NextResponse.json({
            success: true,
            user: { id: user.id, name: user.name, email: user.email }
        });

        response.cookies.set("fortia_auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });

        return response;
    } catch (error) {
        console.error(`Login error at phase: ${phase}`, error);
        return NextResponse.json({ error: `Error en el servidor (fase: ${phase})` }, { status: 500 });
    }
}
