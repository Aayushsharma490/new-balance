"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen min-h-[600px] overflow-hidden bg-black"
        >
            {/* Animated GIF Background - More Visible */}
            <motion.div
                style={{ opacity, scale }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/Whisk_ygz1ijn4ugmlzgoj1cokjdotydoyqtlwezn00cm.gif"
                    alt="New Balance Animation"
                    fill
                    className="object-cover opacity-70"
                    priority
                    unoptimized
                />
            </motion.div>

            {/* Subtle dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 z-[1]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-red-500"
                        >
                            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                            New Arrivals
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="font-display text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl drop-shadow-lg"
                        >
                            Fearlessly
                            <br />
                            <span className="text-red-500">Independent</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="mt-6 text-lg leading-8 text-gray-200 max-w-xl drop-shadow-md"
                        >
                            Experience the perfect blend of performance and style. Designed for athletes who demand excellence.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="mt-10 flex flex-wrap items-center gap-4"
                        >
                            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white shadow-xl">
                                <Link href="/products">
                                    Shop Now
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>

                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 backdrop-blur-sm">
                                <Link href="/about">
                                    Learn More
                                    <ChevronRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="mt-16 grid grid-cols-3 gap-8 border-t border-white/30 pt-8"
                        >
                            <div>
                                <div className="text-3xl font-bold text-white">100+</div>
                                <div className="mt-1 text-sm text-gray-300">Years of Heritage</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">50M+</div>
                                <div className="mt-1 text-sm text-gray-300">Athletes Worldwide</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">4.8★</div>
                                <div className="mt-1 text-sm text-gray-300">Customer Rating</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Product Showcase */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="relative flex items-center justify-center"
                    >
                        <div className="relative h-[500px] w-full">
                            {/* Glowing background effect */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />
                            </div>

                            {/* Product Image */}
                            <Link href="/products" className="relative z-10 flex h-full items-center justify-center group">
                                <motion.div
                                    whileHover={{ scale: 1.05, rotate: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="relative"
                                >
                                    <Image
                                        src="https://nb.scene7.com/is/image/NB/m990gl6_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440"
                                        alt="New Balance 990v6"
                                        width={440}
                                        height={440}
                                        className="drop-shadow-2xl"
                                        priority
                                    />
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center">
                                        <div className="text-xl font-bold text-white drop-shadow-lg">990v6</div>
                                        <div className="text-sm text-gray-300">Made in USA</div>
                                    </div>
                                </motion.div>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
