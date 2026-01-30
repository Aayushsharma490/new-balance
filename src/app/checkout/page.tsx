"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useCart } from "@/lib/store/cart";
import { useAuth } from "@/lib/store/auth";
import { useOrders } from "@/lib/store/orders";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CreditCard, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
    const { items, totalPrice, clearCart } = useCart();
    const { user, isAuthenticated } = useAuth();
    const { addOrder } = useOrders();
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: user?.email || "",
        firstName: user?.name || "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
    });

    if (items.length === 0) {
        return (
            <div className="flex min-h-screen flex-col">
                <Header />
                <main className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="font-display text-3xl font-bold mb-4">
                            Your cart is empty
                        </h1>
                        <Button asChild className="bg-red-600 hover:bg-red-700">
                            <Link href="/products">Continue Shopping</Link>
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create order
        const order = {
            userId: user?.id || "guest",
            items: items.map((item: { id: number; name: string; price: number; quantity: number }) => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
            })),
            total: totalPrice * 1.08, // Including tax
            status: "processing" as const,
            shippingAddress: {
                name: `${formData.firstName} ${formData.lastName}`,
                address: formData.address,
                city: formData.city,
                state: formData.state,
                zip: formData.zip,
            },
        };

        addOrder(order);
        clearCart();

        // Redirect to account page or success page
        if (isAuthenticated) {
            router.push("/account?orderPlaced=true");
        } else {
            alert("Order placed successfully! Check your email for confirmation.");
            router.push("/");
        }
    };

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12 bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Progress Steps */}
                    <div className="mb-12">
                        <div className="flex items-center justify-center gap-4">
                            {["Shipping", "Payment", "Review"].map((label, index) => (
                                <div key={label} className="flex items-center">
                                    <div
                                        className={`flex h-10 w-10 items-center justify-center rounded-full ${step > index + 1
                                            ? "bg-green-600 text-white"
                                            : step === index + 1
                                                ? "bg-red-600 text-white"
                                                : "bg-gray-300 text-gray-600"
                                            }`}
                                    >
                                        {step > index + 1 ? "✓" : index + 1}
                                    </div>
                                    <span className="ml-2 hidden sm:inline font-medium">{label}</span>
                                    {index < 2 && (
                                        <div className="mx-4 h-0.5 w-12 bg-gray-300" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Form */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardContent className="p-8">
                                    <form onSubmit={handleSubmit}>
                                        {/* Step 1: Shipping */}
                                        {step === 1 && (
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="space-y-6"
                                            >
                                                <h2 className="font-display text-2xl font-bold">
                                                    Shipping Information
                                                </h2>

                                                <div>
                                                    <label className="block text-sm font-medium mb-2">
                                                        Email *
                                                    </label>
                                                    <Input
                                                        required
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, email: e.target.value })
                                                        }
                                                    />
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">
                                                            First Name *
                                                        </label>
                                                        <Input
                                                            required
                                                            value={formData.firstName}
                                                            onChange={(e) =>
                                                                setFormData({ ...formData, firstName: e.target.value })
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">
                                                            Last Name *
                                                        </label>
                                                        <Input
                                                            required
                                                            value={formData.lastName}
                                                            onChange={(e) =>
                                                                setFormData({ ...formData, lastName: e.target.value })
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium mb-2">
                                                        Address *
                                                    </label>
                                                    <Input
                                                        required
                                                        value={formData.address}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, address: e.target.value })
                                                        }
                                                    />
                                                </div>

                                                <div className="grid grid-cols-3 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">
                                                            City *
                                                        </label>
                                                        <Input
                                                            required
                                                            value={formData.city}
                                                            onChange={(e) =>
                                                                setFormData({ ...formData, city: e.target.value })
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">
                                                            State *
                                                        </label>
                                                        <Input
                                                            required
                                                            value={formData.state}
                                                            onChange={(e) =>
                                                                setFormData({ ...formData, state: e.target.value })
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">
                                                            ZIP *
                                                        </label>
                                                        <Input
                                                            required
                                                            value={formData.zip}
                                                            onChange={(e) =>
                                                                setFormData({ ...formData, zip: e.target.value })
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                <Button
                                                    type="button"
                                                    onClick={handleNext}
                                                    className="w-full bg-red-600 hover:bg-red-700"
                                                    size="lg"
                                                >
                                                    Continue to Payment
                                                    <ArrowRight className="ml-2 h-5 w-5" />
                                                </Button>
                                            </motion.div>
                                        )}

                                        {/* Step 2: Payment */}
                                        {step === 2 && (
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="space-y-6"
                                            >
                                                <h2 className="font-display text-2xl font-bold">
                                                    Payment Information
                                                </h2>

                                                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                                                    <Lock className="h-4 w-4" />
                                                    Your payment information is secure and encrypted
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium mb-2">
                                                        Card Number *
                                                    </label>
                                                    <Input
                                                        required
                                                        placeholder="1234 5678 9012 3456"
                                                        value={formData.cardNumber}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, cardNumber: e.target.value })
                                                        }
                                                    />
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">
                                                            Expiry Date *
                                                        </label>
                                                        <Input
                                                            required
                                                            placeholder="MM/YY"
                                                            value={formData.expiry}
                                                            onChange={(e) =>
                                                                setFormData({ ...formData, expiry: e.target.value })
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">
                                                            CVV *
                                                        </label>
                                                        <Input
                                                            required
                                                            placeholder="123"
                                                            value={formData.cvv}
                                                            onChange={(e) =>
                                                                setFormData({ ...formData, cvv: e.target.value })
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex gap-4">
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        onClick={() => setStep(1)}
                                                        className="flex-1"
                                                    >
                                                        Back
                                                    </Button>
                                                    <Button
                                                        type="button"
                                                        onClick={handleNext}
                                                        className="flex-1 bg-red-600 hover:bg-red-700"
                                                    >
                                                        Review Order
                                                        <ArrowRight className="ml-2 h-5 w-5" />
                                                    </Button>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Step 3: Review */}
                                        {step === 3 && (
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="space-y-6"
                                            >
                                                <h2 className="font-display text-2xl font-bold">
                                                    Review Your Order
                                                </h2>

                                                <div className="space-y-4">
                                                    <div>
                                                        <h3 className="font-semibold mb-2">Shipping To:</h3>
                                                        <p className="text-gray-600">
                                                            {formData.firstName} {formData.lastName}
                                                            <br />
                                                            {formData.address}
                                                            <br />
                                                            {formData.city}, {formData.state} {formData.zip}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <h3 className="font-semibold mb-2">Payment Method:</h3>
                                                        <p className="text-gray-600">
                                                            Card ending in {formData.cardNumber.slice(-4)}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex gap-4">
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        onClick={() => setStep(2)}
                                                        className="flex-1"
                                                    >
                                                        Back
                                                    </Button>
                                                    <Button
                                                        type="submit"
                                                        className="flex-1 bg-green-600 hover:bg-green-700"
                                                        size="lg"
                                                    >
                                                        <CreditCard className="mr-2 h-5 w-5" />
                                                        Place Order
                                                    </Button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <Card className="sticky top-24">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-lg mb-4">Order Summary</h3>

                                    <div className="space-y-4 mb-6">
                                        {items.map((item: { id: number; name: string; price: number; quantity: number }) => (
                                            <div key={item.id} className="flex gap-4">
                                                <div className="h-16 w-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded flex-shrink-0 relative overflow-hidden">
                                                    <Image
                                                        src={`https://nb.scene7.com/is/image/NB/m990gl6_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=64&hei=64`}
                                                        alt={item.name}
                                                        fill
                                                        className="object-contain p-1"
                                                        sizes="64px"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="font-medium text-sm">{item.name}</p>
                                                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                                                </div>
                                                <p className="font-medium">
                                                    {formatPrice(item.price * item.quantity)}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-t pt-4 space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Subtotal</span>
                                            <span>{formatPrice(totalPrice)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Shipping</span>
                                            <span>FREE</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Tax</span>
                                            <span>{formatPrice(totalPrice * 0.08)}</span>
                                        </div>
                                        <div className="flex justify-between font-bold text-lg pt-2 border-t">
                                            <span>Total</span>
                                            <span>{formatPrice(totalPrice * 1.08)}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
