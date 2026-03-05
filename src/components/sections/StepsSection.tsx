import AnimatedSection from "@/components/common/AnimatedSection";
import SectionHeader from "@/components/common/SectionHeader";
import { steps } from "@/config/content";

export default function StepsSection() {
  return (
    <AnimatedSection className="bg-surface py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Cómo funciona"
          title="Tu póliza jurídica en cuatro pasos"
          subtitle="Hemos simplificado el proceso para que puedas obtener respaldo legal sin fricción."
        />

        <div className="mt-8 space-y-7 md:mt-10 md:space-y-0 md:[&>div]:flex md:[&>div]:items-stretch">
          <div className="hidden md:grid md:flex-1 md:grid-cols-4 md:gap-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative flex flex-col rounded-2xl border border-soft bg-page/70 px-5 py-5"
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-bg">
                    {index + 1}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary/80">
                    Paso {index + 1}
                  </p>
                </div>
                <h3 className="text-[0.95rem] font-semibold text-primary">
                  {step.titulo}
                </h3>
                <p className="mt-2 text-sm text-muted">{step.descripcion}</p>
                {index < steps.length - 1 && (
                  <div className="pointer-events-none absolute inset-y-1 right-[-14px] hidden w-7 items-center justify-center md:flex">
                    <div className="h-px flex-1 bg-gradient-to-r from-accent to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-3 md:hidden">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex gap-3 rounded-2xl border border-soft bg-page/80 px-4 py-4"
              >
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-bg">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-[0.95rem] font-semibold text-primary">
                    {step.titulo}
                  </h3>
                  <p className="mt-1 text-xs text-muted">
                    {step.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

