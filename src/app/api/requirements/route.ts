import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const category = searchParams.get("category");

        if (!category) {
            return NextResponse.json({ error: "Categoría es necesaria" }, { status: 400 });
        }

        // 1. SELECT * FROM document_requirements WHERE category_id = category
        // Esto es muy útil porque si agregas un nuevo documento en la DB,
        // el dashboard se actualiza solo sin tocar el código del frontend.

        const allRequirements: Record<string, any[]> = {
            arrendador: [
                { id: 1, name: "Identificación oficial vigente", desc: "INE, Pasaporte o Cédula", is_required: true },
                { id: 2, name: "Boleta de predial", desc: "Última boleta pagada", is_required: true },
            ],
            arrendatario: [
                { id: 3, name: "Solicitud de póliza", desc: "Debidamente llenada", is_required: true },
                { id: 4, name: "Identificación oficial", desc: "INE, Pasaporte o Cédula", is_required: true },
                { id: 5, name: "Comprobantes de ingresos", desc: "Últimos 6 meses", is_required: true },
                { id: 6, name: "Carta laboral", desc: "Con antigüedad, puesto y sueldo", is_required: true },
                { id: 7, name: "Forma migratoria", desc: "Solo extranjeros", is_required: false },
                { id: 8, name: "Estados de cuenta", desc: "Últimos 3 meses", is_required: true },
            ],
            solidario_sin: [
                { id: 9, name: "Identificación oficial", desc: "Vigente", is_required: true },
                { id: 10, name: "Comprobante de domicilio", desc: "Menor a 3 meses", is_required: true },
                { id: 11, name: "Estados de cuenta", desc: "Últimos 3 meses", is_required: true },
            ],
            empresa: [
                { id: 12, name: "Acta Constitutiva", desc: "Copia completa", is_required: true },
                { id: 22, name: "Poder Notarial", desc: "Representante legal", is_required: true },
                { id: 32, name: "RFC", desc: "Cédula Fiscal", is_required: true },
                { id: 42, name: "Constancia Situación Fiscal", desc: "Actualizada", is_required: true },
                { id: 52, name: "ID del Representante", desc: "Vigente", is_required: true },
                { id: 62, name: "Comprobante Domicilio Empresa", desc: "Menor a 3 meses", is_required: true },
                { id: 72, name: "Declaración anual", desc: "Última declaración anual", is_required: true },
            ]
        };

        const requirements = allRequirements[category] || [];

        return NextResponse.json({ requirements });

    } catch (error) {
        return NextResponse.json({ error: "No se pudieron obtener los requisitos" }, { status: 500 });
    }
}
