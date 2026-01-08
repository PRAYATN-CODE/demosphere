"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Particles } from "../ui/particles";
import ContactFooterSection from "./ContactFooterSection";
import ExperiencesSection from "./ExperiencesSection";
import FoodExperienceSection from "./FoodExperienceSection";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import LocationSection from "./LocationSection";
import PackagesSection from "./PackagesSection";
import ReviewsSection from "./ReviewsSection";
import WhyDamosphereSection from "./why-damosphere";

export default function HomePage() {

    const { resolvedTheme } = useTheme()
    const [color, setColor] = useState("#ffffff")

    useEffect(() => {
        setColor(resolvedTheme === "dark" ? "#ffffff" : "#FF7A18")
    }, [resolvedTheme])

    return (
        <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-x-hidden bg-background">
            <HeroSection />
            <div className="hidden md:block absolute inset-0 z-0">
                <Particles
                    className="absolute inset-0 z-0"
                    quantity={200}
                    ease={60}
                    color={color}
                    refresh
                />
            </div>
            <WhyDamosphereSection />
            <ExperiencesSection />
            <PackagesSection />
            <FoodExperienceSection />
            <GallerySection />
            <LocationSection />
            <ContactFooterSection />
            <ReviewsSection />
        </main>
    );
}