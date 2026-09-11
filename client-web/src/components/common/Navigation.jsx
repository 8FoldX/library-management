"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import navLinks from "@/data/app/navLinks"


function Navigation() {

    const pathname = usePathname()


    return (
        <nav className="flex flex-col gap-1 md:flex-row md:items-center md:gap-2">

            {navLinks.map((link) => {

                const isActive =
                    pathname === link.href ||
                    (
                        link.href !== "/" &&
                        pathname.startsWith(`${link.href}/`)
                    )


                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`
                            rounded-md
                            px-3
                            py-2
                            text-sm
                            font-medium
                            transition

                            ${
                                isActive
                                    ? "bg-blue-50 text-blue-600"
                                    : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                            }
                        `}
                    >
                        {link.name}
                    </Link>
                )
            })}

        </nav>
    )
}


export default Navigation