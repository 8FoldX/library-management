"use client";

import React from "react";
import { BookOpen } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";

const Edition = ({ value, onChange }) => {
  const editions = [
    "1st Edition",
    "2nd Edition",
    "3rd Edition",
    "4th Edition",
    "5th Edition",
  ];

  return (
    <div className="space-y-2">
      <Label className="flex items-center gap-2">
        <BookOpen className="h-4 w-4 text-slate-500" />

        <span>
          Edition <span className="text-red-500">*</span>
        </span>
      </Label>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select edition" />
        </SelectTrigger>

        <SelectContent>
          {editions.map((edition) => (
            <SelectItem key={edition} value={edition}>
              {edition}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Edition;