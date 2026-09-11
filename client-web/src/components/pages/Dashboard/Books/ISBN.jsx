"use client";

import React from "react";
import { Barcode } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ISBN = ({ value, onChange }) => {
  return (
    <div className="space-y-2">
      <Label
        htmlFor="isbn"
        className="flex items-center gap-2"
      >
        <Barcode className="h-4 w-4 text-slate-500" />

        <span>
          ISBN <span className="text-red-500">*</span>
        </span>
      </Label>

      <Input
        id="isbn"
        name="isbn"
        value={value}
        onChange={onChange}
        placeholder="Enter ISBN"
      />
    </div>
  );
};

export default ISBN;