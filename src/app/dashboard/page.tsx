"use client";

import { useAuth } from "@/context/AuthContext";
import AnimatedSection from "@/components/common/AnimatedSection";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { contactoInfo } from "@/config/content";
import { motion } from "framer-motion";
import {
    FileUp,
    CheckCircle2,
    AlertCircle,
    FileText,
    Clock,
    UploadCloud,
    ChevronRight,
    LogOut,
    Home,
    User as UserIcon,
    ShieldCheck,
    Briefcase,
    Loader2
} from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const { user, isLoggedIn, logout } = useAuth();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<"upload" | "status">("upload");
    const [selectedCategory, setSelectedCategory] = useState<string>("arrendatario");
    const [uploadedDocs, setUploadedDocs] = useState<Record<string, string>>({});
    const [uploadingIds, setUploadingIds] = useState<Set<string>>(new Set());

    const handleUpload = async (file: File, requirementId: string) => {
        setUploadingIds(prev => new Set(prev).add(requirementId));

        const formData = new FormData();
        formData.append("file", file);
        formData.append("requirementId", requirementId);
        formData.append("category", selectedCategory);

        try {
            const response = await fetch("/api/documents/upload", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (!response.ok) throw new Error(result.error || "Error al subir");

            setUploadedDocs(prev => ({
                ...prev,
                [requirementId]: file.name
            }));

            // Opcional: Recargar estatus del expediente completo
        } catch (err: any) {
            alert(`Error: ${err.message}`);
        } finally {
            setUploadingIds(prev => {
                const next = new Set(prev);
                next.delete(requirementId);
                return next;
            });
        }
    };

    const categories = [
        { id: "arrendador", name: "Arrendador", icon: Home, desc: "Propietario del inmueble" },
        { id: "arrendatario", name: "Arrendatario", icon: UserIcon, desc: "Inquilino" },
        { id: "solidario_sin", name: "Solidario (Sin)", icon: ShieldCheck, desc: "Sin bien raíz" },
        { id: "solidario_con", name: "Solidario (Con)", icon: ShieldCheck, desc: "Con bien raíz" },
        { id: "empresa", name: "Empresa", icon: Briefcase, desc: "Persona Moral" },
    ];

    const categoryDocs: Record<string, any[]> = {
        arrendador: [
            { id: "101", label: "Identificación oficial vigente", desc: "INE, Pasaporte o Cédula", required: true },
            { id: "102", label: "Última boleta de predial", desc: "Del inmueble a arrendar", required: true },
        ],
        arrendatario: [
            { id: "201", label: "Formato de solicitud de póliza", desc: "Debidamente llenado", required: true },
            { id: "202", label: "Identificación oficial vigente", desc: "INE, Pasaporte o Cédula", required: true },
            { id: "203", label: "Forma Migratoria (Extranjeros)", desc: "Si aplica", required: false },
            { id: "204", label: "6 últimos recibos de nómina", desc: "Comprobantes de ingreso", required: true },
            { id: "205", label: "Carta laboral de la empresa", desc: "Detalle de puesto y sueldo", required: true },
            { id: "206", label: "3 últimos estados de cuenta", desc: "Bancarios", required: true },
        ],
        solidario_sin: [
            { id: "301", label: "Identificación oficial", desc: "Vigente", required: true },
            { id: "302", label: "Comprobante de domicilio", desc: "< 3 meses", required: true },
            { id: "303", label: "3 últimos estados de cuenta", desc: "Bancarios", required: true },
        ],
        solidario_con: [
            { id: "401", label: "Id. oficial fiador(es)", desc: "Vigente", required: true },
            { id: "402", label: "Escritura pública", desc: "Inmueble en garantía", required: true },
            { id: "403", label: "Última boleta de predial", desc: "Inmueble en garantía", required: true },
            { id: "404", label: "Comprobante de domicilio", desc: "< 3 meses", required: true },
            { id: "405", label: "Acta de matrimonio", desc: "Si aplica", required: false },
        ],
        empresa: [
            { id: "501", label: "Acta Constitutiva", desc: "Legal", required: true },
            { id: "502", label: "Poder Notarial", desc: "Rep. Legal", required: true },
            { id: "503", label: "Cédula Fiscal (RFC)", desc: "SAT", required: true },
            { id: "504", label: "Sit. Fiscal (CSF)", desc: "Actualizada", required: true },
            { id: "505", label: "ID Representante", desc: "Vigente", required: true },
            { id: "506", label: "Domicilio Empresa", desc: "< 3 meses", required: true },
            { id: "507", label: "3 estados de cuenta", desc: "Bancarios", required: true },
            { id: "508", label: "Declaración anual", desc: "Última", required: true },
        ]
    };

    useEffect(() => {
        if (!isLoggedIn) {
            // router.push("/"); 
        }
    }, [isLoggedIn, router]);

    if (!isLoggedIn) {
        return (
            <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-accent text-primary mb-6">
                    <AlertCircle className="h-8 w-8" />
                </div>
                <h1 className="text-2xl font-bold text-primary">Acceso Restringido</h1>
                <p className="mt-2 text-muted max-w-sm">
                    Por favor, inicia sesión para acceder a tu expediente y subir documentos.
                </p>
                <Button onClick={() => window.location.href = "/"} className="mt-8">
                    Volver al inicio
                </Button>
            </div>
        );
    }

    return (
        <div className="bg-page min-h-screen pb-20">
            {/* ─── HEADER ─── */}
            <div className="bg-primary pt-12 pb-24 md:pt-16 md:pb-32">
                <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                            <motion.p
                                className="text-xs font-semibold uppercase tracking-[0.2em] text-accent"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                Panel de cliente
                            </motion.p>
                            <motion.h1
                                className="mt-3 text-3xl font-bold text-bg md:text-4xl"
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                Bienvenido, {user?.name.split(" ")[0]}
                            </motion.h1>
                            <motion.p
                                className="mt-2 text-bg/60 text-sm"
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 }}
                            >
                                Gestiona tus requisitos y revisa el estatus de tu proceso.
                            </motion.p>
                        </div>

                        <motion.div
                            className="flex gap-2"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <button
                                onClick={() => setActiveTab("upload")}
                                className={`flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-semibold transition-all ${activeTab === "upload"
                                    ? "bg-accent text-primary shadow-lg"
                                    : "bg-bg/10 text-bg hover:bg-bg/20"
                                    }`}
                            >
                                <FileUp className="h-4 w-4" />
                                Expediente
                            </button>
                            <button
                                onClick={() => setActiveTab("status")}
                                className={`flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-semibold transition-all ${activeTab === "status"
                                    ? "bg-accent text-primary shadow-lg"
                                    : "bg-bg/10 text-bg hover:bg-bg/20"
                                    }`}
                            >
                                <Clock className="h-4 w-4" />
                                Estatus
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ─── CONTENT ─── */}
            <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 -mt-12 md:-mt-16">
                <div className="grid gap-8 lg:grid-cols-3">

                    {/* Main area */}
                    <div className="lg:col-span-2 space-y-6">
                        {activeTab === "upload" ? (
                            <div className="space-y-6">
                                {/* Category Selection */}
                                <AnimatedSection className="rounded-3xl border border-soft bg-surface p-4 shadow-xl">
                                    <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar scroll-smooth">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat.id}
                                                onClick={() => setSelectedCategory(cat.id)}
                                                className={`flex flex-col items-center justify-center min-w-[110px] gap-2 rounded-2xl p-4 transition-all duration-300 ${selectedCategory === cat.id
                                                    ? "bg-primary text-white shadow-lg scale-105"
                                                    : "bg-page text-primary hover:bg-accent/30"
                                                    }`}
                                            >
                                                <cat.icon className="h-5 w-5" />
                                                <span className="text-[9px] font-bold uppercase tracking-wider text-center">{cat.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </AnimatedSection>

                                {/* Document List */}
                                <AnimatedSection className="rounded-3xl border border-soft bg-surface p-6 md:p-8 shadow-xl">
                                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-soft">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-accent shadow-inner">
                                                <UploadCloud className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h2 className="text-xl font-bold text-primary">Requisitos del Expediente</h2>
                                                <p className="text-xs text-muted">Documentación para: <span className="font-bold text-primary">{categories.find(c => c.id === selectedCategory)?.name}</span></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid gap-4">
                                        <input
                                            type="file"
                                            id="file-upload"
                                            className="hidden"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                const reqId = (e.target as any)._reqId;
                                                if (file && reqId) {
                                                    handleUpload(file, reqId);
                                                }
                                            }}
                                        />
                                        {categoryDocs[selectedCategory].map((item, i) => (
                                            <motion.div
                                                key={item.id}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.05 }}
                                                className="group flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl border border-soft hover:border-primary/20 hover:bg-accent/5 transition-all shadow-sm bg-page/30"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface border border-soft transition-all ${uploadedDocs[item.id] ? "text-emerald-500 bg-emerald-50 border-emerald-200" : "text-primary/40 group-hover:text-primary group-hover:bg-white"}`}>
                                                        {uploadedDocs[item.id] ? <CheckCircle2 className="h-5 w-5" /> : <FileText className="h-5 w-5" />}
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            <h3 className="text-[0.9rem] font-bold text-primary">
                                                                {item.label}
                                                                {uploadedDocs[item.id] && <span className="ml-2 text-[10px] text-emerald-600 font-medium">(Listo)</span>}
                                                            </h3>
                                                            {item.required && !uploadedDocs[item.id] && <span className="text-[8px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold uppercase tracking-widest border border-primary/20">Requerido</span>}
                                                        </div>
                                                        <p className="text-[11px] text-muted mt-1 leading-normal max-w-sm">
                                                            {uploadedDocs[item.id] ? (
                                                                <span className="text-emerald-700 font-medium">Archivo: {uploadedDocs[item.id]}</span>
                                                            ) : (
                                                                item.desc
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                                <Button
                                                    variant={uploadedDocs[item.id] ? "outline" : "outline"}
                                                    size="md"
                                                    disabled={uploadingIds.has(item.id)}
                                                    className={`md:w-36 py-2.5 h-10 text-xs font-bold border-soft hover:border-primary bg-surface group-hover:shadow-md ${uploadedDocs[item.id] ? "text-primary border-primary/20 bg-emerald-50/30" : ""}`}
                                                    onClick={() => {
                                                        const el = document.getElementById("file-upload") as any;
                                                        if (el) {
                                                            el._reqId = item.id;
                                                            el.value = "";
                                                            el.click();
                                                        }
                                                    }}
                                                >
                                                    {uploadingIds.has(item.id) ? (
                                                        <Loader2 className="h-4 w-4 animate-spin" />
                                                    ) : (
                                                        uploadedDocs[item.id] ? "Cambiar" : "Cargar Archivo"
                                                    )}
                                                </Button>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="mt-10 rounded-2xl bg-primary p-6 text-white shadow-xl">
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                                                <CheckCircle2 className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold">¿Tienes todo listo?</h4>
                                                <p className="text-xs text-white/70 mt-1 leading-relaxed">
                                                    Una vez subidos todos los requisitos requeridos, presiona "Enviar Expediente" para que nuestro equipo legal inicie la investigación.
                                                </p>
                                                <Button variant="secondary" className="mt-5 w-full md:w-auto px-10">
                                                    Enviar Expediente
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            </div>
                        ) : (
                            <AnimatedSection className="rounded-3xl border border-soft bg-surface p-6 md:p-8 shadow-xl">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-accent">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-primary">Estatus de mi Trámite</h2>
                                        <p className="text-xs text-muted">Consulta el avance de tu investigación en tiempo real.</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        { title: "Póliza Arrendamiento", status: "En Revisión", date: "Hace 2 días", icon: Clock, color: "text-amber-600 bg-amber-50 border-amber-200" },
                                        { title: "Validación de Identidad", status: "Completado", date: "Hace 3 días", icon: CheckCircle2, color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
                                    ].map((item, i) => (
                                        <div key={i} className={`flex items-center justify-between p-5 rounded-2xl border bg-page transition-shadow hover:shadow-md`}>
                                            <div className="flex items-center gap-4">
                                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-accent`}>
                                                    <item.icon className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <h3 className="text-[0.95rem] font-bold text-primary">{item.title}</h3>
                                                    <p className="text-xs text-muted">{item.date}</p>
                                                </div>
                                            </div>
                                            <span className={`text-[10px] font-bold px-4 py-1.5 rounded-full border ${item.color} uppercase tracking-wider`}>
                                                {item.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <AnimatedSection className="rounded-3xl border border-soft bg-surface p-6 shadow-xl" delay={0.3}>
                            <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-6 pb-2 border-b border-soft">Ayuda & Soporte</h3>
                            <div className="space-y-3">
                                {[
                                    { label: "Guía de carga de documentos", href: "/documentos" },
                                    { label: "Preguntas sobre mi póliza", href: "/preguntas-frecuentes" },
                                    { label: "Contacto directo con asesor", href: contactoInfo.whatsappLink },
                                ].map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="w-full flex items-center justify-between group p-3.5 rounded-2xl hover:bg-accent/20 transition-all text-left border border-transparent hover:border-accent/30"
                                    >
                                        <span className="text-sm font-semibold text-muted group-hover:text-primary">{item.label}</span>
                                        <ChevronRight className="h-4 w-4 text-muted group-hover:text-primary transition-transform group-hover:translate-x-1" />
                                    </Link>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection className="rounded-3xl bg-secondary p-6 text-bg shadow-xl overflow-hidden relative" delay={0.4}>
                            <div className="relative z-10">
                                <h3 className="text-base font-bold mb-2">Completitud de Expediente</h3>
                                <div className="mt-4 h-2.5 w-full bg-white/10 rounded-full overflow-hidden shadow-inner">
                                    <div className="h-full bg-accent w-[65%] rounded-full shadow-lg" />
                                </div>
                                <p className="mt-4 text-xs text-bg/80 leading-relaxed font-medium">Te faltan 2 documentos para que nuestro equipo jurídico inicie la investigación.</p>
                                <Button variant="outlineWhite" className="mt-6 w-full py-3 text-xs border-white/20 hover:bg-white/10 active:bg-white/20 font-bold tracking-wider">
                                    VER REQUISITOS
                                </Button>
                            </div>
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <FileText className="h-20 w-20" />
                            </div>
                        </AnimatedSection>

                        <button
                            onClick={logout}
                            className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl border border-soft text-primary/40 hover:text-primary hover:bg-red-50 hover:border-red-100 transition-all font-bold text-sm"
                        >
                            <LogOut className="h-4 w-4" />
                            Cerrar sesión
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
