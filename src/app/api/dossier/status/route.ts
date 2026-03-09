import { NextResponse } from "next/server";

// Simula la consulta a la base de datos para obtener el estatus
// En un entorno real, obtendrías el user_id de la sesión (ej: next-auth o cookies)

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get("userId") || "mock-user-123";

        console.log("Consultando expediente para el usuario:", userId);

        // 1. SELECT * FROM dossiers WHERE user_id = userId
        const dossierMock = {
            id: "dossier-abc-789",
            category_type: "arrendatario",
            status: "incompleto",
            created_at: "2024-03-09T00:00:00Z"
        };

        // 2. SELECT * FROM user_documents WHERE dossier_id = dossierId
        const documentsMock = [
            {
                id: "doc-1",
                requirement_id: 1, // Identificación
                file_name: "mi_ine.pdf",
                file_url: "https://mock.mx/mi_ine.pdf",
                status: "validado"
            },
            {
                id: "doc-2",
                requirement_id: 2, // Comprobante
                file_name: "recibo_cfe_marzo.pdf",
                file_url: "https://mock.mx/recibo.pdf",
                status: "pendiente"
            }
        ];

        return NextResponse.json({
            dossier: dossierMock,
            documents: documentsMock,
            remaining_requirements: [3, 4, 5, 6] // IDs de los documentos faltantes
        });

    } catch (error) {
        console.error("Error al obtener estatus:", error);
        return NextResponse.json({ error: "No se pudo obtener el expediente" }, { status: 500 });
    }
}
