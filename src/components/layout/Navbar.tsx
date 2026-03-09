"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { contactoInfo } from "@/config/content";
import { media } from "@/config/media";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import AuthModal from "@/components/auth/AuthModal";
import { LogOut, User as UserIcon } from "lucide-react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/polizas", label: "Pólizas" },
  { href: "/documentos", label: "Documentos" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const { user, isLoggedIn, logout } = useAuth();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href) && href !== "/";

  const openAuth = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
    setOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-soft/60 bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 md:px-6 lg:px-8">
          <motion.div
            whileHover={{ scale: 1.05, opacity: 0.85 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center p-0">
              <Image
                src={media.logo}
                alt="FortiaRent"
                width={400}
                height={100}
                className="h-[76px] w-auto object-contain"
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

            {isLoggedIn && (
              <Link
                href="/dashboard"
                className={`text-sm transition-colors ${isActive("/dashboard")
                  ? "font-semibold text-primary"
                  : "text-muted hover:text-primary"
                  }`}
              >
                Mi Dashboard
              </Link>
            )}

            <div className="flex items-center gap-3">
              {isLoggedIn ? (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 rounded-full border border-soft bg-accent/30 px-3 py-1.5">
                    <UserIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">{user?.name}</span>
                  </div>
                  <button
                    onClick={logout}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-soft text-primary hover:bg-accent/40 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => openAuth("login")}
                    className="text-sm font-semibold text-primary hover:text-secondary transition-colors"
                  >
                    Ingresar
                  </button>
                  <Button href={contactoInfo.whatsappLink} size="md">
                    Cotizar Póliza
                  </Button>
                </>
              )}
            </div>
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

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />

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

                {isLoggedIn && (
                  <Link
                    href="/dashboard"
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-2 text-sm ${isActive("/dashboard")
                      ? "bg-accent/70 font-semibold text-primary"
                      : "text-muted hover:bg-accent/40"
                      }`}
                  >
                    Mi Dashboard
                  </Link>
                )}

                <div className="mt-4 flex flex-col gap-3">
                  {isLoggedIn ? (
                    <>
                      <div className="flex items-center gap-3 rounded-xl bg-accent/40 p-3">
                        <UserIcon className="h-5 w-5 text-primary" />
                        <span className="text-sm font-bold text-primary">{user?.name}</span>
                      </div>
                      <button
                        onClick={logout}
                        className="flex items-center justify-center gap-2 rounded-xl border border-soft py-3 text-sm font-semibold text-primary hover:bg-accent/20 transition-colors"
                      >
                        <LogOut className="h-4 w-4" />
                        Cerrar sesión
                      </button>
                    </>
                  ) : (
                    <>
                      <Button href={contactoInfo.whatsappLink} className="w-full">
                        Cotizar Póliza
                      </Button>
                      <button
                        onClick={() => openAuth("login")}
                        className="rounded-xl border border-soft py-3 text-sm font-semibold text-primary hover:bg-accent/20 transition-colors"
                      >
                        Iniciar sesión
                      </button>
                    </>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-soft">
                  <Button href={contactoInfo.whatsappLink} variant="outline" className="w-full">
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

