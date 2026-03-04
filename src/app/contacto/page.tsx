import AnimatedSection from "@/components/common/AnimatedSection";
import SectionHeader from "@/components/common/SectionHeader";
import ContactForm from "@/components/contact/ContactForm";
import { contactoInfo } from "@/config/content";

export default function ContactoPage() {
  return (
    <div className="bg-page">
      <AnimatedSection className="bg-surface pb-8 pt-8 md:pb-10 md:pt-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Contacto"
            title="Compártenos tu caso y cotiza tu póliza"
            subtitle="Cuéntanos brevemente en qué necesitas respaldo jurídico y un asesor te contactará para guiarte en los siguientes pasos."
            glow
          />
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-page pb-12 pt-4 md:pb-16">
        <div className="mx-auto max-w-6xl space-y-8 px-4 md:grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start md:gap-8 md:space-y-0 md:px-6 lg:px-8">
          <section className="space-y-4 rounded-2xl border border-soft bg-surface px-4 py-5 md:px-5 md:py-6">
            <h2 className="text-sm font-semibold text-primary">
              Datos de contacto
            </h2>
            <div className="space-y-2 text-sm text-muted">
              <p>Teléfono: {contactoInfo.telefono}</p>
              <p>Correo: {contactoInfo.correo}</p>
              <p>Horario: {contactoInfo.horario}</p>
              <p>Dirección: {contactoInfo.direccion}</p>
              <p className="mt-2 text-xs text-muted">
                Zonas de cobertura: {contactoInfo.zonasCobertura}
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary/80">
                Mapa referencial
              </h3>
              <div className="mt-2 flex h-40 w-full items-center justify-center rounded-xl border border-dashed border-soft bg-gradient-to-br from-page via-surface to-page text-center text-[11px] text-muted/70">
                Mapa referencial de zonas de cobertura
              </div>
            </div>
          </section>

          <ContactForm />
        </div>
      </AnimatedSection>
    </div>
  );
}

