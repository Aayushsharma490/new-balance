"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useWishlist } from "@/lib/store/wishlist";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function WishlistPage() {
    const { items, removeItem } = useWishlist();

    if (items.length === 0) {
        return (
            <div className="flex min-h-screen flex-col">
                <Header />
                <main className="flex-1 flex items-center justify-center py-20">
                    <div className="text-center">
                        <Heart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
                        <h1 className="font-display text-3xl font-bold mb-4">
                            Your Wishlist is Empty
                        </h1>
                        <p className="text-gray-600 mb-8">
                            Start adding products you love!
                        </p>
                        <Button asChild className="bg-red-600 hover:bg-red-700">
                            <Link href="/products">Browse Products</Link>
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h1 className="font-display text-4xl font-bold mb-8">
                        My Wishlist ({items.length})
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {items.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="group">
                                    <CardContent className="p-6">
                                        <Link href={`/products/${item.id}`} className="block aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-4 relative overflow-hidden">
                                            <Image
                                                src="https://nb.scene7.com/is/image/NB/m990gl6_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=400&hei=400"
                                                alt={item.name}
                                                fill
                                                className="object-contain p-6 transition-transform group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </Link>

                                        <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                                        <p className="text-2xl font-bold text-gray-900 mb-4">
                                            {formatPrice(item.price)}
                                        </p>

                                        <div className="flex gap-2">
                                            <Button className="flex-1 bg-red-600 hover:bg-red-700">
                                                <ShoppingCart className="mr-2 h-4 w-4" />
                                                Add to Cart
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => removeItem(item.id)}
                                                className="border-red-600 text-red-600 hover:bg-red-50"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
