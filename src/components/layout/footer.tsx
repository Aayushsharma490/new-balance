import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const footerLinks = {
    shop: [
        { name: "Men's Shoes", href: "/products/men" },
        { name: "Women's Shoes", href: "/products/women" },
        { name: "Kids' Shoes", href: "/products/kids" },
        { name: "New Arrivals", href: "/products/new" },
        { name: "Sale", href: "/products/sale" },
    ],
    about: [
        { name: "Our Story", href: "/about" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "Community", href: "/community" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
    ],
    support: [
        { name: "Contact Us", href: "/support/contact" },
        { name: "Shipping & Returns", href: "/support/shipping" },
        { name: "Size Guide", href: "/support/size-guide" },
        { name: "FAQ", href: "/support/faq" },
        { name: "Track Order", href: "/support/track" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/legal/privacy" },
        { name: "Terms of Service", href: "/legal/terms" },
        { name: "Cookie Policy", href: "/legal/cookies" },
    ],
};

const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
];

export function Footer() {
    return (
        <footer className="border-t bg-muted/50">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                    {/* Shop */}
                    <div>
                        <h3 className="text-sm font-semibold leading-6">Shop</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            {footerLinks.shop.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About */}
                    <div>
                        <h3 className="text-sm font-semibold leading-6">About</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            {footerLinks.about.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-sm font-semibold leading-6">Support</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            {footerLinks.support.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-semibold leading-6">Legal</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            {footerLinks.legal.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social links and copyright */}
                <div className="mt-12 border-t pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                        <div className="flex gap-6">
                            {socialLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" />
                                </Link>
                            ))}
                        </div>
                        <p className="text-sm text-muted-foreground">
                            &copy; {new Date().getFullYear()} New Balance. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
