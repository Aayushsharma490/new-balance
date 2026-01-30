"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    Package,
    Users,
    DollarSign,
    TrendingUp,
    Plus,
    Edit,
    Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("overview");

    const stats = [
        { label: "Total Orders", value: "1,234", icon: Package, color: "bg-blue-500" },
        { label: "Total Customers", value: "856", icon: Users, color: "bg-green-500" },
        { label: "Revenue", value: "$45,678", icon: DollarSign, color: "bg-purple-500" },
        { label: "Growth", value: "+12.5%", icon: TrendingUp, color: "bg-red-500" },
    ];

    const recentOrders = [
        { id: "ORD-001", customer: "John Doe", total: "$159.99", status: "Shipped" },
        { id: "ORD-002", customer: "Jane Smith", total: "$89.99", status: "Processing" },
        { id: "ORD-003", customer: "Bob Johnson", total: "$199.99", status: "Delivered" },
    ];

    const products = [
        { id: 1, name: "Fresh Foam X 1080v13", price: "$159.99", stock: 45 },
        { id: 2, name: "FuelCell Rebel v3", price: "$139.99", stock: 32 },
        { id: 3, name: "990v6 Made in USA", price: "$199.99", stock: 28 },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Header />
            <main className="flex-1 py-8">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-8">
                        <h1 className="font-display text-3xl font-bold">Admin Dashboard</h1>
                        <p className="text-gray-600 mt-2">Manage your store</p>
                    </div>

                    {/* Tabs */}
                    <div className="mb-8 flex gap-4 border-b">
                        {["overview", "products", "orders", "customers"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-4 px-4 font-medium capitalize ${activeTab === tab
                                        ? "border-b-2 border-red-600 text-red-600"
                                        : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Overview Tab */}
                    {activeTab === "overview" && (
                        <div className="space-y-8">
                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Card>
                                            <CardContent className="p-6">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="text-sm text-gray-600">{stat.label}</p>
                                                        <p className="text-2xl font-bold mt-1">{stat.value}</p>
                                                    </div>
                                                    <div className={`${stat.color} p-3 rounded-lg`}>
                                                        <stat.icon className="h-6 w-6 text-white" />
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Recent Orders */}
                            <Card>
                                <CardContent className="p-6">
                                    <h2 className="font-semibold text-lg mb-4">Recent Orders</h2>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Order ID</TableHead>
                                                <TableHead>Customer</TableHead>
                                                <TableHead>Total</TableHead>
                                                <TableHead>Status</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {recentOrders.map((order) => (
                                                <TableRow key={order.id}>
                                                    <TableCell className="font-medium">{order.id}</TableCell>
                                                    <TableCell>{order.customer}</TableCell>
                                                    <TableCell>{order.total}</TableCell>
                                                    <TableCell>
                                                        <span
                                                            className={`px-2 py-1 rounded-full text-xs ${order.status === "Delivered"
                                                                    ? "bg-green-100 text-green-700"
                                                                    : order.status === "Shipped"
                                                                        ? "bg-blue-100 text-blue-700"
                                                                        : "bg-yellow-100 text-yellow-700"
                                                                }`}
                                                        >
                                                            {order.status}
                                                        </span>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* Products Tab */}
                    {activeTab === "products" && (
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <h2 className="font-semibold text-xl">Products</h2>
                                <Button className="bg-red-600 hover:bg-red-700">
                                    <Plus className="mr-2 h-4 w-4" />
                                    Add Product
                                </Button>
                            </div>

                            <Card>
                                <CardContent className="p-6">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Product Name</TableHead>
                                                <TableHead>Price</TableHead>
                                                <TableHead>Stock</TableHead>
                                                <TableHead>Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {products.map((product) => (
                                                <TableRow key={product.id}>
                                                    <TableCell className="font-medium">{product.name}</TableCell>
                                                    <TableCell>{product.price}</TableCell>
                                                    <TableCell>{product.stock}</TableCell>
                                                    <TableCell>
                                                        <div className="flex gap-2">
                                                            <Button variant="outline" size="sm">
                                                                <Edit className="h-4 w-4" />
                                                            </Button>
                                                            <Button variant="outline" size="sm">
                                                                <Trash2 className="h-4 w-4" />
                                                            </Button>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* Orders Tab */}
                    {activeTab === "orders" && (
                        <Card>
                            <CardContent className="p-6">
                                <h2 className="font-semibold text-xl mb-4">All Orders</h2>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Order ID</TableHead>
                                            <TableHead>Customer</TableHead>
                                            <TableHead>Date</TableHead>
                                            <TableHead>Total</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {recentOrders.map((order) => (
                                            <TableRow key={order.id}>
                                                <TableCell className="font-medium">{order.id}</TableCell>
                                                <TableCell>{order.customer}</TableCell>
                                                <TableCell>2024-01-15</TableCell>
                                                <TableCell>{order.total}</TableCell>
                                                <TableCell>
                                                    <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                                                        {order.status}
                                                    </span>
                                                </TableCell>
                                                <TableCell>
                                                    <Button variant="outline" size="sm">
                                                        View
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    )}

                    {/* Customers Tab */}
                    {activeTab === "customers" && (
                        <Card>
                            <CardContent className="p-6">
                                <h2 className="font-semibold text-xl mb-4">Customers</h2>
                                <p className="text-gray-600">Customer management coming soon...</p>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
