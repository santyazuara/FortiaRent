import Link from "next/link";
import { contactoInfo } from "@/config/content";
import { media } from "@/config/media";
import Image from "next/image";

const footerLinks = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/polizas", label: "Pólizas" },
  { href: "/documentos", label: "Documentos" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-soft bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-start md:justify-between md:px-6 lg:px-8">
        <div className="max-w-sm">
          <Link href="/">
            <Image
              src={media.logo}
              alt="FortiaRent"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 text-sm text-muted">
            Diseñamos soluciones jurídicas para proteger tus contratos,
            inmuebles y operaciones de arrendamiento con procesos claros y
            tiempos de respuesta definidos.
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-6 md:flex-row md:justify-end">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted">
              Mapa del sitio
            </h3>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted">
              Contacto
            </h3>
            <div className="mt-3 space-y-1.5 text-sm text-muted">
              <p>WhatsApp: {contactoInfo.whatsapp}</p>
              <p>Correo: {contactoInfo.correo}</p>
              <p>Horario: {contactoInfo.horario}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-soft bg-[color:var(--bg)]/80">
        <div className="mx-auto max-w-6xl px-4 py-4 text-[11px] text-muted md:px-6 lg:px-8">
          <p>
            Este sitio no constituye asesoría legal. La información es de
            carácter informativo y general. Cada caso debe ser analizado de
            forma particular por un profesional calificado.
          </p>
        </div>
      </div>
    </footer>
  );
}

