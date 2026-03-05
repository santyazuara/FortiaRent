"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import { stats } from "@/config/content";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let started = false;

    const el = ref.current;
    if (!el) return;

    const startAnimation = () => {
      if (started) return;
      started = true;
      const duration = 1400;
      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setValue(Math.round(target * progress));
        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    };

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(el);

    return () => {
      if (observer && el) observer.unobserve(el);
    };
  }, [target]);

  return { value, ref };
}

interface StatItemProps {
  item: {
    id: number;
    valor: number;
    etiqueta: string;
    sufijo?: string;
    detalle: string;
  };
}

function StatItem({ item }: StatItemProps) {
  const { value, ref } = useCountUp(item.valor);
  return (
    <div className="border-l border-soft pl-4 first:border-none first:pl-0 md:border-l md:first:border-none md:first:pl-0">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary/80">
        {item.etiqueta}
      </p>
      <div className="mt-1 flex items-baseline gap-1">
        <span ref={ref} className="text-2xl font-semibold text-primary">
          {value}
        </span>
        {item.sufijo && (
          <span className="text-sm font-semibold text-primary">
            {item.sufijo}
          </span>
        )}
      </div>
      <p className="mt-1 text-xs text-muted">{item.detalle}</p>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <AnimatedSection className="bg-surface py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 rounded-2xl border border-dashed border-soft bg-page/60 px-4 py-5 md:grid-cols-4 md:gap-4 md:px-6">
          {stats.map((item) => (
            <StatItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}


