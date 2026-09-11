"use client";

import React from "react";
import { BookOpen } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BookTitle = ({ value, onChange }) => {
  return (
    <div className="space-y-2">
      <Label
        htmlFor="book_title"
        className="flex items-center gap-2"
      >
        <BookOpen className="h-4 w-4 text-slate-500" />

        <span>
          Book Title <span className="text-red-500">*</span>
        </span>
      </Label>

      <Input
        id="book_title"
        name="book_title"
        value={value}
        onChange={onChange}
        placeholder="Enter book title"
      />
    </div>
  );
};

export default BookTitle;