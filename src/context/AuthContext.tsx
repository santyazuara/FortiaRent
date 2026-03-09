"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    isLoggedIn: boolean;
    login: (name: string, email: string) => void;
    signup: (name: string, email: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("fortiarent_user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (name: string, email: string) => {
        const newUser = { name, email };
        setUser(newUser);
        localStorage.setItem("fortiarent_user", JSON.stringify(newUser));
    };

    const signup = (name: string, email: string) => {
        const newUser = { name, email };
        setUser(newUser);
        localStorage.setItem("fortiarent_user", JSON.stringify(newUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("fortiarent_user");
    };

    return (
        <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
