import AnimatedSection from "@/components/common/AnimatedSection";
import SectionHeader from "@/components/common/SectionHeader";
import Accordion from "@/components/common/Accordion";
import { policyCategories } from "@/config/content";

const comparativo = [
  {
    feature: "Revisión de contrato",
    basica: true,
    plus: true,
    premium: true,
  },
  {
    feature: "Perfilamiento de inquilino / contraparte",
    basica: false,
    plus: true,
    premium: true,
  },
  {
    feature: "Acompañamiento en firma",
    basica: false,
    plus: true,
    premium: true,
  },
  {
    feature: "Atención prioritaria y seguimiento",
    basica: false,
    plus: false,
    premium: true,
  },
];

export default function PolizasPage() {
  return (
    <div className="bg-page">
      <AnimatedSection className="bg-surface pb-10 pt-8 md:pb-12 md:pt-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Pólizas"
            title="Coberturas jurídicas según tu tipo de operación"
            subtitle="Elige entre esquemas orientados a arrendamiento, propiedad, contratos y operación empresarial. Te acompañamos a definir el alcance adecuado."
            glow
          />
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-page pb-10 md:pb-14">
        <div className="mx-auto max-w-6xl space-y-8 px-4 md:px-6 lg:px-8">
          {policyCategories.map((cat) => (
            <section
              key={cat.id}
              className="rounded-2xl border border-soft bg-surface px-4 py-5 shadow-sm md:px-5 md:py-6"
            >
              <div className="md:flex md:items-start md:justify-between md:gap-6">
                <div className="md:w-2/3">
                  <h2 className="text-[1.05rem] font-semibold text-primary">
                    {cat.nombre}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{cat.resumen}</p>
                  <div className="mt-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary/80">
                      Incluye
                    </p>
                    <ul className="mt-2 grid gap-1.5 text-sm text-muted md:grid-cols-2">
                      {cat.incluye.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 w-full md:mt-0 md:w-1/3">
                  <Accordion
                    items={[
                      {
                        id: `${cat.id}-cobertura`,
                        titulo: "Cobertura",
                        contenido: (
                          <ul className="space-y-1.5 text-sm">
                            {cat.detalle.cobertura.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-accent" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ),
                      },
                      {
                        id: `${cat.id}-proceso`,
                        titulo: "Proceso",
                        contenido: (
                          <ol className="space-y-1.5 text-sm">
                            {cat.detalle.proceso.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-accent" />
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
                              <li key={item} className="flex gap-2">
                                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-accent" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ),
                      },
                    ]}
                  />
                </div>
              </div>
            </section>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-surface pb-14 pt-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Comparativo"
            title="Esquemas de servicio: Básica, Plus y Premium"
            subtitle="Los siguientes niveles ilustran el alcance típico de nuestros servicios. Podemos ajustar cada esquema acorde a tu operación."
            align="center"
          />

          <div className="mt-7 overflow-hidden rounded-2xl border border-soft bg-page/70">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-surface text-xs uppercase tracking-[0.12em] text-muted">
                  <th className="px-4 py-3 text-left font-medium">Alcance</th>
                  <th className="px-4 py-3 text-center font-medium">Básica</th>
                  <th className="px-4 py-3 text-center font-medium">Plus</th>
                  <th className="px-4 py-3 text-center font-medium">
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparativo.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-t border-soft/80 bg-page/60"
                  >
                    <td className="px-4 py-3 text-sm text-primary">
                      {row.feature}
                    </td>
                    {["basica", "plus", "premium"].map((col) => {
                      const val = (row as any)[col] as boolean;
                      return (
                        <td
                          key={col}
                          className="px-4 py-3 text-center text-sm"
                        >
                          {val ? (
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                              ✓
                            </span>
                          ) : (
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-soft text-muted/50">
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
    </div>
  );
}

