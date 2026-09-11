"use client";

import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Save, RotateCcw, Loader2 } from "lucide-react";

import frappe, { API_PATHS } from "@/lib/api";

import {
  CoverImage,
  BookTitle,
  ISBN,
  Edition,
  SelectField,
} from "@/components/pages/Dashboard";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const EditBook = ({ name }) => {
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const initialFormData = {
    name: "",
    book_title: "",
    isbn: "",
    edition: "",
    cover_image: null,
    author: "",
    category: "",
    publisher: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  // ===============================
  // GET SINGLE BOOK
  // ===============================

  const getBook = async () => {
    try {
      setLoading(true);

      console.log("Getting book:", name);

      const response = await frappe.get(
        API_PATHS.BOOKS.GET_SINGLE,
        {
          params: {
            book_title: decodeURIComponent(name),
          },
        }
      );

      console.log("Book API Response:", response.data);

      const book = response.data?.message;

      if (!book) {
        toast.error("Book not found");
        return;
      }

      setFormData({
        name: book.name || "",
        book_title: book.book_title || "",
        isbn: book.isbn || "",
        edition: book.edition || "",
        cover_image: book.cover_image || null,
        author: book.author || "",
        category: book.category || "",
        publisher: book.publisher || "",
      });

    } catch (error) {
      console.error("Failed to load book:", error);

      toast.error(
        error?.response?.data?.message ||
          "Failed to load book"
      );

    } finally {
      // IMPORTANT
      setLoading(false);
    }
  };

  useEffect(() => {
    if (name) {
      getBook();
    }
  }, [name]);

  // ===============================
  // HANDLE INPUT CHANGE
  // ===============================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ===============================
  // UPDATE BOOK
  // ===============================

  const handleUpdate = async () => {
    try {
      setUpdating(true);

      const payload = new URLSearchParams();

      payload.append("name", formData.name);
      payload.append("book_title", formData.book_title);
      payload.append("author", formData.author);
      payload.append("category", formData.category);
      payload.append("edition", formData.edition);
      payload.append("isbn", formData.isbn);
      payload.append("publisher", formData.publisher);

      if (formData.cover_image) {
        payload.append(
          "cover_image",
          formData.cover_image
        );
      }

      console.log(
        "Updating book:",
        Object.fromEntries(payload)
      );

      const response = await frappe.post(
        API_PATHS.BOOKS.UPDATE,
        payload
      );

      console.log(
        "Update response:",
        response.data
      );

      toast.success("Book updated successfully!");

    } catch (error) {
      console.error("Update failed:", error);

      toast.error(
        error?.response?.data?.message ||
          "Failed to update book"
      );

    } finally {
      setUpdating(false);
    }
  };

  // ===============================
  // RESET
  // ===============================

  const handleReset = () => {
    getBook();

    toast.info("Changes reset");
  };

  // ===============================
  // LOADING
  // ===============================

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-3">

          <Loader2 className="h-8 w-8 animate-spin" />

          <p className="text-sm text-muted-foreground">
            Loading book...
          </p>

        </div>
      </div>
    );
  }

  // ===============================
  // UI
  // ===============================

  return (
    <div className="mx-auto max-w-6xl p-4 sm:p-6">

      <Card>

        <CardHeader>
          <CardTitle>
            Edit Book
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-8">

          {/* TOP SECTION */}

          <div className="grid gap-8 lg:grid-cols-2">

            {/* COVER IMAGE */}

            <CoverImage
              value={formData.cover_image}
              onChange={(file) =>
                setFormData((prev) => ({
                  ...prev,
                  cover_image: file,
                }))
              }
            />

            {/* BOOK DETAILS */}

            <div className="space-y-6">

              <BookTitle
                value={formData.book_title}
                onChange={handleChange}
              />

              <div className="grid gap-6 sm:grid-cols-2">

                <ISBN
                  value={formData.isbn}
                  onChange={handleChange}
                />

                <Edition
                  value={formData.edition}
                  onChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      edition: value,
                    }))
                  }
                />

              </div>

            </div>

          </div>

          {/* AUTHOR CATEGORY PUBLISHER */}

          <div className="grid gap-6 md:grid-cols-3">

            <SelectField
              apiPath={API_PATHS.AUTHORS.GET}
              value={formData.author}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  author: e.target.value,
                }))
              }
              placeholder="Select Author"
              valueKey="book_author"
              labelKey="book_author"
            />

            <SelectField
              apiPath={API_PATHS.CATEGORIES.GET}
              value={formData.category}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  category: e.target.value,
                }))
              }
              placeholder="Select Category"
              valueKey="category"
              labelKey="category"
            />

            <SelectField
              apiPath={API_PATHS.PUBLISHERS.GET}
              value={formData.publisher}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  publisher: e.target.value,
                }))
              }
              placeholder="Select Publisher"
              valueKey="publisher_name"
              labelKey="publisher_name"
            />

          </div>

          {/* ACTIONS */}

          <div className="flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:justify-end">

            <Button
              variant="outline"
              onClick={handleReset}
              disabled={updating}
            >
              <RotateCcw className="mr-2 h-4 w-4" />

              Reset
            </Button>

            <Button
              onClick={handleUpdate}
              disabled={updating}
            >
              {updating ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Save className="mr-2 h-4 w-4" />
              )}

              {updating
                ? "Updating..."
                : "Update Book"}
            </Button>

          </div>

        </CardContent>

      </Card>

    </div>
  );
};

export default EditBook;