"use client"

import React from "react"

import {
    Search,
    Select,
    Filter,
} from "@/components/common"


function BookFilter({
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
        setSearch("")
        setCategory("")
        setAuthor("")
    }


    return (
        <Filter
            title="Search & Filter"
            description="Find books by title, category, or author."
            onClear={clearFilters}
        >

            {/* Search */}

            <div className="flex flex-col gap-2">

                <label className="text-sm font-medium">
                    Search
                </label>

                <Search
                    value={search}
                    onChange={(event) => {
                        setSearch(event.target.value)
                    }}
                    placeholder="Search books..."
                />

            </div>


            {/* Category */}

            <Select
                label="Category"
                value={category}
                onChange={(event) => {
                    setCategory(event.target.value)
                }}
                options={categories}
                placeholder="All Categories"
            />


            {/* Author */}

            <Select
                label="Author"
                value={author}
                onChange={(event) => {
                    setAuthor(event.target.value)
                }}
                options={authors}
                placeholder="All Authors"
            />

        </Filter>
    )
}


export default BookFilter