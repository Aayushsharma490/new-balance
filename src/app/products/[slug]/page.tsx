"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart, Heart, Share2, Check } from "lucide-react";
import { formatPrice } from "@/lib/utils";

const product = {
    name: "Fresh Foam X 1080v13",
    category: "Running Shoes",
    price: 164.99,
    compareAtPrice: 189.99,
    rating: 4.8,
    reviews: 1234,
    description:
        "Experience unmatched comfort with the Fresh Foam X 1080v13. Featuring our most cushioned Fresh Foam midsole and a soft, engineered knit upper, this shoe delivers plush comfort mile after mile.",
    features: [
        "Fresh Foam X midsole foam with approximately 3% bio-based content",
        "Engineered Hypoknit upper for breathability and comfort",
        "Ultra Heel design hugs the back of the foot for a snug, supportive fit",
        "Reflective accents designed to catch the light",
        "10mm drop; due to variances created during the development and manufacturing processes",
    ],
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
    colors: [
        { name: "Black", hex: "#000000" },
        { name: "White", hex: "#FFFFFF" },
        { name: "Blue", hex: "#0066CC" },
    ],
};

export default function ProductDetailPage() {
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2">
                        {/* Product Images */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-4"
                        >
                            {/* Main Image */}
                            <div className="aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900">
                                <div className="flex h-full items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-8xl font-bold text-neutral-400">NB</div>
                                        <div className="mt-4 text-xl text-neutral-500">{product.category}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Thumbnail Gallery */}
                            <div className="grid grid-cols-4 gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <button
                                        key={i}
                                        className="aspect-square overflow-hidden rounded-lg border-2 border-transparent hover:border-primary"
                                    >
                                        <div className="h-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900" />
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Product Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            {/* Category & Name */}
                            <div>
                                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                    {product.category}
                                </p>
                                <h1 className="mt-2 font-display text-4xl font-bold">{product.name}</h1>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-5 w-5 ${i < Math.floor(product.rating)
                                                    ? "fill-yellow-400 text-yellow-400"
                                                    : "text-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-sm font-medium">{product.rating}</span>
                                <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                            </div>

                            {/* Price */}
                            <div className="flex items-baseline gap-3">
                                <span className="text-3xl font-bold">{formatPrice(product.price)}</span>
                                {product.compareAtPrice && (
                                    <span className="text-lg text-muted-foreground line-through">
                                        {formatPrice(product.compareAtPrice)}
                                    </span>
                                )}
                                {product.compareAtPrice && (
                                    <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600 dark:bg-red-900/20 dark:text-red-400">
                                        Save {Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)}%
                                    </span>
                                )}
                            </div>

                            {/* Description */}
                            <p className="text-muted-foreground">{product.description}</p>

                            {/* Color Selection */}
                            <div>
                                <label className="mb-3 block text-sm font-medium">
                                    Color: <span className="font-normal text-muted-foreground">{selectedColor.name}</span>
                                </label>
                                <div className="flex gap-2">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color.name}
                                            onClick={() => setSelectedColor(color)}
                                            className={`h-10 w-10 rounded-full border-2 transition-all ${selectedColor.name === color.name
                                                    ? "border-primary scale-110"
                                                    : "border-border hover:scale-105"
                                                }`}
                                            style={{ backgroundColor: color.hex }}
                                            title={color.name}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Size Selection */}
                            <div>
                                <label className="mb-3 block text-sm font-medium">
                                    Size: {selectedSize && <span className="font-normal text-muted-foreground">US {selectedSize}</span>}
                                </label>
                                <div className="grid grid-cols-6 gap-2">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`rounded-md border-2 py-2 text-sm font-medium transition-all ${selectedSize === size
                                                    ? "border-primary bg-primary text-primary-foreground"
                                                    : "border-border hover:border-primary"
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity */}
                            <div>
                                <label className="mb-3 block text-sm font-medium">Quantity</label>
                                <div className="flex w-32 items-center rounded-md border border-input">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-3 py-2 hover:bg-muted"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                        className="w-full border-x border-input bg-transparent px-3 py-2 text-center"
                                    />
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-3 py-2 hover:bg-muted"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3">
                                <Button size="lg" className="flex-1 group">
                                    <ShoppingCart className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                                    Add to Cart
                                </Button>
                                <Button size="lg" variant="outline">
                                    <Heart className="h-5 w-5" />
                                </Button>
                                <Button size="lg" variant="outline">
                                    <Share2 className="h-5 w-5" />
                                </Button>
                            </div>

                            {/* Features */}
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-4 font-semibold">Key Features</h3>
                                    <ul className="space-y-2">
                                        {product.features.map((feature, index) => (
                                            <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                                                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
