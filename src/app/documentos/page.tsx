"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import Button from "@/components/ui/Button";
import { documentos, documentTypes, contactoInfo } from "@/config/content";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  BookOpen,
  FileText,
  ScrollText,
  Send,
  Lock,
  RefreshCw,
  MessageSquare,
  Download,
  Search,
  X,
} from "lucide-react";

const typeIcons: Record<string, React.ElementType> = {
  "Guías": BookOpen,
  "Formatos": FileText,
  "Términos": ScrollText,
  "Solicitudes": Send,
};

export default function DocumentosPage() {
  const [search, setSearch] = useState("");
  const [tipo, setTipo] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      documentos.filter((doc) => {
        const matchesType = tipo ? doc.tipo === tipo : true;
        const matchesSearch =
          search.trim().length === 0 ||
          doc.titulo.toLowerCase().includes(search.toLowerCase());
        return matchesType && matchesSearch;
      }),
    [search, tipo]
  );

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
            Centro de recursos
          </motion.p>
          <motion.h1
            className="mt-3 max-w-2xl text-3xl font-bold leading-snug text-bg md:text-4xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            Guías, formatos y términos para tus pólizas
          </motion.h1>
          <motion.p
            className="mt-4 max-w-xl text-[0.97rem] leading-relaxed text-bg/75"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            Consulta materiales de referencia, formatos de solicitud y términos
            generales para conocer mejor nuestros servicios antes de contratar.
          </motion.p>
        </div>
      </AnimatedSection>

      {/* ─── FILTROS + DOCS ─── */}
      <AnimatedSection className="bg-page py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          {/* Search & filter bar */}
          <div className="flex flex-col gap-4 rounded-2xl border border-soft bg-surface px-5 py-5 shadow-sm md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 items-center gap-2 rounded-full border border-soft bg-page px-4 py-2">
              <Search className="h-4 w-4 shrink-0 text-muted/60" />
              <input
                type="text"
                placeholder="Buscar documentos…"
                className="w-full bg-transparent text-sm text-primary placeholder:text-muted/50 focus:outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button onClick={() => setSearch("")}>
                  <X className="h-3.5 w-3.5 text-muted/60 hover:text-primary" />
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setTipo(null)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${tipo === null
                    ? "border-primary bg-primary text-bg"
                    : "border-soft bg-surface text-muted hover:bg-accent/40"
                  }`}
              >
                Todos
              </button>
              {documentTypes.map((t) => {
                const Icon = typeIcons[t] ?? FileText;
                const active = tipo === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTipo(active ? null : t)}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${active
                        ? "border-primary bg-primary text-bg"
                        : "border-soft bg-surface text-muted hover:bg-accent/40"
                      }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Document cards */}
          {filtered.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {filtered.map((doc, i) => {
                const Icon = typeIcons[doc.tipo] ?? FileText;
                return (
                  <motion.div
                    key={doc.id}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-soft bg-surface shadow-sm transition-shadow hover:shadow-[0_8px_24px_rgba(15,46,58,0.12)]"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                  >
                    {/* Card header */}
                    <div className="flex items-center justify-between bg-gradient-to-br from-primary to-secondary px-4 py-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-bg/10">
                        <Icon className="h-4 w-4 text-accent" />
                      </div>
                      <span className="rounded-full bg-bg/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-bg/80">
                        {doc.tipo}
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="flex flex-1 flex-col px-4 py-4">
                      <p className="text-sm font-semibold leading-snug text-primary">
                        {doc.titulo}
                      </p>
                      <p className="mt-1 text-[11px] text-muted">
                        Publicado:{" "}
                        {new Date(doc.fecha).toLocaleDateString("es-MX", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <div className="mt-auto pt-4">
                        <button className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-soft bg-page px-3 py-2 text-xs font-medium text-secondary transition-colors hover:border-primary/40 hover:bg-accent/50 hover:text-primary">
                          <Download className="h-3.5 w-3.5" />
                          Descargar
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-soft py-14 text-center">
              <Search className="mx-auto h-8 w-8 text-muted/40" />
              <p className="mt-3 text-sm font-medium text-primary">
                Sin resultados
              </p>
              <p className="mt-1 text-xs text-muted">
                No encontramos documentos con esos filtros.
              </p>
              <button
                onClick={() => { setSearch(""); setTipo(null); }}
                className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-soft px-4 py-2 text-xs text-secondary hover:bg-accent/40"
              >
                <X className="h-3 w-3" />
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </AnimatedSection>

      {/* ─── INFO BANNER ─── */}
      <AnimatedSection className="bg-surface py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { Icon: Lock, titulo: "Documentos seguros", desc: "Todos nuestros formatos han sido revisados por el equipo jurídico de FortiaRent." },
              { Icon: RefreshCw, titulo: "Actualizados regularmente", desc: "Revisamos y actualizamos los materiales conforme cambia el marco legal aplicable." },
              { Icon: MessageSquare, titulo: "¿Tienes dudas?", desc: "Si necesitas un documento específico o aclarar algún término, escríbenos por WhatsApp." },
            ].map(({ Icon, titulo, desc }, i) => (
              <motion.div
                key={titulo}
                className="rounded-2xl border border-soft bg-page px-5 py-5"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                  <Icon className="h-4 w-4 text-accent" />
                </div>
                <p className="mt-3 text-sm font-semibold text-primary">{titulo}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ─── CTA FINAL ─── */}
      <AnimatedSection className="bg-page pb-16 pt-4">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-primary px-6 py-10 text-center shadow-[0_18px_45px_rgba(15,46,58,0.3)] md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              ¿Necesitas un documento personalizado?
            </p>
            <h3 className="mt-3 text-xl font-bold text-bg md:text-2xl">
              Solicítalo directamente con nosotros
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-bg/75">
              Si necesitas un formato o guía específica para tu caso, cuéntanos
              y lo preparamos para ti.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button
                href={contactoInfo.whatsappLink}
                size="lg"
                className="bg-accent text-primary hover:opacity-90"
              >
                Hablar con un asesor
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
