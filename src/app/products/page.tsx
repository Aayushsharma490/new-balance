"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, ShoppingCart, SlidersHorizontal, Search, Grid3x3, List, Heart } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";

// Mock products data
const products = [
    { id: 1, name: "Fresh Foam X 1080v13", category: "Running", price: 164.99, rating: 4.8, reviews: 1234, image: "https://nb.scene7.com/is/image/NB/m1080b13_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440" },
    { id: 2, name: "FuelCell Rebel v4", category: "Running", price: 139.99, rating: 4.9, reviews: 892, image: "https://nb.scene7.com/is/image/NB/mfcxlk4_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440" },
    { id: 3, name: "990v6 Made in USA", category: "Lifestyle", price: 199.99, rating: 4.7, reviews: 2156, image: "https://nb.scene7.com/is/image/NB/m990gl6_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440" },
    { id: 4, name: "Fresh Foam X More v4", category: "Running", price: 174.99, rating: 4.6, reviews: 567, image: "https://nb.scene7.com/is/image/NB/mmorbl4_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440" },
    { id: 5, name: "FuelCell SuperComp Elite v4", category: "Running", price: 249.99, rating: 4.9, reviews: 432, image: "https://nb.scene7.com/is/image/NB/mfcxlk4_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440" },
    { id: 6, name: "Fresh Foam X Hierro v8", category: "Trail", price: 154.99, rating: 4.5, reviews: 678, image: "https://nb.scene7.com/is/image/NB/m1080b13_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440" },
    { id: 7, name: "574 Core", category: "Lifestyle", price: 89.99, rating: 4.6, reviews: 3421, image: "https://nb.scene7.com/is/image/NB/m990gl6_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440" },
    { id: 8, name: "FuelCell Propel v4", category: "Running", price: 129.99, rating: 4.7, reviews: 891, image: "https://nb.scene7.com/is/image/NB/mmorbl4_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440" },
];

const categories = ["All", "Running", "Lifestyle", "Trail", "Walking"];
const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Newest", "Best Rating"];

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortBy, setSortBy] = useState("Featured");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = products.filter((product) => {
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Page Header */}
                <div className="border-b bg-muted/30">
                    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                                All Products
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Discover our complete collection of premium athletic footwear
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
                        {/* Sidebar Filters */}
                        <aside className="space-y-6">
                            {/* Search */}
                            <div>
                                <label className="mb-2 block text-sm font-medium">Search</label>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                    <Input
                                        placeholder="Search products..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-9"
                                    />
                                </div>
                            </div>

                            {/* Categories */}
                            <div>
                                <h3 className="mb-4 flex items-center gap-2 text-sm font-medium">
                                    <SlidersHorizontal className="h-4 w-4" />
                                    Categories
                                </h3>
                                <div className="space-y-2">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${selectedCategory === category
                                                ? "bg-primary text-primary-foreground"
                                                : "hover:bg-muted"
                                                }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div>
                                <h3 className="mb-4 text-sm font-medium">Price Range</h3>
                                <div className="space-y-2">
                                    <Input type="number" placeholder="Min" />
                                    <Input type="number" placeholder="Max" />
                                    <Button className="w-full" variant="outline">
                                        Apply
                                    </Button>
                                </div>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <div>
                            {/* Toolbar */}
                            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                                <p className="text-sm text-muted-foreground">
                                    {filteredProducts.length} products found
                                </p>

                                <div className="flex items-center gap-4">
                                    {/* Sort */}
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                                    >
                                        {sortOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>

                                    {/* View Toggle */}
                                    <div className="flex rounded-md border border-input">
                                        <button
                                            onClick={() => setViewMode("grid")}
                                            className={`p-2 ${viewMode === "grid" ? "bg-muted" : ""}`}
                                        >
                                            <Grid3x3 className="h-4 w-4" />
                                        </button>
                                        <button
                                            onClick={() => setViewMode("list")}
                                            className={`p-2 ${viewMode === "list" ? "bg-muted" : ""}`}
                                        >
                                            <List className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Products Grid/List */}
                            <div
                                className={
                                    viewMode === "grid"
                                        ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                                        : "space-y-4"
                                }
                            >
                                {filteredProducts.map((product, index) => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05, duration: 0.4 }}
                                    >
                                        <Card className="group overflow-hidden transition-all hover:shadow-xl">
                                            <div
                                                className={
                                                    viewMode === "grid"
                                                        ? ""
                                                        : "flex flex-row"
                                                }
                                            >
                                                {/* Product Image */}
                                                <div
                                                    className={`relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 ${viewMode === "grid" ? "aspect-square" : "w-48"
                                                        }`}
                                                >
                                                    <Image
                                                        src={product.image}
                                                        alt={product.name}
                                                        fill
                                                        className="object-contain p-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                                                        sizes={viewMode === "grid" ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : "192px"}
                                                    />

                                                    {/* Wishlist Button */}
                                                    <button className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-10">
                                                        <Heart className="h-4 w-4 text-gray-700 hover:text-red-600 hover:fill-red-600 transition-colors" />
                                                    </button>

                                                    {viewMode === "grid" && (
                                                        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/60 to-transparent p-4 transition-transform group-hover:translate-y-0">
                                                            <Button className="w-full" size="sm">
                                                                <ShoppingCart className="mr-2 h-4 w-4" />
                                                                Quick Add
                                                            </Button>
                                                        </div>
                                                    )}
                                                </div>

                                                <CardContent className={viewMode === "grid" ? "p-4" : "flex-1 p-4"}>
                                                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                                        {product.category}
                                                    </div>
                                                    <h3 className="mt-2 font-semibold">{product.name}</h3>

                                                    <div className="mt-2 flex items-center gap-1">
                                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                        <span className="text-sm font-medium">{product.rating}</span>
                                                        <span className="text-sm text-muted-foreground">({product.reviews})</span>
                                                    </div>

                                                    <div className="mt-4 flex items-center justify-between">
                                                        <span className="text-lg font-bold">{formatPrice(product.price)}</span>
                                                        <Button variant="ghost" size="sm">
                                                            View Details
                                                        </Button>
                                                    </div>
                                                </CardContent>
                                            </div>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
