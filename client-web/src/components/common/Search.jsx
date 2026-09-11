"use client"

import React from "react"
import { Search as SearchIcon, X } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


function Search({
    value = "",
    onChange,
    placeholder = "Search...",
    className = "",
}) {
    return (
        <div className={`relative w-full ${className}`}>

            <SearchIcon
                className="absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            />

            <Input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="h-11 pl-9 pr-10"
            />

            {value && (
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                        onChange({
                            target: {
                                value: "",
                            },
                        })
                    }
                    className="absolute right-1 top-1/2 h-9 w-9 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                    <X className="h-4 w-4" />

                    <span className="sr-only">
                        Clear search
                    </span>
                </Button>
            )}

        </div>
    )
}

export default Search