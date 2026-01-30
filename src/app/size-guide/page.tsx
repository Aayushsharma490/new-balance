"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const sizeGuide = {
    men: [
        { us: "7", uk: "6.5", eu: "40", cm: "25" },
        { us: "7.5", uk: "7", eu: "40.5", cm: "25.5" },
        { us: "8", uk: "7.5", eu: "41.5", cm: "26" },
        { us: "8.5", uk: "8", eu: "42", cm: "26.5" },
        { us: "9", uk: "8.5", eu: "42.5", cm: "27" },
        { us: "9.5", uk: "9", eu: "43", cm: "27.5" },
        { us: "10", uk: "9.5", eu: "44", cm: "28" },
        { us: "10.5", uk: "10", eu: "44.5", cm: "28.5" },
        { us: "11", uk: "10.5", eu: "45", cm: "29" },
        { us: "11.5", uk: "11", eu: "45.5", cm: "29.5" },
        { us: "12", uk: "11.5", eu: "46.5", cm: "30" },
    ],
    women: [
        { us: "5", uk: "3", eu: "35", cm: "22" },
        { us: "5.5", uk: "3.5", eu: "36", cm: "22.5" },
        { us: "6", uk: "4", eu: "36.5", cm: "23" },
        { us: "6.5", uk: "4.5", eu: "37", cm: "23.5" },
        { us: "7", uk: "5", eu: "37.5", cm: "24" },
        { us: "7.5", uk: "5.5", eu: "38", cm: "24.5" },
        { us: "8", uk: "6", eu: "39", cm: "25" },
        { us: "8.5", uk: "6.5", eu: "40", cm: "25.5" },
        { us: "9", uk: "7", eu: "40.5", cm: "26" },
        { us: "9.5", uk: "7.5", eu: "41", cm: "26.5" },
        { us: "10", uk: "8", eu: "41.5", cm: "27" },
    ],
};

export default function SizeGuidePage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-20 bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="font-display text-4xl font-bold mb-4">Size Guide</h1>
                        <p className="text-lg text-gray-600">
                            Find your perfect fit with our comprehensive sizing charts
                        </p>
                    </motion.div>

                    {/* How to Measure */}
                    <Card className="mb-12">
                        <CardContent className="p-8">
                            <h2 className="font-semibold text-2xl mb-6">How to Measure Your Feet</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div>
                                    <div className="bg-red-100 text-red-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                                        1
                                    </div>
                                    <h3 className="font-semibold mb-2">Stand on Paper</h3>
                                    <p className="text-gray-600">
                                        Place a piece of paper on a hard floor against a wall
                                    </p>
                                </div>
                                <div>
                                    <div className="bg-red-100 text-red-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                                        2
                                    </div>
                                    <h3 className="font-semibold mb-2">Mark Your Heel</h3>
                                    <p className="text-gray-600">
                                        Stand with your heel against the wall and mark the longest toe
                                    </p>
                                </div>
                                <div>
                                    <div className="bg-red-100 text-red-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                                        3
                                    </div>
                                    <h3 className="font-semibold mb-2">Measure Length</h3>
                                    <p className="text-gray-600">
                                        Measure the distance from the wall to the mark in centimeters
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Men's Size Chart */}
                    <Card className="mb-8">
                        <CardContent className="p-8">
                            <h2 className="font-semibold text-2xl mb-6">Men's Sizes</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left py-3 px-4">US</th>
                                            <th className="text-left py-3 px-4">UK</th>
                                            <th className="text-left py-3 px-4">EU</th>
                                            <th className="text-left py-3 px-4">CM</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sizeGuide.men.map((size, index) => (
                                            <tr key={index} className="border-b hover:bg-gray-50">
                                                <td className="py-3 px-4">{size.us}</td>
                                                <td className="py-3 px-4">{size.uk}</td>
                                                <td className="py-3 px-4">{size.eu}</td>
                                                <td className="py-3 px-4">{size.cm}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Women's Size Chart */}
                    <Card>
                        <CardContent className="p-8">
                            <h2 className="font-semibold text-2xl mb-6">Women's Sizes</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left py-3 px-4">US</th>
                                            <th className="text-left py-3 px-4">UK</th>
                                            <th className="text-left py-3 px-4">EU</th>
                                            <th className="text-left py-3 px-4">CM</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sizeGuide.women.map((size, index) => (
                                            <tr key={index} className="border-b hover:bg-gray-50">
                                                <td className="py-3 px-4">{size.us}</td>
                                                <td className="py-3 px-4">{size.uk}</td>
                                                <td className="py-3 px-4">{size.eu}</td>
                                                <td className="py-3 px-4">{size.cm}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
