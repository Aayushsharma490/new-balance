"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Order {
    id: string;
    userId: string;
    items: Array<{
        id: number;
        name: string;
        price: number;
        quantity: number;
    }>;
    total: number;
    status: "pending" | "processing" | "shipped" | "delivered";
    shippingAddress: {
        name: string;
        address: string;
        city: string;
        state: string;
        zip: string;
    };
    createdAt: string;
}

interface OrderStore {
    orders: Order[];
    addOrder: (order: Omit<Order, "id" | "createdAt">) => void;
    getOrdersByUserId: (userId: string) => Order[];
    updateOrderStatus: (orderId: string, status: Order["status"]) => void;
}

export const useOrders = create<OrderStore>()(
    persist(
        (set, get) => ({
            orders: [],

            addOrder: (orderData) => {
                const order: Order = {
                    ...orderData,
                    id: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                    createdAt: new Date().toISOString(),
                };

                set({ orders: [...get().orders, order] });
            },

            getOrdersByUserId: (userId) => {
                return get().orders.filter((order) => order.userId === userId);
            },

            updateOrderStatus: (orderId, status) => {
                set({
                    orders: get().orders.map((order) =>
                        order.id === orderId ? { ...order, status } : order
                    ),
                });
            },
        }),
        {
            name: "orders-storage",
        }
    )
);
