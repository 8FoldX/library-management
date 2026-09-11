"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ImagePlus,
  Upload,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const CoverImage = ({ value, onChange }) => {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!value) {
      setPreview(null);
      return;
    }

    if (value instanceof File) {
      const objectUrl = URL.createObjectURL(value);

      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [value]);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    onChange(file);
  };

  const removeImage = () => {
    onChange(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-3">
      {/* Label */}
      <Label className="flex items-center gap-2">
        <ImagePlus className="h-4 w-4 text-slate-500" />

        <span>
          Cover Image
          <span className="ml-1 text-red-500">*</span>
        </span>
      </Label>

      {/* Hidden Input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/jpg,image/webp"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Upload / Preview */}
      {!preview ? (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="
            flex h-52 w-full max-w-xs cursor-pointer
            flex-col items-center justify-center
            rounded-xl border-2 border-dashed
            border-slate-300 bg-slate-50
            p-6 transition-all
            hover:border-primary hover:bg-slate-100
            focus:outline-none focus:ring-2
            focus:ring-primary focus:ring-offset-2
          "
        >
          <div className="mb-4 rounded-full bg-slate-200 p-3">
            <Upload className="h-6 w-6 text-slate-600" />
          </div>

          <p className="text-sm font-semibold text-slate-700">
            Upload book cover
          </p>

          <p className="mt-1 text-center text-xs text-slate-500">
            PNG, JPG, JPEG or WEBP
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Click to browse
          </p>
        </button>
      ) : (
        <div className="relative h-52 w-full max-w-xs overflow-hidden rounded-xl border bg-muted">
          <img
            src={preview}
            alt="Book cover preview"
            className="h-full w-full object-cover"
          />

          <Button
            type="button"
            size="icon"
            variant="destructive"
            onClick={removeImage}
            className="absolute right-3 top-3 h-8 w-8 rounded-full shadow-md"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default CoverImage;