"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Item = {
  id?: string | number;
  titulo: string;
  contenido: React.ReactNode;
};

type Props = {
  items: Item[];
};

export default function Accordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-soft rounded-xl border border-soft bg-surface">
      {items.map((item, index) => {
        const open = index === openIndex;
        return (
          <div key={item.id ?? index} className="px-4 py-3 md:px-5">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="text-sm font-medium text-primary">
                {item.titulo}
              </span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-soft text-xs text-primary">
                {open ? "−" : "+"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 text-sm text-muted">
                    {item.contenido}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

