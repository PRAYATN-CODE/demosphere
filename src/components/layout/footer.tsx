import { ThemeToggle } from "../theme/theme-toggle";

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="mx-auto max-w-7xl px-6 py-16 space-y-10">

                {/* TOP GRID */}
                <div className="grid gap-10 md:grid-cols-3">

                    {/* BRAND */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">
                            Damosphere – The Tent Life
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Where hospitality and nature come together for a peaceful,
                            memorable glamping experience near Bhatghar Dam.
                        </p>
                    </div>

                    {/* QUICK LINKS */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Home</li>
                            <li>Packages</li>
                            <li>Gallery</li>
                            <li>Location</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                            Contact
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            Shweta: <a href="tel:+919881994994" className="hover:underline">9881994994</a><br />
                            Nilesh: <a href="tel:+919822334994" className="hover:underline">9822334994</a>
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Beside Bhatghar Dam Wall,<br />
                            Narhe, Bhor, Maharashtra
                        </p>
                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center border-t border-border pt-6 text-sm text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} Damosphere. All rights reserved.
                    </p>

                    <p className="text-xs flex gap-6 items-center justify-center">
                        Crafted with care for nature lovers 🌿
                        <ThemeToggle />
                    </p>
                </div>

            </div>
        </footer>
    )
}
