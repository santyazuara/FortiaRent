"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { contactoInfo } from "@/config/content";
import { media } from "@/config/media";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/polizas", label: "Pólizas" },
  { href: "/documentos", label: "Documentos" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href) && href !== "/";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-soft/60 bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 md:px-6 lg:px-8">
          <motion.div
            whileHover={{ scale: 1.05, opacity: 0.85 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src={media.logo}
                alt="FortiaRent"
                width={400}
                height={100}
                className="h-24 w-auto object-contain"
                priority
              />
            </Link>
          </motion.div>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${isActive(link.href)
                  ? "font-semibold text-primary"
                  : "text-muted hover:text-primary"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Button href={contactoInfo.whatsappLink} size="md">
              Cotizar póliza
            </Button>
          </nav>

          <motion.button
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.1, opacity: 0.8 }}
            whileTap={{ scale: 0.9 }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-soft text-primary md:hidden shadow-sm"
            aria-label="Abrir menú"
          >
            <span className="sr-only">Menú</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 rounded bg-primary" />
              <span className="block h-0.5 w-4 rounded bg-primary" />
            </div>
          </motion.button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-primary/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-50 w-72 bg-surface shadow-[0_18px_45px_rgba(15,46,58,0.16)]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
            >
              <div className="flex items-center justify-between border-b border-soft px-4 py-3">
                <span className="text-sm font-semibold text-primary">
                  Navegación
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-soft text-primary"
                  aria-label="Cerrar menú"
                >
                  ✕
                </button>
              </div>
              <nav className="flex flex-col gap-2 px-4 py-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-2 text-sm ${isActive(link.href)
                      ? "bg-accent/70 font-semibold text-primary"
                      : "text-muted hover:bg-accent/40"
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-3">
                  <Button href={contactoInfo.whatsappLink} className="w-full">
                    Cotizar póliza
                  </Button>
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

