"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import Accordion from "@/components/common/Accordion";
import Button from "@/components/ui/Button";
import { faqs, contactoInfo } from "@/config/content";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ShieldCheck,
  Send,
  CreditCard,
  FileText,
} from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  "Cobertura": ShieldCheck,
  "Solicitudes": Send,
  "Pagos": CreditCard,
  "Documentos": FileText,
};

export default function PreguntasFrecuentesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? faqs.filter((f) => f.categoria === activeCategory)
    : faqs;

  return (
    <div className="bg-page">
      {/* ─── HERO ─── */}
      <AnimatedSection className="relative overflow-hidden bg-primary pb-14 pt-12 md:pb-20 md:pt-16">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.2em] text-accent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Preguntas frecuentes
          </motion.p>
          <motion.h1
            className="mt-3 max-w-2xl text-3xl font-bold leading-snug text-bg md:text-4xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            Resolvemos las dudas más comunes sobre nuestras pólizas
          </motion.h1>
          <motion.p
            className="mt-4 max-w-xl text-[0.97rem] leading-relaxed text-bg/75"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            Hemos reunido las preguntas que más nos hacen. Si no encuentras tu
            respuesta aquí, Santiago te atiende por WhatsApp en minutos.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-7"
          >
            <Button
              href={contactoInfo.whatsappLink}
              size="lg"
              className="bg-accent text-primary hover:opacity-90"
            >
              Hacer mi pregunta por WhatsApp
            </Button>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ─── CATEGORY FILTERS ─── */}
      <AnimatedSection className="border-b border-soft bg-surface py-6">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-xs font-medium text-muted">
              Filtrar por:
            </span>
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${activeCategory === null
                  ? "border-primary bg-primary text-bg"
                  : "border-soft bg-surface text-muted hover:bg-accent/40"
                }`}
            >
              Todas las categorías
            </button>
            {faqs.map((cat) => {
              const Icon = categoryIcons[cat.categoria] ?? FileText;
              return (
                <button
                  key={cat.categoria}
                  type="button"
                  onClick={() =>
                    setActiveCategory(
                      activeCategory === cat.categoria ? null : cat.categoria
                    )
                  }
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${activeCategory === cat.categoria
                      ? "border-primary bg-primary text-bg"
                      : "border-soft bg-surface text-muted hover:bg-accent/40"
                    }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {cat.categoria}
                </button>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* ─── FAQs ─── */}
      <AnimatedSection className="bg-page py-12 md:py-16">
        <div className="mx-auto max-w-6xl space-y-10 px-4 md:px-6 lg:px-8">
          {filtered.map((cat, i) => {
            const Icon = categoryIcons[cat.categoria] ?? FileText;
            return (
              <motion.section
                key={cat.categoria}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                    <Icon className="h-4 w-4 text-accent" />
                  </div>
                  <h2 className="text-base font-semibold text-primary">
                    {cat.categoria}
                  </h2>
                  <span className="rounded-full bg-accent/60 px-2 py-0.5 text-[10px] font-semibold text-primary">
                    {cat.preguntas.length}{" "}
                    {cat.preguntas.length === 1 ? "pregunta" : "preguntas"}
                  </span>
                </div>
                <div className="overflow-hidden rounded-2xl border border-soft bg-surface">
                  <Accordion
                    items={cat.preguntas.map((p) => ({
                      id: p.pregunta,
                      titulo: p.pregunta,
                      contenido: (
                        <p className="text-sm leading-relaxed text-muted">
                          {p.respuesta}
                        </p>
                      ),
                    }))}
                  />
                </div>
              </motion.section>
            );
          })}
        </div>
      </AnimatedSection>

      {/* ─── CTA FINAL ─── */}
      <AnimatedSection className="bg-surface pb-16 pt-4">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-primary px-6 py-10 shadow-[0_18px_45px_rgba(15,46,58,0.3)] md:flex md:items-center md:justify-between md:px-10">
            <div className="max-w-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                ¿Aún tienes dudas?
              </p>
              <h3 className="mt-2 text-xl font-bold text-bg md:text-2xl">
                Tu caso puede ser distinto
              </h3>
              <p className="mt-2 text-sm text-bg/75">
                Si tu situación es específica o no encontraste lo que buscabas,
                Santiago te atiende directamente por WhatsApp sin compromiso.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 md:mt-0 md:flex-col md:items-end">
              <Button
                href={contactoInfo.whatsappLink}
                size="lg"
                className="bg-accent text-primary hover:opacity-90"
              >
                Hablar con un asesor
              </Button>
              <Button
                href="/polizas"
                size="lg"
                className="border border-bg/30 bg-transparent text-bg hover:bg-bg/10"
              >
                Ver nuestras pólizas
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
