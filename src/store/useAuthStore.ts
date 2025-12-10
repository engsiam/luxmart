import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { User } from "@/types";

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string) => void;
    logout: () => void;
    updateProfile: (data: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            login: (email) => {
                // Mock login
                set({
                    isAuthenticated: true,
                    user: {
                        id: "u1",
                        name: "John Doe",
                        email: email,
                        role: "user",
                        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
                    },
                });
            },
            logout: () => set({ user: null, isAuthenticated: false }),
            updateProfile: (data) =>
                set((state) => ({
                    user: state.user ? { ...state.user, ...data } : null,
                })),
        }),
        {
            name: "auth-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
