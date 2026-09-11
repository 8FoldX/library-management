"use client"

import React from "react"

import {
    Select as ShadcnSelect,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


function Select({
    label,
    value,
    onChange,
    options = [],
    placeholder = "Select an option",
    className = "",
}) {
    return (
        <div className={`flex w-full flex-col gap-2 ${className}`}>

            {label && (
                <label className="text-sm font-medium text-foreground">
                    {label}
                </label>
            )}

            <ShadcnSelect
                value={value || undefined}
                onValueChange={(newValue) => {
                    onChange({
                        target: {
                            value: newValue,
                        },
                    })
                }}
            >

                <SelectTrigger className="h-11 w-full">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>

                <SelectContent>

                    {options.map((option) => (
                        <SelectItem
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </SelectItem>
                    ))}

                </SelectContent>

            </ShadcnSelect>

        </div>
    )
}

export default Select