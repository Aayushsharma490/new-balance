"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const stats = [
    { icon: Award, label: "Years of Excellence", value: "100+" },
    { icon: Users, label: "Athletes Worldwide", value: "50M+" },
    { icon: Globe, label: "Countries", value: "120+" },
    { icon: TrendingUp, label: "Customer Satisfaction", value: "98%" },
];

const values = [
    {
        title: "Innovation",
        description: "Constantly pushing boundaries with cutting-edge technology and design.",
    },
    {
        title: "Quality",
        description: "Uncompromising commitment to craftsmanship and durability.",
    },
    {
        title: "Community",
        description: "Supporting athletes and communities around the world.",
    },
    {
        title: "Sustainability",
        description: "Dedicated to reducing our environmental footprint.",
    },
];

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 py-24 text-white">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <motion.div
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src="https://nb.scene7.com/is/image/NB/nb-brand-story-hero?$staticlink$"
                            alt="New Balance Heritage"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="font-display text-5xl font-bold tracking-tight sm:text-6xl"
                            >
                                Fearlessly Independent Since 1906
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300"
                            >
                                For over a century, we've been dedicated to helping athletes achieve their goals
                                through innovative design and unwavering commitment to quality.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 bg-white">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                >
                                    <Card className="text-center border-2 hover:border-red-600 transition-all hover:shadow-xl">
                                        <CardContent className="p-6">
                                            <motion.div
                                                initial={{ rotate: 0 }}
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.6 }}
                                                className="mx-auto mb-4 inline-flex rounded-full bg-red-100 p-3 text-red-600"
                                            >
                                                <stat.icon className="h-6 w-6" />
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: index * 0.1 + 0.3 }}
                                                className="text-3xl font-bold"
                                            >
                                                {stat.value}
                                            </motion.div>
                                            <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Story */}
                <section ref={containerRef} className="bg-gradient-to-b from-gray-50 to-white py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, type: "spring" }}
                            >
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="font-display text-4xl font-bold"
                                >
                                    Our Story
                                </motion.h2>
                                <div className="mt-6 space-y-4 text-muted-foreground">
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        Founded in 1906 in Boston, Massachusetts, New Balance has grown from a small
                                        arch support company to one of the world's leading athletic footwear brands.
                                    </motion.p>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        Our commitment to domestic manufacturing sets us apart. We're proud to be the
                                        only major company to make athletic footwear in the United States, employing
                                        American workers in our five New England factories.
                                    </motion.p>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        Today, we continue to innovate with cutting-edge technologies while staying
                                        true to our core values of quality, integrity, and customer service.
                                    </motion.p>
                                </div>
                            </motion.div>

                            <motion.div
                                style={{ y, opacity }}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl"
                            >
                                <Image
                                    src="https://nb.scene7.com/is/image/NB/m990gl6_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=800&hei=600"
                                    alt="New Balance 990v6 - Made in USA"
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 1200px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="text-sm font-semibold">Made in USA</p>
                                    <p className="text-2xl font-bold">990v6</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section className="py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <h2 className="font-display text-4xl font-bold">Our Values</h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                                The principles that guide everything we do
                            </p>
                        </motion.div>

                        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 50, rotateX: -15 }}
                                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.15,
                                        duration: 0.6,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        y: -10,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <Card className="h-full transition-all hover:shadow-2xl border-2 hover:border-red-600 bg-gradient-to-br from-white to-gray-50">
                                        <CardContent className="p-6">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                                                className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4"
                                            >
                                                <div className="w-6 h-6 rounded-full bg-red-600" />
                                            </motion.div>
                                            <h3 className="text-xl font-semibold">{value.title}</h3>
                                            <p className="mt-3 text-sm text-muted-foreground">{value.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
