"use client";

import React, { useEffect, useState } from "react";

import {
  BookOpen,
  User,
  Layers3,
  Building2,
  AlertCircle,
} from "lucide-react";

import frappe, { API_PATHS } from "@/lib/api";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Skeleton } from "@/components/ui/skeleton";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";


const PublicPageCompo = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getBooks = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await frappe.get(
          API_PATHS.BOOKS.GET
        );

        console.log("📚 Books API Response:", response.data);

        const data = response.data?.message || [];

        setBooks(Array.isArray(data) ? data : []);

      } catch (error) {
        console.error("Books API Error:", error);

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


  /* =========================
     LOADING STATE
  ========================== */

  if (loading) {
    return (
      <section className="w-full py-4">

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {[...Array(8)].map((_, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-xl p-0"
            >

              {/* Image Skeleton */}
              <Skeleton className="h-56 w-full rounded-none sm:h-60" />

              {/* Content Skeleton */}
              <CardContent className="space-y-4 p-5">

                <Skeleton className="h-6 w-3/4" />

                <Skeleton className="h-4 w-1/2" />

                <Skeleton className="h-4 w-full" />

                <Skeleton className="h-4 w-2/3" />

              </CardContent>

            </Card>
          ))}
        </div>

      </section>
    );
  }


  if (error) {
    return (
      <div className="flex min-h-[350px] items-center justify-center p-4">

        <Alert
          variant="destructive"
          className="w-full max-w-xl"
        >
          <AlertCircle className="h-5 w-5" />

          <AlertTitle>
            Unable to Load Books
          </AlertTitle>

          <AlertDescription>
            {error}
          </AlertDescription>

        </Alert>

      </div>
    );
  }

  if (books.length === 0) {
    return (
      <section className="flex min-h-[400px] items-center justify-center py-10">

        <Card className="w-full max-w-lg">

          <CardHeader className="items-center text-center">

            <div
              className="
                mb-3
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-muted
              "
            >
              <BookOpen className="h-8 w-8 text-muted-foreground" />
            </div>

            <CardTitle>
              No Books Found
            </CardTitle>

          </CardHeader>


          <CardContent className="text-center">

            <p className="text-sm text-muted-foreground">
              There are currently no books available in the library.
            </p>

          </CardContent>

        </Card>

      </section>
    );
  }


  /* =========================
     BOOK LIST
  ========================== */

  return (
    <section className="w-full py-6 sm:py-10">


      {/* =========================
          SECTION HEADER
      ========================== */}

      <div
        className="
          mb-10
          flex
          flex-col
          justify-between
          gap-4
          sm:flex-row
          sm:items-center
        "
      >

        <div>
          <Badge
            variant="secondary"
            className="mb-2"
          >
            <BookOpen className="mr-2 h-3.5 w-3.5" />
            Available Books
          </Badge>

        </div>


        {/* Book Count */}

        <Badge
          variant="outline"
          className="w-fit px-4 py-4 text-sm"
        >
          {books.length}{" "}
          {books.length === 1 ? "Book" : "Books"}
        </Badge>

      </div>


      {/* =========================
          BOOK GRID
      ========================== */}

      <div
        className="
          grid
          grid-cols-1
          gap-5
          sm:grid-cols-2
          md:gap-6
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >

        {books.map((book) => {

          /* =========================
             IMAGE URL
          ========================== */

          const imageUrl = book.cover_image
            ? book.cover_image.startsWith("http")
              ? book.cover_image
              : `/api/frappe${book.cover_image}`
            : "/file.svg";


          /* =========================
             CATEGORY
          ========================== */

          const category =
            book.category ||
            book.catagory ||
            "Uncategorized";


          return (

            <Card
              key={book.name}
              className="
                group
                overflow-hidden
                rounded-xl
                p-0
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >

              <div
                className="
                  relative
                  h-56
                  w-full
                  overflow-hidden
                  bg-muted
                  sm:h-60
                "
              >

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

                  loading="lazy"

                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = "/file.svg";
                  }}
                />


                {/* Category Badge */}

                <Badge
                  variant="secondary"

                  className="
                  bg-green-50
                    absolute
                    left-3
                    top-3
                    shadow-sm
                    backdrop-blur-sm
                  "
                >
                  {category}
                </Badge>

              </div>


              {/* =========================
                  BOOK HEADER
              ========================== */}

              <CardHeader
                className="
                  px-5
                  pb-0
                  pt-2
                "
              >

                {/* Book Title */}

                <CardTitle
                  className="
                  line-clamp-2
                  text-lg
                  leading-snug
                  sm:text-xl
                  "
                >
                  {book.book_title || "Untitled Book"}
                </CardTitle>


                {/* Author */}

                <div
                  className="
                    mt-4
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-muted-foreground
                  "
                >

                  <User className="h-4 w-4 shrink-0" />

                  <span className="truncate">
                    {book.author || "Unknown Author"}
                  </span>

                </div>



              </CardHeader>


              {/* =========================
                  BOOK DETAILS
              ========================== */}

              <CardContent
                className="
                  px-5
                  pb-5
                
                "
              >

                <div className="space-y-3 text-sm">


                  {/* Edition */}

                  <div className="flex items-center gap-2">

                    <Layers3 className="h-4 w-4 shrink-0 text-muted-foreground" />

                    <span className="text-muted-foreground">
                      Edition
                    </span>

                    <span className="ml-auto max-w-[55%] truncate font-medium">
                      {book.edition || "N/A"}
                    </span>

                  </div>


                  {/* Publisher */}

                  <div className="flex items-center gap-2">

                    <Building2 className="h-4 w-4 shrink-0 text-muted-foreground" />

                    <span className="text-muted-foreground">
                      Publisher
                    </span>

                    <span className="ml-auto max-w-[55%] truncate text-right font-medium">
                      {book.publisher || "N/A"}
                    </span>

                  </div>


                </div>

              </CardContent>

            </Card>
          );
        })}

      </div>

    </section>
  );
};


export default PublicPageCompo;