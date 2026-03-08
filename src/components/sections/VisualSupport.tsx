"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import { media } from "@/config/media";
import Image from "next/image";

export default function VisualSupport() {
    return (
        <AnimatedSection className="bg-surface py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-12 overflow-hidden rounded-3xl border border-soft shadow-2xl relative h-[450px] group">
                        <Image
                            src={media.hero2}
                            alt="Propiedades de lujo protegidas"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                        <div className="absolute bottom-10 left-10 max-w-2xl">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                                Cobertura Integral
                            </span>
                            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                                Seguridad para inmuebles residenciales y comerciales
                            </h2>
                            <p className="mt-4 text-lg text-white/80">
                                Nuestras pólizas están diseñadas para adaptarse a cualquier tipo de arrendamiento, brindando el mismo nivel de rigor legal en cada contrato.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}
