"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function ScrollVideo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // User is actively scrolling
            setIsScrolling(true);

            // Clear existing timeout
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }

            // Set timeout to detect when scrolling stops
            scrollTimeoutRef.current = setTimeout(() => {
                setIsScrolling(false);
            }, 150); // Stop after 150ms of no scroll

            lastScrollY = currentScrollY;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(handleScroll);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', onScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
        >
            {/* Full-screen GIF */}
            <motion.div
                style={{ opacity, scale }}
                className="relative w-full h-screen"
            >
                <div className="relative w-full h-full">
                    <Image
                        ref={imgRef}
                        src="/Whisk_ygz1ijn4ugmlzgoj1cokjdotydoyqtlwezn00cm.gif"
                        alt="New Balance Innovation"
                        fill
                        className={`object-cover transition-all duration-300 ${isScrolling ? 'brightness-100' : 'brightness-50 grayscale-[50%]'
                            }`}
                        priority
                        unoptimized
                    />
                </div>

                {/* Overlay with text */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="text-center text-white px-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-display text-5xl md:text-7xl font-bold mb-6"
                        >
                            Innovation in Motion
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-200 mb-8"
                        >
                            {isScrolling ? "Keep scrolling to explore" : "Scroll to activate"}
                        </motion.p>

                        {/* Scroll indicator */}
                        {!isScrolling && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="inline-block"
                            >
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="w-8 h-12 border-2 border-white rounded-full mx-auto flex items-start justify-center p-2"
                                >
                                    <div className="w-1.5 h-3 bg-white rounded-full" />
                                </motion.div>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Status indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <div className={`px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300 ${isScrolling
                        ? 'bg-green-500/80 text-white'
                        : 'bg-gray-800/80 text-gray-300'
                        }`}>
                        <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${isScrolling ? 'bg-white animate-pulse' : 'bg-gray-500'
                                }`} />
                            <span className="text-sm font-medium">
                                {isScrolling ? 'Playing' : 'Paused'}
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
