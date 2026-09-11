import React from "react";
import PublicPageCompo from "@/components/pages/public/PublicPageCompo";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight, Library } from "lucide-react";

const Page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-0 via-white to-slate-100">

      {/* ================= HERO SECTION ================= */}
      <section className="w-full px-4 py-6 sm:px-6 md:py-10 lg:px-8">

        <Card className="relative w-full overflow-hidden border bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white shadow-xl">

          {/* Background decoration */}
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-10">
            <div className="absolute right-10 top-10">
              <Library className="h-72 w-72" />
            </div>
          </div>

          <CardContent className="relative z-10 flex min-h-[300px] items-center px-6 py-12 sm:px-10 md:min-h-[360px] lg:px-16">

            <div className="max-w-2xl">

              <div className="mb-5 flex items-center gap-2 text-sm font-medium text-slate-300">
                <BookOpen className="h-4 w-4" />
                YOUR DIGITAL LIBRARY
              </div>

              <CardTitle className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Discover Your Next
                <span className="block text-blue-400">
                  Favorite Book
                </span>
              </CardTitle>

              <CardDescription className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                Explore thousands of books, discover incredible authors,
                and find stories that inspire your imagination.
              </CardDescription>

            </div>

          </CardContent>

        </Card>

      </section>

      {/* ================= BOOK SECTION ================= */}
      <section className="w-full px-4 pb-12 sm:px-6 lg:px-8">
            <p className="text-sm text-center font-medium text-blue-600">
              LIBRARY COLLECTION
            </p>


        <PublicPageCompo />

      </section>

    </main>
  );
};

export default Page;