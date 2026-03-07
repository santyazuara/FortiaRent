"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import SectionHeader from "@/components/common/SectionHeader";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
    "seguridad legal",
    "respaldo profesional",
    "acompañamiento durante todo el contrato",
];

export default function ValueProp() {
    return (
        <AnimatedSection className="bg-surface py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
                <div className="flex flex-col gap-10 md:flex-row md:items-center">
                    <div className="md:w-1/2">
                        <SectionHeader
                            eyebrow="Propuesta de valor"
                            title="Protección jurídica para cada operación"
                            subtitle="En Fortiarent brindamos soluciones jurídicas especializadas para propietarios y asesores inmobiliarios."
                            align="left"
                        />
                        <p className="mt-6 text-[0.975rem] leading-relaxed text-muted">
                            Nuestro servicio de pólizas jurídicas de arrendamiento te permite
                            rentar con tranquilidad, sabiendo que cada detalle legal está
                            cubierto por profesionales.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-soft bg-page px-8 py-8 shadow-sm md:w-1/2">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
                            Renta con total:
                        </p>
                        <ul className="mt-6 space-y-4">
                            {benefits.map((benefit, i) => (
                                <motion.li
                                    key={benefit}
                                    className="flex items-center gap-3 text-sm font-medium text-primary"
                                    initial={{ opacity: 0, x: 12 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <CheckCircle2 className="h-5 w-5 text-accent" />
                                    <span>{benefit}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <p className="mt-8 text-sm leading-relaxed text-muted">
                            Nos encargamos de prevenir riesgos legales y actuar de manera
                            inmediata en caso de incumplimiento.
                        </p>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}
