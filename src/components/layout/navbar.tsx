"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"

const navItems = [
    { label: "Home", href: "#home" },
    { label: "Packages", href: "#packages" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
]

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
            <div
                className={cn(
                    "flex h-16 items-center justify-between",
                    "transition-all duration-300 md:duration-1000 ease-in-out",
                    "rounded-2xl w-full",
                    scrolled
                        ? "max-w-[95%] md:max-w-[60%] bg-background/90 md:backdrop-blur-md border border-border md:shadow-md px-6 mt-4"
                        : "max-w-7xl bg-transparent px-6"
                )}
            >
                {/* LOGO */}
                <Link href="#home" className="text-lg font-semibold tracking-tight">
                    Damosphere<span className="text-primary">.</span>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="hover:text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* ACTIONS */}
                <div className="flex items-center gap-3">
                    <AnimatedThemeToggler className="w-4 h-4 mr-4" duration={1500} />

                    {/* DESKTOP CTA */}
                    <Button asChild size="sm" className="rounded-xl">
                        <Link href="/packages">
                            Book Now
                        </Link>
                    </Button>


                    {/* MOBILE MENU */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <button className="md:hidden p-2 rounded-lg hover:bg-muted transition">
                                <Menu className="w-5 h-5" />
                            </button>
                        </SheetTrigger>

                        <SheetContent side="right" className="pt-20">
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                                <SheetDescription>Navigate through sections</SheetDescription>
                            </SheetHeader>

                            <nav className="flex flex-col gap-6 text-lg px-6">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="hover:text-primary transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                ))}

                                <Button
                                    className="rounded-xl mt-4"
                                    onClick={() => setOpen(false)}
                                >
                                    <Link href="/packages">
                                        Book Now
                                    </Link>
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
