"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import SectionHeader from "@/components/common/SectionHeader";
import Button from "@/components/ui/Button";
import { CheckCircle2, ShieldCheck, Home } from "lucide-react";
import { motion } from "framer-motion";

const policies = [
    {
        titulo: "Póliza Tradicional",
        Icon: Home,
        resumen:
            "Protección jurídica básica para operaciones de arrendamiento con respaldo legal durante toda la vigencia del contrato.",
        bullets: [
            "Revisión de contrato",
            "Asesoría jurídica express",
            "Seguimiento de cobro de rentas",
        ],
    },
    {
        titulo: "Póliza Plus",
        Icon: ShieldCheck,
        resumen:
            "Protección jurídica ampliada con mayor cobertura legal para propietarios y asesores inmobiliarios.",
        bullets: [
            "Perfilamiento de inquilino",
            "Acompañamiento en firma",
            "Proceso de recuperación del inmueble",
        ],
        destacada: true,
    },
];

export default function PolicyPreview() {
    return (
        <AnimatedSection className="bg-surface py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
                <SectionHeader
                    eyebrow="Nuestros planes"
                    title="Conoce nuestras pólizas"
                    subtitle="Tenemos diferentes opciones de protección jurídica para adaptarnos a cada tipo de operación."
                    align="center"
                />

                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto">
                    {policies.map((policy, i) => (
                        <motion.div
                            key={policy.titulo}
                            className={`relative flex flex-col overflow-hidden rounded-3xl border p-8 transition-shadow hover:shadow-[0_12px_32px_rgba(15,46,58,0.1)] ${policy.destacada
                                ? "border-primary bg-primary text-bg"
                                : "border-soft bg-page text-primary"
                                }`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div
                                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${policy.destacada ? "bg-accent/20" : "bg-primary"
                                    }`}
                            >
                                <policy.Icon
                                    className={`h-6 w-6 ${policy.destacada ? "text-accent" : "text-accent"
                                        }`}
                                />
                            </div>

                            <h3 className="mt-6 text-xl font-bold">{policy.titulo}</h3>
                            <p
                                className={`mt-3 text-sm leading-relaxed ${policy.destacada ? "text-bg/75" : "text-muted"
                                    }`}
                            >
                                {policy.resumen}
                            </p>

                            <ul className="mt-6 space-y-3">
                                {policy.bullets.map((bullet) => (
                                    <li key={bullet} className="flex items-start gap-2 text-sm">
                                        <CheckCircle2
                                            className={`mt-0.5 h-4 w-4 shrink-0 ${policy.destacada ? "text-accent" : "text-accent"
                                                }`}
                                        />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-6 border-t border-soft/20">
                                <Button
                                    href="/polizas"
                                    variant={policy.destacada ? "secondary" : "outline"}
                                    className="w-full justify-center shadow-xl"
                                >
                                    Ver detalles
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-14 text-center">
                    <Button
                        href="/polizas"
                        variant="outline"
                        className="border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white shadow-lg transition-all"
                    >
                        Ver todas las pólizas
                    </Button>
                </div>
            </div>
        </AnimatedSection>
    );
}
