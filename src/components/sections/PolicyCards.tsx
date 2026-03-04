import AnimatedSection from "@/components/common/AnimatedSection";
import SectionHeader from "@/components/common/SectionHeader";
import { homePolicies } from "@/config/content";
import { media } from "@/config/media";
import Image from "next/image";
import Button from "@/components/ui/Button";

const policyImages = [media.policy1, media.policy2, media.policy3, media.policy1];

export default function PolicyCards() {
  return (
    <AnimatedSection className="bg-page py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Nuestras pólizas"
          title="Coberturas jurídicas diseñadas para tus contratos"
          subtitle="Elige el tipo de póliza que mejor se adapta a tu realidad: propietarios, inquilinos, inmobiliarias y empresas."
          glow
        />

        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:mt-9 lg:grid-cols-4">
          {homePolicies.map((policy, index) => (
            <article
              key={policy.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-soft bg-surface shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-[0_18px_45px_rgba(15,46,58,0.16)]"
            >
              <div className="relative h-32 w-full overflow-hidden">
                <Image
                  src={policyImages[index] ?? media.policy1}
                  alt={policy.nombre}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width:1024px) 25vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col px-3.5 pb-4 pt-3.5 md:px-4 md:pb-5">
                <h3 className="text-[0.98rem] font-semibold text-primary">
                  {policy.nombre}
                </h3>
                <p className="mt-2 line-clamp-3 text-xs text-muted md:text-[0.86rem]">
                  {policy.descripcion}
                </p>
                <ul className="mt-3 space-y-1.5 text-[0.8rem] text-muted/90">
                  {policy.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Button
                    href="/polizas"
                    variant="ghost"
                    size="md"
                    className="px-0 text-[0.85rem]"
                  >
                    Ver detalles
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

