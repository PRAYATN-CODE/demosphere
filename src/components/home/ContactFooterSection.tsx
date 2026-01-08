"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    MapPin,
    MessageCircle,
    Phone,
} from "lucide-react"

export default function ContactFooterSection() {
    return (
        <section id="contact" className="relative border-t border-border">
            <div className="mx-auto max-w-7xl px-6 py-24 space-y-20">

                {/* CONTACT HEADER */}
                <div className="max-w-3xl space-y-5">
                    <Badge variant="secondary" className="w-fit">
                        Contact & Booking
                    </Badge>

                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                        Let’s Plan Your
                        <span className="block text-primary">
                            Stay at Damosphere
                        </span>
                    </h2>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Whether you’re planning a peaceful getaway, a family outing,
                        or a special celebration, we’re here to help you create the
                        perfect experience.
                    </p>
                </div>

                {/* CONTACT DETAILS */}
                <div className="grid gap-12 lg:grid-cols-2 items-start">

                    {/* LEFT — CONTACT INFO */}
                    <div className="space-y-8">

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <Phone className="h-6 w-6 text-primary mt-1" />
                            <div>
                                <p className="font-medium text-foreground">
                                    Call Us Directly
                                </p>
                                <p className="text-muted-foreground">
                                    Shweta: <a href="tel:+919881994994" className="hover:underline">9881994994</a><br />
                                    Nilesh: <a href="tel:+919822334994" className="hover:underline">9822334994</a>
                                </p>
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div className="flex items-start gap-4">
                            <MessageCircle className="h-6 w-6 text-primary mt-1" />
                            <div>
                                <p className="font-medium text-foreground">
                                    WhatsApp Inquiry
                                </p>
                                <p className="text-muted-foreground">
                                    Quick responses for availability, pricing & special requests
                                </p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-4">
                            <MapPin className="h-6 w-6 text-primary mt-1" />
                            <div>
                                <p className="font-medium text-foreground">
                                    Location
                                </p>
                                <p className="text-muted-foreground">
                                    Beside Bhatghar Dam Wall,<br />
                                    Narhe, Bhor, Maharashtra
                                </p>
                            </div>
                        </div>

                        {/* CTA BUTTONS */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button size="lg" className="rounded-xl" asChild>
                                <a href="tel:+919881994994">
                                    Call Now
                                </a>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="rounded-xl"
                                asChild
                            >
                                <a
                                    href="https://wa.me/919881994994"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WhatsApp Us
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* RIGHT — TRUST MESSAGE */}
                    <div className="rounded-3xl bg-muted/40 border border-border p-8 space-y-4">
                        <h4 className="text-xl font-semibold text-foreground">
                            Personalized Hospitality
                        </h4>
                        <p className="text-muted-foreground">
                            Damosphere is owned and managed by Shweta and Nilesh, who bring
                            over 15 years of hospitality experience. Every guest is welcomed
                            personally, ensuring comfort, care, and attention to detail
                            throughout the stay.
                        </p>

                        <p className="text-sm text-muted-foreground">
                            • Ideal for couples, families & groups<br />
                            • Birthday & anniversary celebrations available<br />
                            • Jain food & kids menu on request
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
