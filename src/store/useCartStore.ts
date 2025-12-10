import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartItem, Product } from "@/types";
import { v4 as uuidv4 } from "uuid"; // We might need uuid, or just use random string

interface CartState {
    items: CartItem[];
    isOpen: boolean;
    addItem: (product: Product, quantity?: number, variant?: CartItem["selectedVariant"]) => void;
    removeItem: (cartId: string) => void;
    updateQuantity: (cartId: string, quantity: number) => void;
    clearCart: () => void;
    toggleCart: () => void;
    openCart: () => void;
    closeCart: () => void;
    total: () => number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,
            addItem: (product, quantity = 1, variant) => {
                const currentItems = get().items;
                // Simple logic: if same product and same variant, increase quantity
                // Otherwise add new item
                // Ideally we generate a unique cartId based on product.id + variant
                const cartId = `${product.id}-${variant ? variant.option : "base"}`;

                const existingItem = currentItems.find((item) => item.cartId === cartId);

                if (existingItem) {
                    set({
                        items: currentItems.map((item) =>
                            item.cartId === cartId
                                ? { ...item, quantity: item.quantity + quantity }
                                : item
                        ),
                        isOpen: true,
                    });
                } else {
                    set({
                        items: [
                            ...currentItems,
                            { ...product, cartId, quantity, selectedVariant: variant },
                        ],
                        isOpen: true,
                    });
                }
            },
            removeItem: (cartId) =>
                set((state) => ({
                    items: state.items.filter((item) => item.cartId !== cartId),
                })),
            updateQuantity: (cartId, quantity) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.cartId === cartId ? { ...item, quantity: Math.max(0, quantity) } : item
                    ),
                })),
            clearCart: () => set({ items: [] }),
            toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
            openCart: () => set({ isOpen: true }),
            closeCart: () => set({ isOpen: false }),
            total: () => {
                return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
            },
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({ items: state.items }), // Only persist items, not UI state like isOpen
        }
    )
);
