"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";

const categories = [
    {
        title: "Men's Collection",
        description: "Performance and style for every athlete",
        image: "https://nb.scene7.com/is/image/NB/m990gl6_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=600&hei=600",
        products: [
            { name: "990v6", price: "$199.99", image: "https://nb.scene7.com/is/image/NB/m990gl6_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=300&hei=300" },
            { name: "Fresh Foam 1080", price: "$164.99", image: "https://nb.scene7.com/is/image/NB/m1080b13_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=300&hei=300" },
            { name: "FuelCell Rebel", price: "$139.99", image: "https://nb.scene7.com/is/image/NB/mfcxlk4_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=300&hei=300" },
        ],
        link: "/products?category=men",
        color: "from-blue-600 to-blue-800",
    },
    {
        title: "Women's Collection",
        description: "Designed for performance and comfort",
        image: "https://nb.scene7.com/is/image/NB/w990gl6_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=600&hei=600",
        products: [
            { name: "990v6 Women's", price: "$199.99", image: "https://nb.scene7.com/is/image/NB/w990gl6_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=300&hei=300" },
            { name: "Fresh Foam 1080", price: "$164.99", image: "https://nb.scene7.com/is/image/NB/w1080p13_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=300&hei=300" },
            { name: "FuelCell Rebel", price: "$139.99", image: "https://nb.scene7.com/is/image/NB/wfcxlp4_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=300&hei=300" },
        ],
        link: "/products?category=women",
        color: "from-pink-600 to-purple-800",
    },
    {
        title: "Kids' Collection",
        description: "Built for young champions",
        image: "https://nb.scene7.com/is/image/NB/pv990gl6_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=600&hei=600",
        products: [
            { name: "990v6 Kids", price: "$89.99", image: "https://nb.scene7.com/is/image/NB/pv990gl6_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=300&hei=300" },
            { name: "Fresh Foam Kids", price: "$74.99", image: "https://nb.scene7.com/is/image/NB/pv990gl6_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=300&hei=300" },
            { name: "574 Kids", price: "$59.99", image: "https://nb.scene7.com/is/image/NB/pv990gl6_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=300&hei=300" },
        ],
        link: "/products?category=kids",
        color: "from-green-600 to-teal-800",
    },
];

export function CategorySections() {
    return (
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                        Shop by Category
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                        Find the perfect fit for everyone in your family
                    </p>
                </motion.div>

                {/* Categories */}
                <div className="space-y-16 sm:space-y-24">
                    {categories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                            className={`relative overflow-hidden rounded-2xl sm:rounded-3xl ${categoryIndex % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
                        >
                            {/* Category Card */}
                            <div className={`bg-gradient-to-br ${category.color} p-6 sm:p-8 lg:p-12 text-white`}>
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                    {/* Text Content */}
                                    <div className={`${categoryIndex % 2 === 0 ? "lg:order-1" : "lg:order-2"} space-y-4 sm:space-y-6`}>
                                        <motion.h3
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold"
                                        >
                                            {category.title}
                                        </motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4 }}
                                            className="text-base sm:text-lg text-white/90"
                                        >
                                            {category.description}
                                        </motion.p>

                                        {/* Product Grid */}
                                        <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
                                            {category.products.map((product, idx) => (
                                                <motion.div
                                                    key={product.name}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.5 + idx * 0.1 }}
                                                    whileHover={{ scale: 1.05, y: -5 }}
                                                    className="group"
                                                >
                                                    <Card className="overflow-hidden border-2 border-white/20 hover:border-white transition-all">
                                                        <div className="aspect-square relative bg-white">
                                                            <Image
                                                                src={product.image}
                                                                alt={product.name}
                                                                fill
                                                                className="object-contain p-2 sm:p-4 group-hover:scale-110 transition-transform duration-500"
                                                                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 15vw"
                                                            />
                                                        </div>
                                                        <CardContent className="p-2 sm:p-3 bg-white/95 backdrop-blur">
                                                            <p className="text-xs sm:text-sm font-semibold text-gray-900 truncate">{product.name}</p>
                                                            <p className="text-xs sm:text-sm font-bold text-red-600">{product.price}</p>
                                                        </CardContent>
                                                    </Card>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.8 }}
                                        >
                                            <Button
                                                asChild
                                                size="lg"
                                                className="bg-white text-gray-900 hover:bg-gray-100 mt-4 sm:mt-6 w-full sm:w-auto"
                                            >
                                                <Link href={category.link} className="flex items-center justify-center gap-2">
                                                    <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
                                                    <span className="text-sm sm:text-base">Shop {category.title.split("'")[0]}</span>
                                                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                                                </Link>
                                            </Button>
                                        </motion.div>
                                    </div>

                                    {/* Hero Image */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4, duration: 0.8 }}
                                        className={`${categoryIndex % 2 === 0 ? "lg:order-2" : "lg:order-1"} relative aspect-square lg:aspect-auto lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl`}
                                    >
                                        <Image
                                            src={category.image}
                                            alt={category.title}
                                            fill
                                            className="object-contain hover:scale-110 transition-transform duration-700"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            priority={categoryIndex === 0}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
