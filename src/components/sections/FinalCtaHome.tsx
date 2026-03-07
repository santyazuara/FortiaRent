"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import Button from "@/components/ui/Button";
import { contactoInfo } from "@/config/content";
import { Send } from "lucide-react";

export default function FinalCtaHome() {
    return (
        <AnimatedSection className="bg-surface py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
                <div className="overflow-hidden rounded-3xl bg-primary px-8 py-12 text-center shadow-[0_24px_50px_rgba(15,46,58,0.3)] md:px-16">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20">
                        <Send className="h-7 w-7 text-accent" />
                    </div>

                    <h2 className="mt-6 text-2xl font-bold text-bg md:text-3xl lg:text-4xl">
                        Protege tu propiedad hoy
                    </h2>

                    <p className="mt-4 mx-auto max-w-2xl text-[0.975rem] leading-relaxed text-bg/75">
                        Evita riesgos legales y renta con tranquilidad. Nuestro equipo te
                        ayudará a encontrar la póliza perfecta para tu caso.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        <Button
                            href={contactoInfo.whatsappLink}
                            size="lg"
                            variant="secondary"
                            className="shadow-2xl ring-4 ring-accent/30"
                        >
                            Solicitar póliza
                        </Button>
                        <Button
                            href="/contacto"
                            size="lg"
                            variant="outlineWhite"
                        >
                            Contactar asesor
                        </Button>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}
