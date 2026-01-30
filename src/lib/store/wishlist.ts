"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface WishlistItem {
    id: number;
    name: string;
    price: number;
    image?: string;
    category: string;
}

interface WishlistStore {
    items: WishlistItem[];
    addItem: (item: WishlistItem) => void;
    removeItem: (id: number) => void;
    isInWishlist: (id: number) => boolean;
    clearWishlist: () => void;
}

export const useWishlist = create<WishlistStore>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (item) => {
                const items = get().items;
                if (!items.find((i) => i.id === item.id)) {
                    set({ items: [...items, item] });
                }
            },
            removeItem: (id) => {
                set({ items: get().items.filter((item) => item.id !== id) });
            },
            isInWishlist: (id) => {
                return get().items.some((item) => item.id === id);
            },
            clearWishlist: () => set({ items: [] }),
        }),
        {
            name: "wishlist-storage",
        }
    )
);
