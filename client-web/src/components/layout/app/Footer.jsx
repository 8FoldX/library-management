import React from "react";
import Link from "next/link";

import footerLinks from "@/data/app/footerLinks";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

function Footer() {
    return (
        <footer className=" bg-background text-muted-foreground">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Separator />

                <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
                    {/* Copyright */}
                    <p className="text-center text-sm md:text-left">
                        © {new Date().getFullYear()} Library Management System.
                        All rights reserved.
                    </p>

                    {/* Links */}
                    <nav className="flex flex-wrap items-center justify-center gap-1">
                        {footerLinks.map((link) => (
                            <Button
                                key={link.href}
                                variant="ghost"
                                size="sm"
                            >
                                <Link href={link.href}>
                                    {link.name}
                                </Link>
                            </Button>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;