"use client";

import { documentos, documentTypes } from "@/config/content";
import { useMemo, useState } from "react";

export default function DocumentsList() {
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
    <section className="bg-surface py-8">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <label className="text-xs font-medium text-muted">
              Buscar documentos
            </label>
            <input
              type="text"
              placeholder="Escribe el nombre o tema del documento"
              className="mt-1 w-full rounded-full border border-soft bg-page px-4 py-2 text-sm text-primary placeholder:text-muted/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {documentTypes.map((t) => {
              const active = tipo === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTipo(active ? null : t)}
                  className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                    active
                      ? "border-primary bg-accent text-primary"
                      : "border-soft bg-surface text-muted hover:bg-accent/40"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 hidden rounded-2xl border border-soft bg-page/60 md:block">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-soft/80 bg-surface text-xs uppercase tracking-[0.12em] text-muted">
                <th className="px-4 py-3 text-left font-medium">Título</th>
                <th className="px-4 py-3 text-left font-medium">Tipo</th>
                <th className="px-4 py-3 text-left font-medium">Fecha</th>
                <th className="px-4 py-3 text-right font-medium">Descargar</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((doc) => (
                <tr
                  key={doc.id}
                  className="border-t border-soft/70 text-sm hover:bg-surface/80"
                >
                  <td className="px-4 py-3 text-primary">{doc.titulo}</td>
                  <td className="px-4 py-3 text-xs text-muted">{doc.tipo}</td>
                  <td className="px-4 py-3 text-xs text-muted">
                    {new Date(doc.fecha).toLocaleDateString("es-MX")}
                  </td>
                  <td className="px-4 py-3 text-right text-xs">
                    <button className="rounded-full border border-soft px-3 py-1 text-xs text-secondary hover:bg-accent/60">
                      Descargar
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-6 text-center text-xs text-muted"
                  >
                    No se encontraron documentos con los filtros
                    seleccionados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-5 space-y-3 md:hidden">
          {filtered.map((doc) => (
            <div
              key={doc.id}
              className="rounded-2xl border border-soft bg-surface px-4 py-3"
            >
              <p className="text-sm font-semibold text-primary">
                {doc.titulo}
              </p>
              <p className="mt-1 text-xs text-muted">{doc.tipo}</p>
              <p className="mt-0.5 text-[11px] text-muted/80">
                {new Date(doc.fecha).toLocaleDateString("es-MX")}
              </p>
              <div className="mt-3 flex justify-end">
                <button className="rounded-full border border-soft px-3 py-1 text-xs text-secondary hover:bg-accent/60">
                  Descargar
                </button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="py-4 text-center text-xs text-muted">
              No se encontraron documentos con los filtros seleccionados.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

