import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import prisma from "@/lib/prisma";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "secreto_fortia_2024");

export async function POST(request: Request) {
    try {
        const { name, email, password } = await request.json();

        if (!name || !email || !password) {
            return NextResponse.json({ error: "Campos incompletos" }, { status: 400 });
        }

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return NextResponse.json({ error: "El correo ya está registrado" }, { status: 400 });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        // 1. Crear usuario real en la base de datos
        const user = await prisma.user.create({
            data: {
                name,
                email,
                passwordHash,
            }
        });

        // 2. Generar JWT
        const token = await new SignJWT({ userId: user.id, email: user.email, name: user.name })
            .setProtectedHeader({ alg: "HS256" })
            .setExpirationTime("7d")
            .sign(JWT_SECRET);

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
        console.error("Signup error:", error);
        return NextResponse.json({ error: `Error al crear la cuenta: ${error.message}` }, { status: 500 });
    }
}
