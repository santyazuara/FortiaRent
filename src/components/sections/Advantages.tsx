"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import SectionHeader from "@/components/common/SectionHeader";
import { ShieldAlert, BookOpenCheck, Landmark, ReceiptText } from "lucide-react";
import { motion } from "framer-motion";

const advantages = [
    {
        Icon: Landmark,
        titulo: "Garantía de recuperación",
        descripcion: "Aseguramos la recuperación del inmueble en caso de incumplimiento.",
    },
    {
        Icon: BookOpenCheck,
        titulo: "Recuperación de rentas",
        descripcion: "Gestionamos el cobro de rentas vencidas o no pagadas.",
    },
    {
        Icon: ReceiptText,
        titulo: "Pago de servicios",
        descripcion: "Incluimos la recuperación de pagos de servicios pendientes.",
    },
    {
        Icon: ShieldAlert,
        titulo: "Extinción de dominio",
        descripcion: "Cobertura especializada contra procesos de extinción de dominio.",
    },
];

export default function Advantages() {
    return (
        <AnimatedSection className="bg-page py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
                <SectionHeader
                    eyebrow="Beneficios"
                    title="Seguridad jurídica real para tu patrimonio"
                    subtitle="En Fortiarent trabajamos para proteger tu propiedad y asegurar el cumplimiento del contrato de arrendamiento."
                    align="left"
                />

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {advantages.map(({ Icon, titulo, descripcion }, i) => (
                        <motion.div
                            key={titulo}
                            className="flex flex-col rounded-3xl border border-soft bg-surface p-8 transition-shadow hover:shadow-[0_12px_32px_rgba(15,46,58,0.12)]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary">
                                <Icon className="h-6 w-6 text-accent" />
                            </div>
                            <h3 className="mt-6 text-lg font-bold text-primary">{titulo}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted">
                                {descripcion}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
