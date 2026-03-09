import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import prisma from "@/lib/prisma";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "secreto_fortia_2024");

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json({ error: "Faltan credenciales" }, { status: 400 });
        }

        // 1. Buscar usuario en la base de datos
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });
        }

        // 2. Verificar contraseña
        const isValid = await bcrypt.compare(password, user.passwordHash);

        if (!isValid) {
            return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });
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
        console.error("Login error:", error);
        return NextResponse.json({ error: "Error en el servidor" }, { status: 500 });
    }
}
