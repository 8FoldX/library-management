"use client"

import React from "react"
import { SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import Search from "./Search"
import Select from "./Select"


function BookFilterSheet({
    search = "",
    setSearch,
    category = "",
    setCategory,
    author = "",
    setAuthor,
}) {

    const categories = [
        {
            value: "programming",
            label: "Programming",
        },
        {
            value: "science",
            label: "Science",
        },
        {
            value: "history",
            label: "History",
        },
        {
            value: "fiction",
            label: "Fiction",
        },
    ]


    const authors = [
        {
            value: "guido",
            label: "Guido van Rossum",
        },
        {
            value: "james",
            label: "James Gosling",
        },
        {
            value: "brendan",
            label: "Brendan Eich",
        },
    ]


    const clearFilters = () => {
        setSearch?.("")
        setCategory?.("")
        setAuthor?.("")
    }


    return (
        <Sheet>

            {/* =========================
                TRIGGER
            ========================== */}
            <SheetTrigger
                type="button"
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border border-input bg-background px-3 sm:px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground md:w-auto"
            >
                <SlidersHorizontal className="h-4 w-4 shrink-0" />

                <span>
                    Search & Filter
                </span>
            </SheetTrigger>


            {/* =========================
                FILTER PANEL
            ========================== */}
            <SheetContent
                side="right"
                className="w-full max-w-none px-4 sm:w-[400px] sm:max-w-[400px] sm:px-6"
            >

                <SheetHeader className="px-0">
                    <SheetTitle>
                        Search & Filter
                    </SheetTitle>
                </SheetHeader>


                <div className="mt-8 space-y-6">

                    {/* =========================
                        SEARCH
                    ========================== */}
                    <div className="space-y-2">

                        <label className="text-sm font-medium">
                            Search
                        </label>

                        <Search
                            value={search}
                            onChange={(e) =>
                                setSearch?.(e.target.value)
                            }
                            placeholder="Search books..."
                        />

                    </div>


                    {/* =========================
                        CATEGORY
                    ========================== */}
                    <Select
                        label="Category"
                        value={category}
                        onChange={(e) =>
                            setCategory?.(e.target.value)
                        }
                        options={categories}
                        placeholder="All Categories"
                    />


                    {/* =========================
                        AUTHOR
                    ========================== */}
                    <Select
                        label="Author"
                        value={author}
                        onChange={(e) =>
                            setAuthor?.(e.target.value)
                        }
                        options={authors}
                        placeholder="All Authors"
                    />


                    {/* =========================
                        CLEAR
                    ========================== */}
                    <Button
                        type="button"
                        variant="outline"
                        className="h-11 w-full"
                        onClick={clearFilters}
                    >
                        Clear Filters
                    </Button>

                </div>

            </SheetContent>

        </Sheet>
    )
}


export default BookFilterSheet