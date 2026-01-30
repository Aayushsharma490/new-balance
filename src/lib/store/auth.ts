"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
    id: string;
    email: string;
    name: string;
    createdAt: string;
}

interface AuthStore {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    signup: (email: string, password: string, name: string) => Promise<boolean>;
    logout: () => void;
}

export const useAuth = create<AuthStore>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,

            login: async (email: string, password: string) => {
                // Demo login - accepts any email/password
                // In production, this would call an API
                const user: User = {
                    id: Math.random().toString(36).substr(2, 9),
                    email,
                    name: email.split("@")[0],
                    createdAt: new Date().toISOString(),
                };

                set({ user, isAuthenticated: true });
                return true;
            },

            signup: async (email: string, password: string, name: string) => {
                // Demo signup - accepts any credentials
                const user: User = {
                    id: Math.random().toString(36).substr(2, 9),
                    email,
                    name,
                    createdAt: new Date().toISOString(),
                };

                set({ user, isAuthenticated: true });
                return true;
            },

            logout: () => {
                set({ user: null, isAuthenticated: false });
            },
        }),
        {
            name: "auth-storage",
        }
    )
);
