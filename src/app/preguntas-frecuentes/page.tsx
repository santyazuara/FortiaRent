import AnimatedSection from "@/components/common/AnimatedSection";
import SectionHeader from "@/components/common/SectionHeader";
import Accordion from "@/components/common/Accordion";
import { faqs } from "@/config/content";
import Button from "@/components/ui/Button";

export default function PreguntasFrecuentesPage() {
  return (
    <div className="bg-page">
      <AnimatedSection className="bg-surface pb-8 pt-8 md:pb-10 md:pt-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Preguntas frecuentes"
            title="Resolvemos las dudas más comunes sobre nuestras pólizas"
            subtitle="La contratación de una póliza jurídica suele generar muchas preguntas. Aquí respondemos las más frecuentes."
            glow
          />
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-page pb-10 pt-4 md:pb-14">
        <div className="mx-auto max-w-6xl space-y-7 px-4 md:px-6 lg:px-8">
          {faqs.map((cat) => (
            <section key={cat.categoria} className="space-y-3">
              <h2 className="text-sm font-semibold text-primary">
                {cat.categoria}
              </h2>
              <Accordion
                items={cat.preguntas.map((p) => ({
                  titulo: p.pregunta,
                  contenido: (
                    <p className="text-sm text-muted">{p.respuesta}</p>
                  ),
                }))}
              />
            </section>
          ))}

          <div className="mt-8 rounded-2xl border border-soft bg-surface px-4 py-5 md:flex md:items-center md:justify-between md:px-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary/80">
                ¿Aún tienes dudas?
              </p>
              <p className="mt-1 text-sm text-primary">
                Si tu caso es específico o tienes un contexto distinto,
                conversemos.
              </p>
              <p className="mt-1 text-xs text-muted">
                Un asesor jurídico puede explicarte qué tipo de póliza o
                servicio se adapta mejor a tu situación.
              </p>
            </div>
            <div className="mt-3 md:mt-0">
              <Button href="/contacto" size="lg">
                Contáctanos
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

