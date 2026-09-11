"use client";

import React from "react";
import { BookOpen } from "lucide-react";

const MyBooksPage = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">
                    My Books
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    View the books currently issued to you.
                </p>
            </div>

            {/* Empty State */}
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-xl border bg-white p-8 text-center shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                    <BookOpen className="h-7 w-7 text-blue-600" />
                </div>

                <h2 className="mt-4 text-lg font-semibold text-gray-900">
                    No Books Found
                </h2>

                <p className="mt-2 max-w-md text-sm text-gray-500">
                    You don't have any books issued to you yet.
                </p>
            </div>
        </div>
    );
};

export default MyBooksPage;