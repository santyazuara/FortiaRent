import AnimatedSection from "@/components/common/AnimatedSection";
import SectionHeader from "@/components/common/SectionHeader";
import DocumentsList from "@/components/documents/DocumentsList";

export default function DocumentosPage() {
  return (
    <div className="bg-page">
      <AnimatedSection className="bg-surface pb-8 pt-8 md:pb-10 md:pt-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Documentos"
            title="Guías, formatos y términos para tus pólizas"
            subtitle="Consulta materiales de referencia, formatos de solicitud y términos generales asociados a nuestros servicios."
            glow
          />
        </div>
      </AnimatedSection>
      <DocumentsList />
    </div>
  );
}

