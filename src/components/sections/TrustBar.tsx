import { trustBadges } from "@/config/content";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function TrustBar() {
  return (
    <AnimatedSection className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4 md:gap-5">
          {trustBadges.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-3 rounded-xl border border-soft bg-page px-3.5 py-3"
            >
              <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-accent/70 text-xs font-semibold text-primary">
                ✓
              </div>
              <div>
                <p className="text-[0.9rem] font-semibold text-primary">
                  {item.titulo}
                </p>
                <p className="mt-1 text-xs text-muted">{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

