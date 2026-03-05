"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import Button from "@/components/ui/Button";
import { contactoInfo } from "@/config/content";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Mail,
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Phone,
} from "lucide-react";

const contactCards = [
  {
    Icon: MessageSquare,
    titulo: "WhatsApp",
    valor: contactoInfo.whatsapp,
    descripcion: "La forma más rápida de hablar con Santiago.",
    cta: "Escribir ahora",
    href: contactoInfo.whatsappLink,
    highlight: true,
  },
  {
    Icon: Mail,
    titulo: "Correo electrónico",
    valor: contactoInfo.correo,
    descripcion: "Para consultas formales o envío de documentos.",
    cta: "Enviar correo",
    href: `mailto:${contactoInfo.correo}`,
    highlight: false,
  },
  {
    Icon: Clock,
    titulo: "Horario de atención",
    valor: "Lun–Vie · 9:00–19:00 h",
    descripcion: "Respondemos mensajes fuera de horario para el siguiente día hábil.",
    cta: null,
    href: null,
    highlight: false,
  },
  {
    Icon: MapPin,
    titulo: "Ubicación",
    valor: "Ciudad de México",
    descripcion: contactoInfo.direccion,
    cta: null,
    href: null,
    highlight: false,
  },
];

const coverageZones = [
  "Ciudad de México",
  "Área Metropolitana (EDOMEX)",
  "Guadalajara, Jalisco",
  "Monterrey, Nuevo León",
  "Querétaro",
  "Puebla",
  "Otras ciudades clave del país",
];

const steps = [
  { num: "01", titulo: "Escríbenos", desc: "Contáctanos por WhatsApp o correo y cuéntanos brevemente tu situación." },
  { num: "02", titulo: "Analizamos tu caso", desc: "En menos de 24 h te respondemos con una evaluación inicial y opciones." },
  { num: "03", titulo: "Te enviamos una propuesta", desc: "Preparamos una propuesta personalizada clara y sin letra chica." },
  { num: "04", titulo: "Activamos tu póliza", desc: "Una vez que eliges tu cobertura, la activamos de forma inmediata." },
];

export default function ContactoPage() {
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
            Contacto
          </motion.p>
          <motion.h1
            className="mt-3 max-w-2xl text-3xl font-bold leading-snug text-bg md:text-4xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            Hablemos sobre tu cobertura jurídica
          </motion.h1>
          <motion.p
            className="mt-4 max-w-xl text-[0.97rem] leading-relaxed text-bg/75"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            Cuéntanos tu situación y en minutos te ayudamos a identificar qué
            cobertura necesitas, sin compromisos y sin tecnicismos.
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
              Hablar con Santiago ahora
            </Button>
            <Button
              href="/polizas"
              size="lg"
              className="border border-bg/30 bg-transparent text-bg hover:bg-bg/10"
            >
              Ver tipos de póliza
            </Button>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ─── CONTACT CARDS ─── */}
      <AnimatedSection className="bg-page py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {contactCards.map((card, i) => (
              <motion.div
                key={card.titulo}
                className={`relative overflow-hidden rounded-2xl border transition-shadow hover:shadow-[0_8px_24px_rgba(15,46,58,0.12)] ${card.highlight
                    ? "border-primary bg-primary"
                    : "border-soft bg-surface"
                  }`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="px-5 py-5">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${card.highlight ? "bg-accent/20" : "bg-primary"}`}>
                    <card.Icon className={`h-4 w-4 ${card.highlight ? "text-accent" : "text-accent"}`} />
                  </div>
                  <p className={`mt-3 text-xs font-semibold uppercase tracking-[0.14em] ${card.highlight ? "text-accent" : "text-secondary/80"}`}>
                    {card.titulo}
                  </p>
                  <p className={`mt-1 font-semibold leading-snug ${card.highlight ? "text-bg text-base" : "text-primary text-sm"}`}>
                    {card.valor}
                  </p>
                  <p className={`mt-2 text-xs leading-relaxed ${card.highlight ? "text-bg/70" : "text-muted"}`}>
                    {card.descripcion}
                  </p>
                  {card.href && card.cta && (
                    <a
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`mt-4 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${card.highlight
                          ? "bg-accent text-primary hover:opacity-90"
                          : "border border-soft bg-page text-secondary hover:border-primary/40 hover:bg-accent/40 hover:text-primary"
                        }`}
                    >
                      {card.cta}
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
                {card.highlight && (
                  <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-accent/10 blur-xl" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ─── ZONAS DE COBERTURA ─── */}
      <AnimatedSection className="bg-surface py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary/80">
                Cobertura geográfica
              </p>
              <h2 className="mt-2 text-xl font-bold text-primary md:text-2xl">
                Disponibles en las principales ciudades de México
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Trabajamos de forma remota con clientes en todo el país.
                Nuestros servicios jurídicos no requieren presencia física, lo
                que nos permite atenderte sin importar tu ubicación.
              </p>
              <div className="mt-6">
                <Button href={contactoInfo.whatsappLink} size="lg">
                  Verificar tu zona
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {coverageZones.map((zone, i) => (
                <motion.div
                  key={zone}
                  className="flex items-center gap-2 rounded-xl border border-soft bg-page/70 px-4 py-3"
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent" />
                  <span className="text-xs font-medium text-primary">{zone}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ─── PROCESO ─── */}
      <AnimatedSection className="bg-page py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary/80">
              ¿Cómo te atendemos?
            </p>
            <h2 className="mt-2 text-xl font-bold text-primary md:text-2xl">
              Del primer contacto a la activación de tu póliza
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="rounded-2xl border border-soft bg-surface px-5 py-5"
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
              <Phone className="h-5 w-5 text-accent" />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Sin formularios, sin esperas
            </p>
            <h3 className="mt-2 text-xl font-bold text-bg md:text-2xl">
              Escríbenos directamente por WhatsApp
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-bg/75">
              Santiago responde personalmente. Sin bots, sin esperar días.
              Cuéntanos en qué te podemos ayudar.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button
                href={contactoInfo.whatsappLink}
                size="lg"
                className="bg-accent text-primary hover:opacity-90"
              >
                Iniciar conversación en WhatsApp
              </Button>
            </div>
            <p className="mt-4 text-xs text-bg/50">
              Número: {contactoInfo.whatsapp} · {contactoInfo.horario}
            </p>
          </div>
        </div>
      </AnimatedSection>

    </div>
  );
}
