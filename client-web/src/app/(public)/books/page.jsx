"use client";

import React, { useEffect, useState } from "react";
import frappe from "@/lib/api";

const BookCompo = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getBooks = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await frappe.get(
          "/library_management.api.get_books.get_books"
        );

        console.log("📚 Books API Response:", response.data);

        const data = response.data?.message || [];

        setBooks(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("❌ Books API Error:", error);

        setError(
          error.response?.data?.message ||
          error.response?.data?.error ||
          "Failed to load books"
        );
      } finally {
        setLoading(false);
      }
    };

    getBooks();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="text-gray-500">
          Loading books...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-600">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">
          Books
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Browse all available books
        </p>
      </div>

      {books.length === 0 ? (
        <div className="rounded-xl border bg-white p-10 text-center">
          <p className="text-gray-500">
            No books found.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((book) => {
            const imageUrl = book.cover_image
              ? book.cover_image.startsWith("http")
                ? book.cover_image
                : `/api/frappe${book.cover_image}`
              : "/file.svg";

            return (
              <div
                key={book.name}
                className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Book Cover */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={imageUrl}
                    alt={book.book_title || "Book cover"}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = "/file.svg";
                    }}
                  />
                </div>

                {/* Book Information */}
                <div className="p-5">
                  <h2 className="mb-4 line-clamp-2 text-lg font-semibold text-gray-900">
                    {book.book_title || "Untitled Book"}
                  </h2>

                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-900">
                        Author:
                      </span>

                      <span className="text-gray-600">
                        {book.author || "N/A"}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <span className="font-medium text-gray-900">
                        Category:
                      </span>

                      <span className="text-gray-600">
                        {book.category || "N/A"}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <span className="font-medium text-gray-900">
                        ISBN:
                      </span>

                      <span className="break-all text-gray-600">
                        {book.isbn || "N/A"}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <span className="font-medium text-gray-900">
                        Edition:
                      </span>

                      <span className="text-gray-600">
                        {book.edition || "N/A"}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <span className="font-medium text-gray-900">
                        Publisher:
                      </span>

                      <span className="text-gray-600">
                        {book.publisher || "N/A"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BookCompo;