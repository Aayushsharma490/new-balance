"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const stores = [
    {
        id: 1,
        name: "New Balance Boston Flagship",
        address: "100 Guest Street, Boston, MA 02135",
        phone: "(617) 783-4000",
        hours: "Mon-Sat: 10am-8pm, Sun: 11am-6pm",
        distance: "2.3 miles",
    },
    {
        id: 2,
        name: "New Balance Factory Store",
        address: "40 Life Street, Brighton, MA 02135",
        phone: "(617) 779-7429",
        hours: "Mon-Sat: 9am-9pm, Sun: 10am-7pm",
        distance: "3.1 miles",
    },
    {
        id: 3,
        name: "New Balance Outlet",
        address: "Assembly Row, Somerville, MA 02145",
        phone: "(617) 625-2300",
        hours: "Mon-Sat: 10am-9pm, Sun: 11am-7pm",
        distance: "5.7 miles",
    },
];

export default function StoreLocatorPage() {
    const [zipCode, setZipCode] = useState("");

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 text-white">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center"
                        >
                            <h1 className="font-display text-5xl font-bold mb-6">
                                Find a Store
                            </h1>
                            <p className="text-xl text-gray-300 mb-8">
                                Locate a New Balance store near you
                            </p>

                            {/* Search */}
                            <div className="max-w-md mx-auto flex gap-2">
                                <Input
                                    placeholder="Enter ZIP code"
                                    value={zipCode}
                                    onChange={(e) => setZipCode(e.target.value)}
                                    className="bg-white text-gray-900"
                                />
                                <Button className="bg-red-600 hover:bg-red-700">Search</Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Store List */}
                <section className="py-20 bg-white">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* List */}
                            <div className="space-y-4">
                                {stores.map((store, index) => (
                                    <motion.div
                                        key={store.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Card className="hover:shadow-lg transition-shadow">
                                            <CardContent className="p-6">
                                                <div className="flex justify-between items-start mb-4">
                                                    <h3 className="font-semibold text-lg">{store.name}</h3>
                                                    <span className="text-sm text-gray-600">{store.distance}</span>
                                                </div>

                                                <div className="space-y-2 text-gray-600">
                                                    <div className="flex items-start gap-2">
                                                        <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                                        <span>{store.address}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Phone className="h-5 w-5 flex-shrink-0" />
                                                        <span>{store.phone}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Clock className="h-5 w-5 flex-shrink-0" />
                                                        <span>{store.hours}</span>
                                                    </div>
                                                </div>

                                                <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">
                                                    Get Directions
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Map Placeholder */}
                            <div className="lg:sticky lg:top-24 h-[600px]">
                                <Card className="h-full">
                                    <CardContent className="p-0 h-full">
                                        <div className="h-full bg-gray-200 rounded-lg flex items-center justify-center">
                                            <div className="text-center text-gray-500">
                                                <MapPin className="h-16 w-16 mx-auto mb-4" />
                                                <p>Map integration would go here</p>
                                                <p className="text-sm">(Google Maps API)</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
