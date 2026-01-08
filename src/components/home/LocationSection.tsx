"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation } from "lucide-react"
import { Meteors } from "../ui/meteors"

export default function LocationSection() {
    return (
        <section id="location" className="relative py-28">
            <Meteors number={25} angle={205} className="hidden md:block" />
            <div className="mx-auto max-w-7xl px-6 space-y-16">

                {/* HEADER */}
                <div className="max-w-3xl space-y-5">
                    <Badge variant="secondary" className="w-fit">
                        Location
                    </Badge>

                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                        Easy to Reach,
                        <span className="block text-primary">
                            Hard to Leave
                        </span>
                    </h2>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Damosphere is located beside the serene Bhatghar Dam in Bhor,
                        Maharashtra — just a short drive from Pune. Surrounded by nature,
                        yet easily accessible for a peaceful getaway.
                    </p>
                </div>

                {/* CONTENT GRID */}
                <div className="grid gap-12 lg:grid-cols-2 items-start">

                    {/* LEFT — ADDRESS & CTA */}
                    <div className="space-y-8">

                        <div className="flex items-start gap-4">
                            <MapPin className="h-6 w-6 text-primary mt-1" />
                            <div>
                                <p className="font-medium text-foreground">
                                    Damosphere – The Tent Life
                                </p>
                                <p className="text-muted-foreground">
                                    Beside Bhatghar Dam Wall,<br />
                                    Narhe, Bhor,<br />
                                    Maharashtra, India
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="rounded-xl" asChild>
                                <a
                                    href="https://goo.gl/maps/sqaEqmg6AH9mavSg7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Navigation className="mr-2 h-4 w-4" />
                                    Open in Google Maps
                                </a>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="rounded-xl"
                                asChild
                            >
                                <a href="tel:+919881994994">
                                    Call for Directions
                                </a>
                            </Button>
                        </div>

                        <p className="text-sm text-muted-foreground">
                            Approx. 45–60 minutes drive from Pune • Best accessed by car
                        </p>
                    </div>

                    {/* RIGHT — GOOGLE MAP */}
                    <div className="relative w-full h-95 rounded-3xl overflow-hidden border border-border">
                        <iframe
                            title="Damosphere Location"
                            src="https://www.google.com/maps?q=Bhatghar%20Dam%20Bhor%20Maharashtra&output=embed"
                            className="w-full h-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
