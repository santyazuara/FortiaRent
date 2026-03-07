import AnimatedSection from "@/components/common/AnimatedSection";
import SectionHeader from "@/components/common/SectionHeader";
import { media } from "@/config/media";
import { whyBullets, contactoInfo } from "@/config/content";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function SplitWhySection() {
  return (
    <AnimatedSection className="bg-page py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center md:gap-10 md:px-6 lg:px-8">
        <div className="mb-8 md:mb-0">
          <SectionHeader
            eyebrow="¿Por qué elegirnos?"
            title="Respaldo jurídico pensado para el día a día"
            subtitle="No solo emitimos pólizas: diseñamos procesos claros, nos involucramos en tus casos y priorizamos tiempos de respuesta realistas."
            glow
          />
          <ul className="mt-5 space-y-2.5 text-sm text-muted">
            {whyBullets.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href="/nosotros" size="lg">
              Conoce más
            </Button>
            <Button href={contactoInfo.whatsappLink} variant="secondary" size="lg">
              Hablar con un asesor
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-soft bg-surface shadow-[0_18px_45px_rgba(15,46,58,0.16)]">
            <div className="relative h-56 w-full md:h-64">
              <Image
                src={media.splitWhy}
                alt="Equipo jurídico en reunión de trabajo"
                fill
                sizes="(min-width:1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
            <div className="space-y-1.5 px-4 pb-4 pt-3 md:px-5 md:pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary/80">
                Acompañamiento jurídico continuo
              </p>
              <p className="text-sm font-semibold text-primary">
                Un equipo legal que entiende tus contratos, no solo tus
                documentos.
              </p>
              <p className="text-xs text-muted">
                Trabajamos de la mano con propietarios, inmobiliarias y
                empresas para anticipar riesgos antes de que se conviertan en
                conflictos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

