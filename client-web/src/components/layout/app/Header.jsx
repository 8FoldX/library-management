"use client";

import React from "react";
import { Menu } from "lucide-react";

import {
  AccountMenu,
  BookFilterSheet,
} from "@/components/common";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">

      <div className="mx-auto flex h-16 w-full max-w-7xl items-center px-3 sm:px-4 md:px-6 lg:px-8">

        {/* LEFT SIDE */}
        <div className="shrink-0">
          {/* <Logo /> */}
        </div>

        {/* =========================
            DESKTOP RIGHT SIDE
        ========================== */}
        <div className="ml-auto hidden items-center gap-3 md:flex">

          {/* Book Filter Background */}
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <BookFilterSheet />
          </div>

          {/* Account Background */}
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <AccountMenu />
          </div>

        </div>

        {/* =========================
            MOBILE RIGHT SIDE
        ========================== */}
        <div className="ml-auto flex items-center gap-2 md:hidden">

          {/* Account Background */}
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <AccountMenu />
          </div>

          {/* Mobile Menu */}
          <Sheet>

            <SheetTrigger
              type="button"
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Menu className="h-5 w-5" />

              <span className="sr-only">
                Open menu
              </span>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[85vw] max-w-sm bg-white"
            >
              <SheetHeader>
                <SheetTitle>
                  Library Management
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Filter */}
              <div className="mt-6 border-t pt-6">
                <BookFilterSheet />
              </div>

            </SheetContent>

          </Sheet>

        </div>

      </div>

    </header>
  );
}

export default Header;