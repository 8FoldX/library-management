"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import {
  BookOpen,
  RefreshCw,
  User,
  Tag,
  Building2,
  ImageOff,
  Pencil,
  RotateCw,
} from "lucide-react";

import frappe, { API_PATHS } from "@/lib/api";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const UpdateBookCard = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [brokenImages, setBrokenImages] = useState({});

  const getImageUrl = (image) => {
    if (!image) return null;

    if (image.startsWith("http")) {
      return image;
    }

    const frappeUrl =
      process.env.NEXT_PUBLIC_FRAPPE_URL ||
      "http://library.localhost:8000";

    return `${frappeUrl}${image}`;
  };

  const getBooks = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const response = await frappe.get(API_PATHS.BOOKS.GET);

      setBooks(response.data?.message || []);
    } catch (error) {
      console.error("Failed to load books:", error);
      setBooks([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-muted">
            <RefreshCw className="h-5 w-5 animate-spin text-muted-foreground" />
          </div>

          <div className="text-center">
            <p className="font-medium">Loading books</p>

            <p className="text-sm text-muted-foreground">
              Fetching your library collection...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!books.length) {
    return (
      <Card className="border-dashed">
        <CardContent className="flex min-h-[400px] flex-col items-center justify-center p-6 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <BookOpen className="h-7 w-7 text-muted-foreground" />
          </div>

          <h3 className="text-lg font-semibold">
            No books found
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Add books to your library to manage them here.
          </p>

          <Button
            variant="outline"
            className="mt-5"
            onClick={() => getBooks(true)}
            disabled={refreshing}
          >
            <RotateCw
              className={`mr-2 h-4 w-4 ${
                refreshing ? "animate-spin" : ""
              }`}
            />

            Refresh Books
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            Update Books
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Manage and update your library collection.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Badge variant="secondary">
            {books.length} {books.length === 1 ? "Book" : "Books"}
          </Badge>

          <Button
            variant="outline"
            size="sm"
            onClick={() => getBooks(true)}
            disabled={refreshing}
          >
            <RefreshCw
              className={`mr-2 h-4 w-4 ${
                refreshing ? "animate-spin" : ""
              }`}
            />

            Refresh
          </Button>
        </div>
      </div>

      {/* Books Grid */}

      <div
        className="
          grid
          grid-cols-2
          gap-4
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-4
          xl:grid-cols-4
          2xl:grid-cols-4
        "
      >
        {books.map((book) => {
          const imageUrl = getImageUrl(book.cover_image);
          const imageBroken = brokenImages[book.name];

          return (
            <Card
              key={book.name}
              className="
                group
                flex
                min-w-0
                flex-col
                overflow-hidden
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              {/* Cover Image */}

              <div className="relative aspect-[16/14] overflow-hidden bg-muted">
                {imageUrl && !imageBroken ? (
                  <img
                    src={imageUrl}
                    alt={book.book_title || "Book cover"}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                    onError={() => {
                      setBrokenImages((prev) => ({
                        ...prev,
                        [book.name]: true,
                      }));
                    }}
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground">
                    <ImageOff className="h-8 w-8" />

                    <span className="px-2 text-center text-xs">
                      No cover
                    </span>
                  </div>
                )}

                {/* Edition */}

                {book.edition && (
                  <Badge
                    variant="secondary"
                    className="absolute left-2 top-2 max-w-[calc(100%-1rem)] truncate text-[10px]"
                  >
                    {book.edition}
                  </Badge>
                )}

                {/* Hover Edit Button */}

                <div
                  className="
                    absolute
                    inset-0
                    hidden
                    items-center
                    justify-center
                    bg-black/40
                    opacity-0
                    transition-opacity
                    duration-300
                    sm:flex
                    group-hover:opacity-100
                  "
                >
                  <Link
                    href={`/dashboard/books/edit-book/${encodeURIComponent(
                      book.name
                    )}`}
                  >
                    <Button size="sm" variant="secondary">
                      <Pencil className="mr-2 h-4 w-4" />

                      Edit
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Book Information */}

              <CardHeader className="space-y-1">
                <CardTitle className="line-clamp-1 text-sm font-semibold">
                  {book.book_title}
                </CardTitle>
              </CardHeader>

              {/* Details */}

              <CardContent className="flex-1 space-y-2 px-3 pb-3 text-xs">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User className="h-3.5 w-3.5 shrink-0" />

                  <span className="truncate">
                    {book.author || "Unknown Author"}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <Tag className="h-3.5 w-3.5 shrink-0" />

                  <span className="truncate">
                    {book.category || "No Category"}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building2 className="h-3.5 w-3.5 shrink-0" />

                  <span className="truncate">
                    {book.publisher || "No Publisher"}
                  </span>
                </div>
              </CardContent>

              {/* Update Action */}

              <CardFooter className="border-t bg-muted/20 p-3">
                <Link
                  href={`/dashboard/books/edit-book/${encodeURIComponent(
                    book.name
                  )}`}
                  className="w-full"
                >
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full text-xs"
                  >
                    <Pencil className="mr-2 h-3.5 w-3.5" />

                    Update Book
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default UpdateBookCard;