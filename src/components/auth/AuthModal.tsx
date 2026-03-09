"use client";

import { useAuth } from "@/context/AuthContext";
import { AnimatePresence, motion } from "framer-motion";
import { LogIn, UserPlus, X, Mail, Lock, User, Loader2, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialMode?: "login" | "signup";
}

export default function AuthModal({ isOpen, onClose, initialMode = "login" }: AuthModalProps) {
    const [mode, setMode] = useState<"login" | "signup">(initialMode);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { login, signup } = useAuth();
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const endpoint = mode === "login" ? "/api/auth/login" : "/api/auth/signup";
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Algo salió mal");
            }

            if (mode === "login") {
                login(data.user.name, data.user.email);
            } else {
                signup(data.user.name, data.user.email);
            }

            onClose();
            router.push("/dashboard");
        } catch (err: any) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-primary/40 backdrop-blur-sm"
                    />
                    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="w-full max-w-md overflow-hidden rounded-3xl border border-soft bg-surface shadow-2xl pointer-events-auto"
                        >
                            <div className="relative p-6 md:p-8">
                                <button
                                    onClick={onClose}
                                    className="absolute right-4 top-4 rounded-full p-2 text-muted transition-colors hover:bg-accent/40 hover:text-primary"
                                >
                                    <X className="h-5 w-5" />
                                </button>

                                <div className="flex flex-col items-center text-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-accent shadow-lg mb-4">
                                        {mode === "login" ? <LogIn className="h-6 w-6" /> : <UserPlus className="h-6 w-6" />}
                                    </div>
                                    <h2 className="text-2xl font-bold text-primary">
                                        {mode === "login" ? "¡Bienvenido de nuevo!" : "Crea tu cuenta"}
                                    </h2>
                                    <p className="mt-2 text-sm text-muted">
                                        {mode === "login"
                                            ? "Ingresa tus credenciales para acceder a tu panel"
                                            : "Regístrate para gestionar tus pólizas y documentos"}
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                                    {mode === "signup" && (
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-primary uppercase tracking-wider ml-1">
                                                Nombre completo
                                            </label>
                                            <div className="relative group">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted group-focus-within:text-primary transition-colors" />
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Tu nombre"
                                                    className="w-full rounded-2xl border border-soft bg-page py-3 pl-11 pr-4 text-sm text-primary placeholder:text-muted/50 focus:border-primary/50 focus:outline-none focus:ring-4 focus:ring-primary/5 shadow-sm transition-all"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-primary uppercase tracking-wider ml-1">
                                            Correo electrónico
                                        </label>
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted group-focus-within:text-primary transition-colors" />
                                            <input
                                                required
                                                type="email"
                                                placeholder="tu@email.com"
                                                className="w-full rounded-2xl border border-soft bg-page py-3 pl-11 pr-4 text-sm text-primary placeholder:text-muted/50 focus:border-primary/50 focus:outline-none focus:ring-4 focus:ring-primary/5 shadow-sm transition-all"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-primary uppercase tracking-wider ml-1">
                                            Contraseña
                                        </label>
                                        <div className="relative group">
                                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted group-focus-within:text-primary transition-colors" />
                                            <input
                                                required
                                                type={showPassword ? "text" : "password"}
                                                placeholder="••••••••"
                                                className="w-full rounded-2xl border border-soft bg-page py-3 pl-11 pr-12 text-sm text-primary placeholder:text-muted/50 focus:border-primary/50 focus:outline-none focus:ring-4 focus:ring-primary/5 shadow-sm transition-all"
                                                value={formData.password}
                                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-primary transition-colors focus:outline-none"
                                            >
                                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                            </button>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full py-4 text-base mt-2"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <Loader2 className="h-5 w-5 animate-spin" />
                                        ) : (
                                            mode === "login" ? "Iniciar sesión" : "Crear cuenta"
                                        )}
                                    </Button>
                                </form>

                                <div className="mt-8 text-center pb-2">
                                    <p className="text-sm text-muted">
                                        {mode === "login" ? "¿No tienes una cuenta?" : "¿Ya tienes cuenta?"}
                                        <button
                                            onClick={() => setMode(mode === "login" ? "signup" : "login")}
                                            className="ml-1.5 font-bold text-primary hover:underline"
                                        >
                                            {mode === "login" ? "Regístrate aquí" : "Inicia sesión"}
                                        </button>
                                    </p>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -left-12 -top-12 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
                            <div className="absolute -right-8 -bottom-8 h-20 w-20 rounded-full bg-secondary/10 blur-xl" />
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
