"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import SectionHeader from "@/components/common/SectionHeader";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { media } from "@/config/media";
import Image from "next/image";

const benefits = [
    "seguridad legal",
    "respaldo profesional",
    "acompañamiento durante todo el contrato",
];

export default function ValueProp() {
    return (
        <AnimatedSection className="bg-surface py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div>
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

                        <div className="mt-8 rounded-2xl border border-soft bg-page px-8 py-8 shadow-sm">
                            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
                                Renta con total:
                            </p>
                            <ul className="mt-6 space-y-4">
                                {benefits.map((benefit, i) => (
                                    <motion.li
                                        key={benefit}
                                        className="flex items-center gap-4 text-base font-bold text-primary"
                                        initial={{ opacity: 0, x: 12 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
                                            <CheckCircle2 className="h-6 w-6 text-primary" strokeWidth={2.5} />
                                        </div>
                                        <span className="capitalize">{benefit}</span>
                                    </motion.li>
                                ))}
                            </ul>
                            <p className="mt-8 text-sm leading-relaxed text-muted">
                                Nos encargamos de prevenir riesgos legales y actuar de manera
                                inmediata en caso de incumplimiento.
                            </p>
                        </div>
                    </div>

                    <div className="relative group lg:h-full min-h-[400px]">
                        <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl group-hover:bg-accent/20 transition-all duration-500" />
                        <div className="relative h-full w-full overflow-hidden rounded-3xl border border-soft bg-surface shadow-2xl">
                            <Image
                                src={media.aboutHero}
                                alt="Protección legal inmobiliaria"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}
