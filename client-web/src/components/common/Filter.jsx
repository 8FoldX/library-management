"use client"

import React from "react"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"


function Filter({
    title = "Search & Filter",
    description,
    children,
    onClear,
    className = "",
}) {
    return (
        <Card className={`w-full ${className}`}>

            <CardHeader>

                <CardTitle>
                    {title}
                </CardTitle>

                {description && (
                    <CardDescription>
                        {description}
                    </CardDescription>
                )}

            </CardHeader>


            <CardContent>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {children}
                </div>


                {onClear && (
                    <div className="mt-5 flex justify-end">

                        <Button
                            type="button"
                            variant="outline"
                            onClick={onClear}
                        >
                            Clear Filters
                        </Button>

                    </div>
                )}

            </CardContent>

        </Card>
    )
}

export default Filter