"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PackagesSection() {
    return (
        <section id="packages" className="relative py-28">
            <div className="mx-auto max-w-7xl px-6 space-y-20">

                {/* HEADER */}
                <div className="max-w-full space-y-5">
                    <Badge variant="secondary" className="w-fit">
                        Packages & Pricing
                    </Badge>

                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                        Damosphere
                        <span className="block text-primary">Premium Stay Package</span>
                    </h2>

                    <p className="text-muted-foreground text-lg">
                        Enjoy a complete glamping experience with comfortable stay and
                        thoughtfully curated meals.
                    </p>
                </div>

                {/* PACKAGE CARD */}
                <Card className="rounded-3xl w-full bg-card/80 backdrop-blur-md border-border shadow-md">
                    <CardContent className="p-8 space-y-8">

                        {/* PRICING */}
                        <div className="space-y-3">
                            <h3 className="text-2xl font-semibold">Pricing</h3>

                            <p className="flex items-center gap-2 text-muted-foreground">
                                <Check className="h-4 w-4 text-primary" />
                                Couple (Non-AC): <strong>₹5,500</strong>
                            </p>

                            <p className="flex items-center gap-2 text-muted-foreground">
                                <Check className="h-4 w-4 text-primary" />
                                Group (Non-AC): <strong>₹2,500 per person</strong>
                            </p>
                        </div>

                        {/* STAY & MEALS */}
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <p>✔ Stay included</p>
                            <p>✔ 4 meals included</p>
                        </div>

                        {/* MEAL DETAILS */}
                        <div className="space-y-6">
                            <h4 className="text-xl font-semibold">Meal Plan</h4>

                            {/* HI-TEA */}
                            <div>
                                <p className="font-medium">1️⃣ Hi-Tea (5:00 PM)</p>
                                <p className="text-sm text-muted-foreground">
                                    Welcome Drink, Pakoda, Aloo Tikki, Tea & Coffee
                                </p>
                            </div>

                            {/* STARTERS */}
                            <div>
                                <p className="font-medium">2️⃣ Starters (8:00 PM)</p>
                                <p className="text-sm text-muted-foreground">
                                    • Chicken Chilly (Non-Veg)
                                    <br />• Paneer Chilly (Veg)
                                    <br />(250 gms per person)
                                </p>
                            </div>

                            {/* DINNER */}
                            <div>
                                <p className="font-medium">3️⃣ Dinner (9:30 PM)</p>

                                <div className="text-sm text-muted-foreground mt-2">
                                    <p className="font-medium">Vegetarian</p>
                                    <p>
                                        Paneer Kadhai, Gobi Aloo Mutter, Dal, Rice, Wheat Chapati,
                                        Salad, Papad & Pickle
                                    </p>

                                    <p className="font-medium mt-2">Non-Vegetarian</p>
                                    <p>
                                        Murgh Masala, Chicken Curry, Rice, Wheat Chapati, Salad
                                    </p>

                                    <p className="mt-2">
                                        Desserts: <strong>Gulab Jamun</strong>
                                    </p>

                                    <p className="italic mt-1">
                                        *Chicken & sweets are limited but sufficient. Other items
                                        are unlimited.*
                                    </p>
                                </div>
                            </div>

                            {/* BREAKFAST */}
                            <div>
                                <p className="font-medium">4️⃣ Breakfast (8:30 AM)</p>
                                <p className="text-sm text-muted-foreground">
                                    Pohe, Maggie, Bread Omelette, Muffins & Cookies, Tea/Coffee
                                </p>
                            </div>
                        </div>

                        {/* NOTES */}
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <p>📌 Jain food available on request</p>
                            <p>📌 À la carte menu available</p>
                            <p>📌 Kids menu available</p>
                            <p>📌 Meals depend on selected package</p>
                        </div>

                        {/* CONTACT */}
                        <div className="space-y-2 text-sm">
                            <p><strong>Contact Us</strong></p>
                            <p>Shweta: 9881994994</p>
                            <p>Nilesh: 9021501234</p>
                        </div>
                    </CardContent>
                </Card>

                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="rounded-xl">
                        Call for Booking
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-xl"
                        asChild
                    >
                        <a href="https://wa.me/919881994994" target="_blank">
                            WhatsApp Inquiry
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
