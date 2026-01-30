"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Trophy, Heart, MapPin, Calendar, ArrowRight } from "lucide-react";

const programs = [
    {
        icon: Trophy,
        title: "Athlete Sponsorships",
        description: "Supporting professional and amateur athletes worldwide in their journey to excellence.",
    },
    {
        icon: Heart,
        title: "Community Events",
        description: "Organizing local running clubs, fitness events, and wellness programs.",
    },
    {
        icon: MapPin,
        title: "Local Partnerships",
        description: "Collaborating with schools, gyms, and community centers to promote active lifestyles.",
    },
    {
        icon: Calendar,
        title: "Annual Marathons",
        description: "Hosting and sponsoring marathon events that bring communities together.",
    },
];

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Marathon Runner",
        quote: "New Balance has been my partner in every race. Their community support is unmatched.",
        image: null,
    },
    {
        name: "Michael Chen",
        role: "Fitness Coach",
        quote: "The local events they organize have transformed our community's approach to fitness.",
        image: null,
    },
    {
        name: "Emma Williams",
        role: "Youth Athlete",
        quote: "Their youth programs gave me the confidence and support to pursue my athletic dreams.",
        image: null,
    },
];

export default function CommunityPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-800 py-24 text-white">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <div className="mx-auto mb-6 inline-flex rounded-full bg-white/10 p-4 backdrop-blur-sm">
                                <Users className="h-12 w-12" />
                            </div>
                            <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
                                Our Community
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
                                Building stronger communities through sports, fitness, and shared passion for
                                athletic excellence.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Programs Section */}
                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <h2 className="font-display text-4xl font-bold">Community Programs</h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                                Ways we support and engage with communities worldwide
                            </p>
                        </motion.div>

                        <div className="mt-16 grid gap-8 md:grid-cols-2">
                            {programs.map((program, index) => (
                                <motion.div
                                    key={program.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                >
                                    <Card className="h-full transition-all hover:shadow-lg">
                                        <CardContent className="p-6">
                                            <div className="mb-4 inline-flex rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                                                <program.icon className="h-6 w-6" />
                                            </div>
                                            <h3 className="text-xl font-semibold">{program.title}</h3>
                                            <p className="mt-2 text-muted-foreground">{program.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="bg-muted/30 py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <h2 className="font-display text-4xl font-bold">Community Voices</h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                                Hear from members of our global community
                            </p>
                        </motion.div>

                        <div className="mt-16 grid gap-8 md:grid-cols-3">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                >
                                    <Card className="h-full">
                                        <CardContent className="p-6">
                                            <div className="mb-4 flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 dark:from-blue-800 dark:to-blue-900" />
                                                <div>
                                                    <div className="font-semibold">{testimonial.name}</div>
                                                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                                </div>
                                            </div>
                                            <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Join Community CTA */}
                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-12 text-center text-white"
                        >
                            <h2 className="font-display text-3xl font-bold sm:text-4xl">
                                Join Our Community
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                                Be part of a global movement dedicated to fitness, wellness, and athletic
                                excellence.
                            </p>
                            <div className="mt-8">
                                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                                    Get Involved
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
