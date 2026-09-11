"use client";

import React from "react";

const CategoryCard = ({ category }) => {
    const categoryName =
        category.Category ||
        category.category ||
        category.name ||
        "Unnamed Category";

    const image =
        category.Image ||
        category.image ||
        category.image_url ||
        "";

    const frappeUrl =
        process.env.NEXT_PUBLIC_FRAPPE_URL || "";

    const imageUrl = image
        ? image.startsWith("http")
            ? image
            : frappeUrl + image
        : "";

    console.log("Category:", categoryName);
    console.log("Image:", image);
    console.log("Image URL:", imageUrl);

    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            {/* Image */}
            <div className="flex h-44 w-full items-center justify-center overflow-hidden bg-blue-50">

                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={categoryName}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        onError={(e) => {
                            console.error(
                                "Image failed:",
                                imageUrl
                            );

                            e.currentTarget.style.display = "none";
                        }}
                    />
                ) : (
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-4xl">
                        📚
                    </div>
                )}

            </div>

            {/* Content */}
            <div className="p-6">

                <h2 className="text-xl font-semibold text-gray-900">
                    {categoryName}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    Explore books in the {categoryName} category.
                </p>

                <button
                    type="button"
                    className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                    View Books
                </button>

            </div>

        </div>
    );
};

export default CategoryCard;