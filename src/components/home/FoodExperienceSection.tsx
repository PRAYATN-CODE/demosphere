"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { outdoor2ImageLink, outdoorImageLink } from "../utils/imageLinks"

export default function FoodExperienceSection() {
    return (
        <section className="relative py-28">
            <div className="mx-auto max-w-7xl px-6 space-y-20">

                {/* HEADER */}
                <div className="max-w-3xl space-y-5">
                    <Badge variant="secondary" className="w-fit">
                        Food & Dining Experience
                    </Badge>

                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                        Wholesome Meals,
                        <span className="block text-primary">
                            Thoughtfully Served
                        </span>
                    </h2>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                        At Damosphere, food is an important part of your stay. Our
                        carefully planned four-meal experience ensures you enjoy fresh,
                        comforting, and hygienic home-style food throughout your visit.
                    </p>
                </div>

                {/* CONTENT GRID */}
                <div className="grid gap-16 lg:grid-cols-2 items-start">

                    {/* LEFT — MEAL CARDS */}
                    <div className="space-y-8">

                        {/* Hi-Tea */}
                        <Card className="rounded-3xl bg-card/70 backdrop-blur-md border-border">
                            <CardContent className="p-8 space-y-3">
                                <h4 className="text-xl font-semibold text-foreground">
                                    Hi-Tea • 5:00 PM
                                </h4>
                                <p className="text-muted-foreground">
                                    Welcome drink, fruit plate, aloo tikki, tea & coffee — the
                                    perfect start to a relaxed evening.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Starters */}
                        <Card className="rounded-3xl bg-card/70 backdrop-blur-md border-border">
                            <CardContent className="p-8 space-y-3">
                                <h4 className="text-xl font-semibold text-foreground">
                                    Starters • 8:00 PM
                                </h4>
                                <p className="text-muted-foreground">
                                    Chicken chilly (non-veg) and paneer chilly (veg), served
                                    fresh and hot to set the mood for dinner.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Dinner */}
                        <Card className="rounded-3xl bg-card/70 backdrop-blur-md border-border">
                            <CardContent className="p-8 space-y-4">
                                <h4 className="text-xl font-semibold text-foreground">
                                    Dinner • 9:30 PM
                                </h4>

                                <div className="text-muted-foreground space-y-2 text-sm">
                                    <p><strong>Vegetarian:</strong> Paneer Kadhai, Gobi Aloo Mutter, Dal, Rice, Wheat Chapati, Salad, Papad & Pickle</p>
                                    <p><strong>Non-Vegetarian:</strong> Murgh Masala, Chicken Curry, Rice, Wheat Chapati, Salad</p>
                                    <p><strong>Dessert:</strong> Gulab Jamun</p>
                                </div>

                                <p className="text-xs text-muted-foreground">
                                    *Chicken & sweets served in limited quantity, rest dinner is unlimited.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Breakfast */}
                        <Card className="rounded-3xl bg-card/70 backdrop-blur-md border-border">
                            <CardContent className="p-8 space-y-3">
                                <h4 className="text-xl font-semibold text-foreground">
                                    Breakfast • 8:30 – 10:00 AM
                                </h4>
                                <p className="text-muted-foreground">
                                    Pohe, Maggie, bread & butter, muffins, cookies, tea & coffee
                                    to start your day fresh.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* RIGHT — FOOD IMAGE + NOTES */}
                    <div className="space-y-8">

                        {/* IMAGE */}
                        <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl">
                            <Image
                                src={outdoor2ImageLink}
                                alt="Homemade food at Damosphere"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 50vw, 100vw"
                            />
                            <div className="absolute inset-0 bg-black/10" />
                        </div>
                        {/* NOTES */}
                        <Card className="rounded-2xl bg-muted/40 border-border">
                            <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
                                <p>• Jain food available on request</p>
                                <p>• Kids-friendly food options available</p>
                                <p>• À la carte menu available</p>
                                <p>• Food inclusions may vary based on package</p>
                            </CardContent>
                        </Card>
                        <div className="relative aspect-video w-full overflow-hidden rounded-3xl">
                            <Image
                                src={outdoorImageLink}
                                alt="Homemade food at Damosphere"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 50vw, 100vw"
                            />
                            <div className="absolute inset-0 bg-black/10" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
