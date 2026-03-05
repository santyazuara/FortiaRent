"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import SectionHeader from "@/components/common/SectionHeader";
import Accordion from "@/components/common/Accordion";
import Button from "@/components/ui/Button";
import { policyCategories, contactoInfo } from "@/config/content";
import { motion } from "framer-motion";
import {
  Home,
  Landmark,
  FileText,
  Building2,
  MessageSquare,
} from "lucide-react";

interface ComparativeRow {
  feature: string;
  basica: boolean;
  plus: boolean;
  premium: boolean;
}

const comparativo: ComparativeRow[] = [
  { feature: "Revisión de contrato", basica: true, plus: true, premium: true },
  { feature: "Perfilamiento de inquilino / contraparte", basica: false, plus: true, premium: true },
  { feature: "Acompañamiento en firma", basica: false, plus: true, premium: true },
  { feature: "Asesoría express por caso", basica: true, plus: true, premium: true },
  { feature: "Seguimiento de proceso jurídico", basica: false, plus: true, premium: true },
  { feature: "Acceso a abogado asignado", basica: false, plus: false, premium: true },
  { feature: "Atención prioritaria", basica: false, plus: false, premium: true },
  { feature: "Reportes periódicos de estatus", basica: false, plus: false, premium: true },
];

const policyIcons: Record<string, React.ElementType> = {
  "arrendamiento": Home,
  "propiedad-posesion": Landmark,
  "contratos-documentos": FileText,
  "empresas-cumplimiento": Building2,
};

const policyColors: Record<string, string> = {
  "arrendamiento": "from-primary to-secondary",
  "propiedad-posesion": "from-secondary to-primary",
  "contratos-documentos": "from-primary/80 to-secondary/80",
  "empresas-cumplimiento": "from-secondary/90 to-primary/90",
};

export default function PolizasPage() {
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
            Cobertura jurídica
          </motion.p>
          <motion.h1
            className="mt-3 max-w-2xl text-3xl font-bold leading-snug text-bg md:text-4xl lg:text-[2.6rem]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            Coberturas jurídicas para cada tipo de operación
          </motion.h1>
          <motion.p
            className="mt-4 max-w-xl text-[0.97rem] leading-relaxed text-bg/75"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            Elige el esquema que mejor se adapta a tu caso. Te acompañamos desde
            la cotización hasta el cierre, con procesos claros y tiempos de
            respuesta definidos.
          </motion.p>
          <motion.div
            className="mt-7 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <Button
              href={contactoInfo.whatsappLink}
              size="lg"
              className="bg-accent text-primary hover:opacity-90"
            >
              Cotizar mi póliza
            </Button>
            <Button
              href="#comparativo"
              size="lg"
              className="border border-bg/30 bg-transparent text-bg hover:bg-bg/10"
            >
              Ver comparativo
            </Button>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ─── POLICY CARDS ─── */}
      <AnimatedSection className="bg-page py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Tipos de póliza"
            title="Escoge tu cobertura"
            subtitle="Cada póliza está diseñada para un contexto específico. Selecciona la que más se acerque a tu situación."
            glow
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {policyCategories.map((cat, i) => {
              const Icon = policyIcons[cat.id] ?? FileText;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="overflow-hidden rounded-2xl border border-soft bg-surface shadow-sm transition-shadow hover:shadow-[0_8px_32px_rgba(15,46,58,0.12)]"
                >
                  {/* Card header */}
                  <div className={`bg-gradient-to-br ${policyColors[cat.id] ?? "from-primary to-secondary"} px-5 py-5`}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bg/10 backdrop-blur-sm">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h2 className="text-base font-bold leading-tight text-bg">
                          {cat.nombre}
                        </h2>
                        <p className="mt-0.5 text-xs text-bg/70">{cat.resumen}</p>
                      </div>
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="px-5 py-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary/80">
                      Incluye
                    </p>
                    <ul className="mt-3 space-y-2">
                      {cat.incluye.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted">
                          <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Accordion detail */}
                    <div className="mt-4 border-t border-soft pt-4">
                      <Accordion
                        items={[
                          {
                            id: `${cat.id}-cobertura`,
                            titulo: "Detalle de cobertura",
                            contenido: (
                              <ul className="space-y-1.5 text-sm">
                                {cat.detalle.cobertura.map((item) => (
                                  <li key={item} className="flex gap-2">
                                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            ),
                          },
                          {
                            id: `${cat.id}-proceso`,
                            titulo: "Proceso de contratación",
                            contenido: (
                              <ol className="space-y-1.5 text-sm">
                                {cat.detalle.proceso.map((item, idx) => (
                                  <li key={item} className="flex gap-2">
                                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-bg">
                                      {idx + 1}
                                    </span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ol>
                            ),
                          },
                          {
                            id: `${cat.id}-exclusiones`,
                            titulo: "Exclusiones",
                            contenido: (
                              <ul className="space-y-1.5 text-sm">
                                {cat.detalle.exclusiones.map((item) => (
                                  <li key={item} className="flex gap-2 text-muted/80">
                                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/50" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            ),
                          },
                        ]}
                      />
                    </div>

                    <Button
                      href={contactoInfo.whatsappLink}
                      className="mt-4 w-full justify-center"
                      size="md"
                    >
                      Cotizar esta póliza
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* ─── COMPARATIVO ─── */}
      <AnimatedSection id="comparativo" className="bg-surface pb-14 pt-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Comparativo"
            title="¿Qué nivel de servicio necesitas?"
            subtitle="Compara los esquemas Básica, Plus y Premium para encontrar el que mejor se adapta a tu situación."
            align="center"
          />

          <div className="mt-8 overflow-hidden rounded-2xl border border-soft shadow-sm">
            <table className="min-w-full text-sm">
              <thead>
                <tr>
                  <th className="bg-surface px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    Alcance
                  </th>
                  {(["Básica", "Plus", "Premium"] as const).map((plan) => (
                    <th
                      key={plan}
                      className={`px-4 py-4 text-center text-xs font-semibold uppercase tracking-[0.12em] ${plan === "Premium"
                          ? "bg-primary text-accent"
                          : "bg-surface text-muted"
                        }`}
                    >
                      {plan === "Premium" && (
                        <span className="mb-1 block text-[9px] tracking-widest text-accent/70">
                          RECOMENDADO
                        </span>
                      )}
                      {plan}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparativo.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-t border-soft/60 ${i % 2 === 0 ? "bg-page/40" : "bg-surface"}`}
                  >
                    <td className="px-5 py-3 text-sm font-medium text-primary">
                      {row.feature}
                    </td>
                    {(["basica", "plus", "premium"] as const).map((col) => {
                      const val = row[col];
                      return (
                        <td
                          key={col}
                          className={`px-4 py-3 text-center ${col === "premium" ? "bg-primary/5" : ""}`}
                        >
                          {val ? (
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-bg">
                              ✓
                            </span>
                          ) : (
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-soft/80 text-muted/40">
                              —
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[11px] text-muted">
            La información anterior es referencial y no constituye oferta
            contractual. Los alcances finales se detallan en la propuesta y en
            la póliza correspondiente.
          </p>
        </div>
      </AnimatedSection>

      {/* ─── PROCESO RÁPIDO ─── */}
      <AnimatedSection className="bg-page py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <SectionHeader
            eyebrow="¿Cómo funciona?"
            title="Tu póliza en cuatro pasos"
            subtitle="Contratamos de forma ágil, sin papeleo complicado y con acompañamiento en todo momento."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              { num: "01", titulo: "Elige tu tipo de póliza", desc: "Selecciona la cobertura que mejor se ajusta a tu operación." },
              { num: "02", titulo: "Comparte tu caso", desc: "Cuéntanos los detalles por WhatsApp o mediante el formulario de contacto." },
              { num: "03", titulo: "Recibe tu propuesta", desc: "En 24 horas preparamos una propuesta personalizada con condiciones claras." },
              { num: "04", titulo: "Firma y activa tu póliza", desc: "Revisamos el contrato juntos y activamos tu cobertura al instante." },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                className="relative rounded-2xl border border-soft bg-surface px-5 py-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span className="text-4xl font-black leading-none text-accent/30">
                  {step.num}
                </span>
                <h3 className="mt-2 text-sm font-semibold text-primary">
                  {step.titulo}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ─── CTA FINAL ─── */}
      <AnimatedSection className="bg-surface pb-16 pt-4">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-primary px-6 py-10 text-center shadow-[0_18px_45px_rgba(15,46,58,0.3)] md:px-10">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
              <MessageSquare className="h-5 w-5 text-accent" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-bg md:text-2xl">
              ¿No sabes qué póliza necesitas?
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-bg/75">
              Cuéntanos brevemente tu situación y Santiago te ayuda a
              identificar la cobertura correcta en minutos.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button
                href={contactoInfo.whatsappLink}
                size="lg"
                className="bg-accent text-primary hover:opacity-90"
              >
                Hablar con un asesor
              </Button>
              <Button
                href="/contacto"
                size="lg"
                className="border border-bg/30 bg-transparent text-bg hover:bg-bg/10"
              >
                Ir al formulario
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
