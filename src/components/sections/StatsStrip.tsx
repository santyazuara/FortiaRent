"use client";

import AnimatedSection from "@/components/common/AnimatedSection";
import { stats } from "@/config/content";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function useCountUp(target: number) {
  const controls = useAnimation();
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView) return;
    controls.start({ value: target, transition: { duration: 1.4 } });
  }, [controls, inView, target]);

  return { controls, ref };
}

export default function StatsStrip() {
  return (
    <AnimatedSection className="bg-surface py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 rounded-2xl border border-dashed border-soft bg-page/60 px-4 py-5 md:grid-cols-4 md:gap-4 md:px-6">
          {stats.map((item) => {
            const { controls, ref } = useCountUp(item.valor);
            const currentValue =
              (controls.get()?.value as number | undefined) ?? 0;
            return (
              <div
                key={item.id}
                className="border-l border-soft pl-4 first:border-none first:pl-0 md:border-l md:first:border-none md:first:pl-0"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary/80">
                  {item.etiqueta}
                </p>
                <div className="mt-1 flex items-baseline gap-1">
                  <motion.span
                    ref={ref}
                    className="text-2xl font-semibold text-primary"
                    initial={{ value: 0 }}
                    animate={controls}
                  >
                    {Math.round(currentValue)}
                  </motion.span>
                  {item.sufijo && (
                    <span className="text-sm font-semibold text-primary">
                      {item.sufijo}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-muted">{item.detalle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

