import AnimatedSection from "@/components/common/AnimatedSection";
import SectionHeader from "@/components/common/SectionHeader";
import { media } from "@/config/media";
import Image from "next/image";

const valores = [
  {
    titulo: "Claridad",
    descripcion:
      "Explicamos cada cobertura, condición y proceso con lenguaje sencillo para que tomes decisiones informadas.",
  },
  {
    titulo: "Orden",
    descripcion:
      "Estructuramos la documentación y pasos de atención para que sepas qué sigue en cada etapa.",
  },
  {
    titulo: "Cercanía",
    descripcion:
      "Escuchamos tu contexto y adaptamos la solución jurídica a tu realidad, no al revés.",
  },
];

const equipo = [
  {
    nombre: "Ana Martínez",
    rol: "Dirección jurídica",
    bio: "Especialista en contratos civiles y arrendamiento.",
  },
  {
    nombre: "Luis Fernández",
    rol: "Relación con inmobiliarias",
    bio: "Acompaña a empresas y despachos inmobiliarios.",
  },
  {
    nombre: "Paola Gómez",
    rol: "Coordinación de pólizas",
    bio: "Supervisa procesos, tiempos de respuesta y documentación.",
  },
];

export default function NosotrosPage() {
  return (
    <div className="bg-page">
      <AnimatedSection className="bg-surface pb-10 pt-8 md:pb-12 md:pt-10">
        <div className="mx-auto max-w-6xl px-4 md:flex md:items-center md:gap-10 md:px-6 lg:px-8">
          <div className="mb-6 md:mb-0 md:w-3/5">
            <SectionHeader
              eyebrow="Nosotros"
              title="Un equipo jurídico enfocado en proteger tus contratos"
              subtitle="FortiaRent nace de la necesidad de traducir el lenguaje legal en soluciones claras para propietarios, inquilinos, inmobiliarias y empresas."
              glow
            />
            <p className="mt-4 text-sm text-muted">
              Más que un producto, ofrecemos un modelo de trabajo: entendemos
              tu operación, identificamos riesgos y diseñamos coberturas,
              documentos y procesos que se integran a tu día a día.
            </p>
          </div>
          <div className="relative md:w-2/5">
            <div className="overflow-hidden rounded-2xl border border-soft bg-surface shadow-[0_18px_45px_rgba(15,46,58,0.16)]">
              <div className="relative h-52 w-full md:h-60">
                <Image
                  src={media.aboutHero}
                  alt="Equipo de abogados revisando documentos"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
              </div>
              <div className="px-4 pb-4 pt-3 md:px-5 md:pb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary/80">
                  Enfoque corporativo, trato cercano
                </p>
                <p className="mt-1 text-sm text-muted">
                  Combinamos criterios corporativos de cumplimiento con un trato
                  personalizado para cada caso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-page py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-primary">
                Nuestra misión
              </h2>
              <p className="mt-3 text-sm text-muted">
                Brindar soluciones jurídicas accesibles y ordenadas que permitan
                a las personas y empresas tomar decisiones sobre sus contratos
                con certeza, reduciendo riesgos y conflictos.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-primary">
                Nuestra visión
              </h2>
              <p className="mt-3 text-sm text-muted">
                Ser el aliado jurídico de referencia en materia de
                arrendamiento y contratos, reconocido por la claridad de sus
                procesos, la transparencia de sus coberturas y la cercanía con
                sus clientes.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-semibold text-primary">
              Nuestros valores
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {valores.map((valor) => (
                <div
                  key={valor.titulo}
                  className="rounded-2xl border border-soft bg-surface px-4 py-4"
                >
                  <p className="text-sm font-semibold text-primary">
                    {valor.titulo}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    {valor.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-semibold text-primary">
              Equipo de referencia
            </h2>
            <p className="mt-2 text-sm text-muted">
              Contamos con un equipo jurídico y operativo multidisciplinario.
              Estos perfiles representan la forma en que trabajamos contigo.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {equipo.map((persona) => (
                <div
                  key={persona.nombre}
                  className="rounded-2xl border border-soft bg-surface px-4 py-4"
                >
                  <p className="text-sm font-semibold text-primary">
                    {persona.nombre}
                  </p>
                  <p className="text-xs text-secondary/90">{persona.rol}</p>
                  <p className="mt-2 text-sm text-muted">{persona.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

