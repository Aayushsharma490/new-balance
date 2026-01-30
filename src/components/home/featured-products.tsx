"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { formatPrice } from "@/lib/utils";

const featuredProducts = [
    {
        id: 1,
        name: "Fresh Foam X 1080v13",
        category: "Running",
        price: 164.99,
        rating: 4.8,
        reviews: 1234,
        colors: ["Black", "White", "Blue"],
        image: "https://nb.scene7.com/is/image/NB/m1080b13_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
    },
    {
        id: 2,
        name: "FuelCell Rebel v4",
        category: "Running",
        price: 139.99,
        rating: 4.9,
        reviews: 892,
        colors: ["Red", "Black", "Yellow"],
        image: "https://nb.scene7.com/is/image/NB/mfcxlk4_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
    },
    {
        id: 3,
        name: "990v6 Made in USA",
        category: "Lifestyle",
        price: 199.99,
        rating: 4.7,
        reviews: 2156,
        colors: ["Grey", "Navy", "Burgundy"],
        image: "https://nb.scene7.com/is/image/NB/m990gl6_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
    },
    {
        id: 4,
        name: "Fresh Foam X More v4",
        category: "Running",
        price: 174.99,
        rating: 4.6,
        reviews: 567,
        colors: ["Black", "White", "Green"],
        image: "https://nb.scene7.com/is/image/NB/mmorbl4_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
    },
];

export function FeaturedProducts() {
    return (
        <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-24 sm:py-32 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-end justify-between"
                >
                    <div>
                        <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Featured Products
                        </h2>
                        <p className="mt-4 text-lg text-gray-700">
                            Discover our most popular shoes loved by athletes worldwide
                        </p>
                    </div>
                    <Button asChild variant="outline" className="hidden md:inline-flex border-gray-900 text-gray-900 hover:bg-gray-100">
                        <Link href="/products">View All</Link>
                    </Button>
                </motion.div>

                {/* Products Grid */}
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {featuredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <Card className="group overflow-hidden transition-all hover:shadow-2xl border-gray-200">
                                {/* Product Image */}
                                <Link href={`/products/${product.id}`} className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 block">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />

                                    {/* Wishlist Button */}
                                    <button className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
                                        <Heart className="h-5 w-5 text-gray-700 hover:text-red-600 hover:fill-red-600 transition-colors" />
                                    </button>

                                    {/* Quick Add Button */}
                                    <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/90 to-transparent p-4 transition-transform group-hover:translate-y-0">
                                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white shadow-xl" size="sm">
                                            <ShoppingCart className="mr-2 h-4 w-4" />
                                            Quick Add
                                        </Button>
                                    </div>
                                </Link>

                                <CardContent className="p-5">
                                    {/* Category */}
                                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {product.category}
                                    </div>

                                    {/* Product Name */}
                                    <h3 className="mt-2 font-semibold line-clamp-2 text-gray-900">{product.name}</h3>

                                    {/* Rating */}
                                    <div className="mt-2 flex items-center gap-1">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        <span className="text-sm font-medium text-gray-900">{product.rating}</span>
                                        <span className="text-sm text-gray-500">({product.reviews})</span>
                                    </div>

                                    {/* Colors */}
                                    <div className="mt-3 flex gap-1">
                                        {product.colors.slice(0, 3).map((color) => (
                                            <div
                                                key={color}
                                                className="h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-200"
                                                title={color}
                                            />
                                        ))}
                                        {product.colors.length > 3 && (
                                            <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-300 bg-gray-100 text-xs text-gray-600">
                                                +{product.colors.length - 3}
                                            </div>
                                        )}
                                    </div>

                                    {/* Price */}
                                    <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
                                        <span className="text-xl font-bold text-gray-900">{formatPrice(product.price)}</span>
                                        <Button variant="ghost" size="sm" asChild className="text-red-600 hover:text-red-700 hover:bg-red-50">
                                            <Link href={`/products/${product.id}`}>View</Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-8 text-center md:hidden">
                    <Button asChild variant="outline" className="w-full border-gray-900 text-gray-900 hover:bg-gray-100">
                        <Link href="/products">View All Products</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
