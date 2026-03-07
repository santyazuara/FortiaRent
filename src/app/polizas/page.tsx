"use client";

import { useState } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import SectionHeader from "@/components/common/SectionHeader";
import Button from "@/components/ui/Button";
import { contactoInfo } from "@/config/content";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Home,
  MessageSquare,
  FileText,
  AlertCircle,
  Clock
} from "lucide-react";

const policies = [
  {
    id: "tradicional",
    titulo: "Póliza Tradicional",
    descripcion: "La Póliza Tradicional brinda protección jurídica esencial para operaciones de arrendamiento, garantizando respaldo legal al propietario en caso de incumplimiento del contrato.",
    bullets: [
      "Elaboración del contrato de arrendamiento",
      "Asistencia de un abogado durante la firma del contrato (*1)",
      "Cobranza extrajudicial de rentas",
      "Apoyo extrajudicial ante cualquier incumplimiento del contrato",
      "Elaboración del acta de entrega del inmueble y, en su caso, el convenio correspondiente",
      "Asistencia de un abogado durante la entrega del inmueble en caso de controversia (*1)",
      "Juicio para promover la recuperación del inmueble por falta de pago de rentas",
      "Juicio para promover la recuperación del inmueble por abandono",
      "Juicio para promover la recuperación del inmueble por vencimiento del contrato",
      "Honorarios de abogados incluidos",
      "Consulta de antecedentes legales del inquilino",
    ],
    destacada: false,
    label_cta: "Solicitar Póliza Tradicional"
  },
  {
    id: "plus",
    titulo: "Póliza Plus",
    descripcion: "La Póliza Plus ofrece un nivel de protección jurídica más amplio para propietarios que buscan mayor seguridad en su operación de arrendamiento.",
    adicional: "Incluye todo lo de la Póliza Tradicional, más los siguientes elementos adicionales:",
    bullets: [
      "Consulta ante el Registro Público de la Propiedad del inmueble en garantía",
      "Juicio para promover la cobranza de adeudos de rentas y servicios",
      "Consulta de antecedentes legales del fiador",
    ],
    destacada: true,
    label_cta: "Solicitar Póliza Plus"
  }
];

const comparativo = [
  { feature: "Elaboración de contrato de arrendamiento", tradicional: true, plus: true },
  { feature: "Asistencia de abogado en firma", tradicional: true, plus: true },
  { feature: "Cobranza extrajudicial de rentas", tradicional: true, plus: true },
  { feature: "Apoyo extrajudicial ante incumplimientos", tradicional: true, plus: true },
  { feature: "Acta de entrega del inmueble", tradicional: true, plus: true },
  { feature: "Juicio para recuperación del inmueble", tradicional: true, plus: true },
  { feature: "Honorarios de abogados", tradicional: true, plus: true },
  { feature: "Consulta antecedentes del inquilino", tradicional: true, plus: true },
  { feature: "Consulta Registro Público de la Propiedad", tradicional: false, plus: true },
  { feature: "Juicio para cobrar rentas y servicios", tradicional: false, plus: true },
  { feature: "Consulta antecedentes del fiador", tradicional: false, plus: true },
];

export default function PolizasPage() {
  return (
    <div className="bg-page">
      {/* ─── HERO ─── */}
      <AnimatedSection className="relative overflow-hidden bg-primary pb-16 pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 lg:px-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Pólizas Jurídicas de Arrendamiento
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90">
              En <span className="text-accent font-semibold">Fortiarent</span> ofrecemos pólizas jurídicas diseñadas para brindar seguridad legal y tranquilidad a propietarios y asesores inmobiliarios durante todo el proceso de arrendamiento.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
                <p className="text-sm leading-relaxed text-white/80">
                  Una póliza jurídica de arrendamiento es un contrato de prestación de servicios legales que garantiza la intervención de nuestros abogados en favor del propietario en caso de incumplimiento del contrato por parte del arrendatario.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
                <p className="text-sm leading-relaxed text-white/80">
                  Este servicio funciona de forma similar a un seguro, ya que brinda respaldo legal ante diferentes situaciones que pueden presentarse durante la vigencia del contrato.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ─── POLIZAS ─── */}
      <AnimatedSection className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Nuestros Planes"
            title="Conoce nuestras pólizas"
            subtitle="Contamos con dos opciones de protección jurídica que se adaptan a las necesidades de cada operación de arrendamiento."
            align="center"
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {policies.map((policy, i) => (
              <motion.div
                key={policy.id}
                className={`flex flex-col rounded-3xl border p-8 shadow-xl transition-all hover:scale-[1.02] ${policy.destacada
                    ? "border-primary bg-primary text-white"
                    : "border-soft bg-page text-primary"
                  }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${policy.destacada ? "bg-accent/20" : "bg-primary/10"
                    }`}>
                    {policy.destacada ? <ShieldCheck className="h-6 w-6 text-accent" /> : <Home className="h-6 w-6 text-accent" />}
                  </div>
                  <h3 className="text-2xl font-bold">{policy.titulo}</h3>
                </div>

                <p className={`mt-6 text-[0.95rem] leading-relaxed ${policy.destacada ? "text-white/80" : "text-muted"}`}>
                  {policy.descripcion}
                </p>

                {policy.adicional && (
                  <p className="mt-6 text-sm font-bold text-accent italic">
                    {policy.adicional}
                  </p>
                )}

                <div className="mt-8 flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Incluye</p>
                  <ul className="space-y-3">
                    {policy.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <Button
                    href={contactoInfo.whatsappLink}
                    variant={policy.destacada ? "secondary" : "outline"}
                    size="lg"
                    className="w-full justify-center"
                  >
                    {policy.label_cta}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ─── COMPARATIVA ─── */}
      <AnimatedSection className="bg-page py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Comparativa"
            title="Comparativa de pólizas"
            align="center"
          />

          <div className="mt-12 overflow-hidden rounded-3xl border border-soft shadow-2xl bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-5 text-sm font-bold">Servicio</th>
                    <th className="px-6 py-5 text-center text-sm font-bold">Tradicional</th>
                    <th className="px-6 py-5 text-center text-sm font-bold">Plus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-soft">
                  {comparativo.map((row, idx) => (
                    <tr key={row.feature} className={idx % 2 === 0 ? "bg-page/30" : "bg-white/5"}>
                      <td className="px-6 py-4 text-sm font-medium text-primary">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {row.tradicional ? (
                          <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-accent text-primary">✔</div>
                        ) : (
                          <span className="text-muted/40">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.plus ? (
                          <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-accent text-primary">✔</div>
                        ) : (
                          <span className="text-muted/40">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4 rounded-2xl bg-surface border border-soft p-6 shadow-sm">
              <AlertCircle className="h-6 w-6 text-accent shrink-0" />
              <div>
                <h4 className="font-bold text-primary">Notas importantes</h4>
                <p className="mt-2 text-sm text-muted italic">
                  *1 La asistencia de un abogado está sujeta a disponibilidad.
                </p>
                <p className="mt-4 text-sm font-semibold text-secondary hover:underline cursor-pointer">
                  Consulte los términos y condiciones
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-accent/10 border border-accent/20 p-6 shadow-sm">
              <Clock className="h-6 w-6 text-accent shrink-0" />
              <div>
                <h4 className="font-bold text-primary">Trámite de investigación</h4>
                <p className="mt-2 text-sm text-primary/80">
                  Para iniciar el trámite de investigación se deberá realizar un depósito de <span className="font-bold">$1,000 pesos</span>, el cual se tomará a cuenta del costo total de la póliza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ─── CTA FINAL ─── */}
      <AnimatedSection className="bg-primary py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="flex justify-center mb-8">
            <div className="relative h-20 w-20 flex items-center justify-center rounded-full bg-accent/20">
              <ShieldCheck className="h-10 w-10 text-accent animate-pulse" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Protege tu operación de arrendamiento
          </h2>
          <p className="mt-6 text-lg text-white/80">
            En <span className="text-accent font-semibold">Fortiarent</span> te ayudamos a rentar con seguridad jurídica y respaldo legal durante toda la vigencia del contrato.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button
              href={contactoInfo.whatsappLink}
              size="lg"
              variant="secondary"
              className="px-10"
            >
              Solicitar Póliza
            </Button>
            <Button
              href={contactoInfo.whatsappLink}
              size="lg"
              variant="outlineWhite"
              className="px-10"
            >
              Hablar con un asesor
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
