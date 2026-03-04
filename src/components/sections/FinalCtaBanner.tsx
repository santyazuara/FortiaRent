import AnimatedSection from "@/components/common/AnimatedSection";
import Button from "@/components/ui/Button";

export default function FinalCtaBanner() {
  return (
    <AnimatedSection className="bg-surface pb-14 pt-4">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-primary px-5 py-7 text-white shadow-[0_18px_45px_rgba(15,46,58,0.3)] md:flex md:items-center md:justify-between md:px-7">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent/90">
              Cotiza tu respaldo jurídico
            </p>
            <h3 className="mt-2 text-lg font-semibold md:text-xl">
              Protege tu renta y tus contratos con respaldo legal.
            </h3>
            <p className="mt-2 text-sm text-white/85 md:max-w-lg">
              Compártenos los detalles de tu operación y diseñaremos la póliza
              o esquema jurídico que mejor se ajuste a tus necesidades.
            </p>
          </div>
          <div className="mt-4 flex gap-3 md:mt-0 md:flex-col md:items-end">
            <Button
              href="/contacto"
              size="lg"
              className="bg-white text-primary hover:bg-accent hover:text-primary"
            >
              Cotizar póliza
            </Button>
            <Button
              href="/polizas"
              variant="ghost"
              className="text-sm text-accent hover:bg-white/10"
            >
              Ver tipos de póliza
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

