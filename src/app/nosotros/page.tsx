"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import SectionHeader from "@/components/common/SectionHeader";
import Button from "@/components/ui/Button";
import { contactoInfo } from "@/config/content";
import { media } from "@/config/media";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Scale,
  LayoutList,
  Handshake,
  ShieldCheck,
  Zap,
  Eye,
  Target,
  Telescope,
} from "lucide-react";

const valores = [
  {
    Icon: Scale,
    titulo: "Claridad",
    descripcion:
      "Explicamos cada cobertura, condición y proceso con lenguaje sencillo para que tomes decisiones informadas.",
  },
  {
    Icon: LayoutList,
    titulo: "Orden",
    descripcion:
      "Estructuramos la documentación y pasos de atención para que sepas qué sigue en cada etapa.",
  },
  {
    Icon: Handshake,
    titulo: "Cercanía",
    descripcion:
      "Escuchamos tu contexto y adaptamos la solución jurídica a tu realidad, no al revés.",
  },
  {
    Icon: ShieldCheck,
    titulo: "Protección",
    descripcion:
      "Tu patrimonio y contratos tienen el respaldo de un equipo especializado en derecho inmobiliario.",
  },
  {
    Icon: Zap,
    titulo: "Agilidad",
    descripcion:
      "Procesos definidos y tiempos de respuesta cortos para que nunca quedes sin certeza jurídica.",
  },
  {
    Icon: Eye,
    titulo: "Transparencia",
    descripcion:
      "Sin letra pequeña, sin sorpresas. Siempre sabes qué cubre tu póliza y qué pasos seguiremos.",
  },
];

const equipo = [
  {
    nombre: "Santiago",
    rol: "Director General",
    bio: "Lidera FortiaRent con enfoque en estrategia, operación y la relación de largo plazo con cada cliente.",
    inicial: "S",
  },
  {
    nombre: "Ana Martínez",
    rol: "Dirección Jurídica",
    bio: "Especialista en contratos civiles y arrendamiento con más de 10 años de práctica en litigio inmobiliario.",
    inicial: "A",
  },
  {
    nombre: "Luis Fernández",
    rol: "Relación con Inmobiliarias",
    bio: "Acompaña a empresas y despachos inmobiliarios en la estructuración de sus procesos de renta.",
    inicial: "L",
  },
  {
    nombre: "Paola Gómez",
    rol: "Coordinación de Pólizas",
    bio: "Supervisa procesos, tiempos de respuesta y documentación para asegurar la calidad en cada caso.",
    inicial: "P",
  },
];

const logros = [
  { valor: "1,200+", etiqueta: "Clientes atendidos" },
  { valor: "3,500+", etiqueta: "Contratos revisados" },
  { valor: "24h", etiqueta: "Tiempo de respuesta" },
  { valor: "4", etiqueta: "Tipos de cobertura" },
];

export default function NosotrosPage() {
  return (
    <div className="bg-page">
      {/* ─── HERO SECTION ─── */}
      <AnimatedSection className="relative overflow-hidden bg-primary pb-14 pt-12 md:pb-20 md:pt-16">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondary blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 md:flex md:items-center md:gap-12 md:px-6 lg:px-8">
          <div className="mb-10 md:mb-0 md:w-3/5">
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-accent"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Quiénes somos
            </motion.p>
            <motion.h1
              className="mt-3 text-3xl font-bold leading-snug text-bg md:text-4xl lg:text-[2.6rem]"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              Un equipo jurídico dedicado a proteger tu patrimonio
            </motion.h1>
            <motion.p
              className="mt-4 max-w-lg text-[0.97rem] leading-relaxed text-bg/75"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              FortiaRent nace de la necesidad de traducir el lenguaje legal en
              soluciones claras para propietarios, inquilinos, inmobiliarias y
              empresas. Más que un producto, somos tu aliado jurídico del día a
              día.
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
                Hablar con un asesor
              </Button>
              <Button
                href="/polizas"
                size="lg"
                className="border border-bg/30 bg-transparent text-bg hover:bg-bg/10"
              >
                Ver coberturas
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="relative md:w-2/5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="overflow-hidden rounded-2xl border border-bg/10 shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
              <div className="relative h-64 w-full md:h-72">
                <Image
                  src={media.aboutHero}
                  alt="Equipo de abogados revisando documentos"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              </div>
              <div className="bg-primary/60 px-5 py-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  Enfoque corporativo, trato cercano
                </p>
                <p className="mt-1 text-sm text-bg/80">
                  Criterios corporativos con un servicio completamente
                  personalizado.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ─── LOGROS ─── */}
      <AnimatedSection className="border-y border-soft bg-accent/20">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {logros.map((logro, i) => (
              <motion.div
                key={logro.etiqueta}
                className="text-center"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <p className="text-2xl font-bold text-primary md:text-3xl">
                  {logro.valor}
                </p>
                <p className="mt-1 text-xs text-muted">{logro.etiqueta}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ─── MISIÓN & VISIÓN ─── */}
      <AnimatedSection className="bg-page py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Propósito"
            title="Lo que nos mueve cada día"
            subtitle="Nuestra misión y visión definen cómo trabajamos y hacia dónde vamos."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-soft bg-surface px-6 py-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <Target className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-base font-semibold text-primary">
                Nuestra misión
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Brindar soluciones jurídicas accesibles y ordenadas que permitan
                a las personas y empresas tomar decisiones sobre sus contratos
                con certeza, reduciendo riesgos y conflictos. Queremos que la
                protección legal sea clara, rápida y al alcance de todos.
              </p>
            </div>
            <div className="rounded-2xl border border-soft bg-surface px-6 py-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <Telescope className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-base font-semibold text-primary">
                Nuestra visión
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Ser el aliado jurídico de referencia en arrendamiento y
                contratos en México, reconocido por la claridad de sus procesos,
                la transparencia de sus coberturas y la cercanía genuina con
                cada cliente, sin importar el tamaño de su operación.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ─── VALORES ─── */}
      <AnimatedSection className="bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Valores"
            title="Los principios que guían nuestro trabajo"
            subtitle="Cada interacción con FortiaRent refleja estos seis compromisos."
            glow
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {valores.map(({ Icon, titulo, descripcion }, i) => (
              <motion.div
                key={titulo}
                className="group rounded-2xl border border-soft bg-page px-5 py-5 transition-shadow hover:shadow-[0_8px_24px_rgba(15,46,58,0.1)]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                  <Icon className="h-4 w-4 text-accent" />
                </div>
                <p className="mt-3 text-sm font-semibold text-primary">
                  {titulo}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ─── EQUIPO ─── */}
      <AnimatedSection className="bg-page py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <SectionHeader
            eyebrow="El equipo"
            title="Las personas detrás de FortiaRent"
            subtitle="Un equipo multidisciplinario comprometido con tu tranquilidad jurídica."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {equipo.map((persona, i) => (
              <motion.div
                key={persona.nombre}
                className="group overflow-hidden rounded-2xl border border-soft bg-surface transition-shadow hover:shadow-[0_8px_24px_rgba(15,46,58,0.1)]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex h-32 items-center justify-center bg-gradient-to-br from-primary to-secondary">
                  <span className="text-5xl font-bold text-accent">
                    {persona.inicial}
                  </span>
                </div>
                <div className="px-4 py-4">
                  <p className="text-sm font-semibold text-primary">
                    {persona.nombre}
                  </p>
                  <p className="text-xs font-medium text-secondary">
                    {persona.rol}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {persona.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ─── CTA FINAL ─── */}
      <AnimatedSection className="bg-surface pb-16 pt-4">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-primary px-6 py-10 text-center shadow-[0_18px_45px_rgba(15,46,58,0.3)] md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              ¿Listo para protegerte?
            </p>
            <h3 className="mt-3 text-xl font-bold text-bg md:text-2xl">
              Platica con nosotros hoy mismo
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-bg/75">
              Cuéntanos tu situación y en minutos te explicamos qué cobertura
              necesitas y cómo funciona el proceso.
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
                href="/polizas"
                size="lg"
                className="border border-bg/30 bg-transparent text-bg hover:bg-bg/10"
              >
                Ver tipos de póliza
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
