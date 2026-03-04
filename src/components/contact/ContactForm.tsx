"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const policyOptions = [
  "Póliza de arrendamiento",
  "Póliza para propietarios",
  "Póliza para empresas",
  "Revisión de contrato",
  "Otro",
];

type Errors = {
  nombre?: string;
  correo?: string;
  telefono?: string;
  mensaje?: string;
};

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tipoPoliza, setTipoPoliza] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const validate = () => {
    const newErrors: Errors = {};
    if (!nombre.trim()) newErrors.nombre = "Ingresa tu nombre completo.";
    if (!correo.trim()) newErrors.correo = "Ingresa un correo electrónico.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo))
      newErrors.correo = "Ingresa un correo válido.";
    if (!telefono.trim())
      newErrors.telefono = "Ingresa un teléfono de contacto.";
    if (!mensaje.trim())
      newErrors.mensaje = "Cuéntanos brevemente qué necesitas.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Aquí podrías integrar el envío real (API, CRM, etc.).
    setEnviado(true);
  };

  return (
    <div className="rounded-2xl border border-soft bg-surface px-4 py-5 shadow-sm md:px-5 md:py-6">
      <form className="space-y-4" onSubmit={onSubmit} noValidate>
        <div>
          <label className="text-xs font-medium text-muted">
            Nombre completo
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="mt-1 w-full rounded-lg border border-soft bg-page px-3 py-2 text-sm text-primary placeholder:text-muted/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
            placeholder="Escribe tu nombre y apellidos"
          />
          {errors.nombre && (
            <p className="mt-1 text-[11px] text-red-600">{errors.nombre}</p>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-xs font-medium text-muted">
              Correo electrónico
            </label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="mt-1 w-full rounded-lg border border-soft bg-page px-3 py-2 text-sm text-primary placeholder:text-muted/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
              placeholder="tucorreo@dominio.com"
            />
            {errors.correo && (
              <p className="mt-1 text-[11px] text-red-600">
                {errors.correo}
              </p>
            )}
          </div>
          <div>
            <label className="text-xs font-medium text-muted">
              Teléfono de contacto
            </label>
            <input
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="mt-1 w-full rounded-lg border border-soft bg-page px-3 py-2 text-sm text-primary placeholder:text-muted/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
              placeholder="Ej. (55) 0000 0000"
            />
            {errors.telefono && (
              <p className="mt-1 text-[11px] text-red-600">
                {errors.telefono}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-muted">
            Tipo de póliza o servicio
          </label>
          <select
            value={tipoPoliza}
            onChange={(e) => setTipoPoliza(e.target.value)}
            className="mt-1 w-full rounded-lg border border-soft bg-page px-3 py-2 text-sm text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
          >
            <option value="">Selecciona una opción</option>
            {policyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs font-medium text-muted">
            Cuéntanos qué necesitas
          </label>
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            rows={4}
            className="mt-1 w-full rounded-lg border border-soft bg-page px-3 py-2 text-sm text-primary placeholder:text-muted/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
            placeholder="Ej. Necesito una póliza para un departamento en renta..."
          />
          {errors.mensaje && (
            <p className="mt-1 text-[11px] text-red-600">
              {errors.mensaje}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 pt-1">
          <p className="text-[11px] text-muted">
            Al enviar este formulario aceptas que te contactemos para
            brindarte información sobre nuestros servicios.
          </p>
          <Button type="submit" size="lg">
            Enviar solicitud
          </Button>
        </div>

        {enviado && (
          <p className="text-[11px] text-green-700">
            Hemos recibido tu solicitud. Un asesor te contactará en breve.
          </p>
        )}
      </form>
    </div>
  );
}

