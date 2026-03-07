"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { contactoInfo } from "@/config/content";
import { media } from "@/config/media";
import Image from "next/image";

export default function HomeHero() {
    return (
        <section className="relative min-h-[85vh] overflow-hidden bg-primary pt-24 md:pt-32">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={media.hero1}
                    alt="Asesor inmobiliario firmando contrato"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
                <div className="absolute inset-0 bg-primary/20" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <motion.h1
                        className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Blindamos legalmente tus operaciones de arrendamiento
                    </motion.h1>

                    <motion.p
                        className="mt-6 text-lg leading-relaxed text-white/90 md:text-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        En <span className="font-semibold text-accent">Fortiarent</span> diseñamos pólizas jurídicas que protegen tu patrimonio y te permiten rentar con tranquilidad.
                    </motion.p>

                    <motion.p
                        className="mt-4 text-[0.95rem] leading-relaxed text-white/70"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Contamos con un equipo legal completo que acompaña cada operación desde la firma del contrato hasta la conclusión del arrendamiento.
                    </motion.p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Button
                            href={contactoInfo.whatsappLink}
                            size="lg"
                            variant="secondary"
                            className="shadow-2xl ring-4 ring-accent/30"
                        >
                            Solicitar póliza
                        </Button>
                        <Button
                            href="/polizas"
                            size="lg"
                            variant="outlineWhite"
                        >
                            Ver tipos de póliza
                        </Button>
                    </div>
                </div>
            </div>

            {/* Decorative Blur */}
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent opacity-20 blur-3xl" />
        </section>
    );
}
