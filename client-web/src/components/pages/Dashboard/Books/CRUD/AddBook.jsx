"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import {
  User,
  Tag,
  Building2,
  RotateCcw,
  Plus,
  Loader2,
} from "lucide-react";

import {
  SelectField,
  CoverImage,
  BookTitle,
  ISBN,
  Edition,
  EditBook
} from "@/components/pages/Dashboard";

import { API_PATHS } from "@/lib/api";
import frappe from "@/lib/api";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";

const AddBook = () => {
  const initialFormData = {
    book_title: "",
    isbn: "",
    edition: "",
    cover_image: null,
    author: "",
    category: "",
    publisher: "",
  };

  const [formData, setFormData] =
    useState(initialFormData);

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFormData(initialFormData);

    toast.info("Form has been reset");
  };

  const handleSubmit = async () => {
    /* =========================
       VALIDATION
    ========================= */

    if (!formData.cover_image) {
      toast.error("Please upload a cover image");
      return;
    }

    if (!formData.book_title.trim()) {
      toast.error("Please enter the book title");
      return;
    }

    if (!formData.isbn.trim()) {
      toast.error("Please enter the ISBN");
      return;
    }

    if (!formData.edition) {
      toast.error("Please select an edition");
      return;
    }

    if (!formData.author) {
      toast.error("Please select an author");
      return;
    }

    if (!formData.category) {
      toast.error("Please select a category");
      return;
    }

    if (!formData.publisher) {
      toast.error("Please select a publisher");
      return;
    }

    try {
      setLoading(true);

      let coverImageUrl = "";

      /* =========================
         UPLOAD IMAGE TO FRAPPE
      ========================= */

      if (formData.cover_image instanceof File) {
        const uploadData = new FormData();

        uploadData.append(
          "file",
          formData.cover_image
        );

        uploadData.append(
          "is_private",
          "0"
        );

        const uploadResponse =
          await frappe.post(
            "/api/method/upload_file",
            uploadData,
            {
              headers: {
                "Content-Type":
                  "multipart/form-data",
              },
            }
          );

        console.log(
          "Upload Response:",
          uploadResponse.data
        );

        coverImageUrl =
          uploadResponse.data?.message?.file_url ||
          "";
      }

      /* =========================
         CREATE BOOK
      ========================= */

      const response = await frappe.post(
        API_PATHS.BOOKS.ADD,
        {
          book_title: formData.book_title,
          isbn: formData.isbn,
          edition: formData.edition,

          author: formData.author,
          category: formData.category,
          publisher: formData.publisher,

          cover_image: coverImageUrl,
        }
      );

      console.log(
        "Book Response:",
        response.data
      );

      toast.success("Book added successfully!");

      setFormData(initialFormData);

    } catch (error) {
      console.error(
        "Add Book Error:",
        error
      );

      console.error(
        "Server Response:",
        error?.response?.data
      );

      toast.error(
        error?.response?.data?._server_messages
          ? "Failed to add book"
          : error?.response?.data?.message ||
            "Failed to add book"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">

      <div className="mx-auto max-w-7xl">

        <Card className="border-slate-200 shadow-sm">

          <CardHeader className="border-b bg-white">
            <CardTitle className="text-xl">
              Add Book Information
            </CardTitle>
          </CardHeader>

          <CardContent className="p-4 sm:p-6 lg:p-8">

            <div className="space-y-8">

              {/* TOP SECTION */}

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                <CoverImage
                  value={formData.cover_image}
                  onChange={(file) =>
                    setFormData((prev) => ({
                      ...prev,
                      cover_image: file,
                    }))
                  }
                />

                <div className="space-y-6">

                  <BookTitle
                    value={formData.book_title}
                    onChange={handleChange}
                  />

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

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

              {/* LINK FIELDS */}

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

                {/* AUTHOR */}

                <div className="space-y-2">

                  <Label className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Author
                    <span className="text-red-500">*</span>
                  </Label>

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

                </div>

                {/* CATEGORY */}

                <div className="space-y-2">

                  <Label className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    Category
                    <span className="text-red-500">*</span>
                  </Label>

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

                </div>

                {/* PUBLISHER */}

                <div className="space-y-2">

                  <Label className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    Publisher
                    <span className="text-red-500">*</span>
                  </Label>

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

              </div>

              {/* ACTIONS */}

              <div className="flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:justify-end">

                <Button
                  type="button"
                  variant="outline"
                  onClick={handleReset}
                  disabled={loading}
                  className="w-full sm:w-auto"
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset
                </Button>

                <Button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full sm:w-auto"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Adding Book...
                    </>
                  ) : (
                    <>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Book
                    </>
                  )}
                </Button>

              </div>

            </div>

          </CardContent>

        </Card>

      </div>

    </div>
  );
};

export default AddBook;