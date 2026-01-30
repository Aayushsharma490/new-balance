"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useAuth } from "@/lib/store/auth";
import { useOrders } from "@/lib/store/orders";
import { motion } from "framer-motion";
import { Package, User, LogOut, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AccountPage() {
    const { user, isAuthenticated, logout } = useAuth();
    const { getOrdersByUserId } = useOrders();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/");
        }
    }, [isAuthenticated, router]);

    if (!isAuthenticated || !user) {
        return null;
    }

    const userOrders = getOrdersByUserId(user.id);

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-20 bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                                            <User className="h-6 w-6 text-red-600" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">{user.name}</p>
                                            <p className="text-sm text-gray-600">{user.email}</p>
                                        </div>
                                    </div>

                                    <nav className="space-y-2">
                                        <button className="w-full text-left px-4 py-2 rounded-lg bg-red-50 text-red-600 font-medium">
                                            <Package className="inline h-4 w-4 mr-2" />
                                            Orders
                                        </button>
                                        <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
                                            <User className="inline h-4 w-4 mr-2" />
                                            Profile
                                        </button>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-red-600"
                                        >
                                            <LogOut className="inline h-4 w-4 mr-2" />
                                            Logout
                                        </button>
                                    </nav>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <h1 className="font-display text-3xl font-bold mb-8">Order History</h1>

                            {userOrders.length === 0 ? (
                                <Card>
                                    <CardContent className="p-12 text-center">
                                        <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                                        <h2 className="font-semibold text-xl mb-2">No Orders Yet</h2>
                                        <p className="text-gray-600 mb-6">
                                            Start shopping to see your orders here
                                        </p>
                                        <Button
                                            onClick={() => router.push("/products")}
                                            className="bg-red-600 hover:bg-red-700"
                                        >
                                            Browse Products
                                        </Button>
                                    </CardContent>
                                </Card>
                            ) : (
                                <div className="space-y-4">
                                    {userOrders.map((order, index) => (
                                        <motion.div
                                            key={order.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Card>
                                                <CardContent className="p-6">
                                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                                        <div>
                                                            <p className="font-semibold text-lg">Order {order.id}</p>
                                                            <p className="text-sm text-gray-600">
                                                                {new Date(order.createdAt).toLocaleDateString("en-US", {
                                                                    year: "numeric",
                                                                    month: "long",
                                                                    day: "numeric",
                                                                })}
                                                            </p>
                                                        </div>
                                                        <div className="mt-2 md:mt-0">
                                                            <span
                                                                className={`px-3 py-1 rounded-full text-sm font-medium ${order.status === "delivered"
                                                                        ? "bg-green-100 text-green-700"
                                                                        : order.status === "shipped"
                                                                            ? "bg-blue-100 text-blue-700"
                                                                            : order.status === "processing"
                                                                                ? "bg-yellow-100 text-yellow-700"
                                                                                : "bg-gray-100 text-gray-700"
                                                                    }`}
                                                            >
                                                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="border-t pt-4">
                                                        <div className="space-y-3 mb-4">
                                                            {order.items.map((item) => (
                                                                <div key={item.id} className="flex justify-between">
                                                                    <div>
                                                                        <p className="font-medium">{item.name}</p>
                                                                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                                                                    </div>
                                                                    <p className="font-medium">
                                                                        {formatPrice(item.price * item.quantity)}
                                                                    </p>
                                                                </div>
                                                            ))}
                                                        </div>

                                                        <div className="border-t pt-4 flex justify-between items-center">
                                                            <div>
                                                                <p className="text-sm text-gray-600">Shipping to:</p>
                                                                <p className="font-medium">{order.shippingAddress.name}</p>
                                                                <p className="text-sm text-gray-600">
                                                                    {order.shippingAddress.address}, {order.shippingAddress.city}
                                                                </p>
                                                            </div>
                                                            <div className="text-right">
                                                                <p className="text-sm text-gray-600">Total</p>
                                                                <p className="text-2xl font-bold">{formatPrice(order.total)}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
