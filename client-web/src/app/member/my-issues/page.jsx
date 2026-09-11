"use client";

import React from "react";
import { BookOpen, CalendarDays, Clock, RotateCcw } from "lucide-react";

const MyIssuesPage = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                    My Issues
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    View your issued books and their due dates.
                </p>
            </div>

            {/* Summary Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-500">
                            Total Issues
                        </p>

                        <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>

                    <p className="mt-2 text-2xl font-bold text-gray-900">
                        0
                    </p>
                </div>

                <div className="rounded-xl border bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-500">
                            Active
                        </p>

                        <Clock className="h-5 w-5 text-green-600" />
                    </div>

                    <p className="mt-2 text-2xl font-bold text-gray-900">
                        0
                    </p>
                </div>

                <div className="rounded-xl border bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-500">
                            Due Soon
                        </p>

                        <CalendarDays className="h-5 w-5 text-orange-600" />
                    </div>

                    <p className="mt-2 text-2xl font-bold text-gray-900">
                        0
                    </p>
                </div>

                <div className="rounded-xl border bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-500">
                            Returned
                        </p>

                        <RotateCcw className="h-5 w-5 text-purple-600" />
                    </div>

                    <p className="mt-2 text-2xl font-bold text-gray-900">
                        0
                    </p>
                </div>
            </div>

            {/* Issues Table */}
            <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
                <div className="border-b px-5 py-4">
                    <h2 className="font-semibold text-gray-900">
                        Issued Books
                    </h2>

                    <p className="text-sm text-gray-500">
                        Your current and previous book issues.
                    </p>
                </div>

                {/* Desktop Table */}
                <div className="hidden overflow-x-auto md:block">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                            <tr className="border-b">
                                <th className="px-5 py-3 text-left font-medium text-gray-500">
                                    Book
                                </th>

                                <th className="px-5 py-3 text-left font-medium text-gray-500">
                                    Issue Date
                                </th>

                                <th className="px-5 py-3 text-left font-medium text-gray-500">
                                    Due Date
                                </th>

                                <th className="px-5 py-3 text-left font-medium text-gray-500">
                                    Return Date
                                </th>

                                <th className="px-5 py-3 text-left font-medium text-gray-500">
                                    Status
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td
                                    colSpan="5"
                                    className="px-5 py-16 text-center"
                                >
                                    <BookOpen className="mx-auto h-10 w-10 text-gray-300" />

                                    <p className="mt-3 font-medium text-gray-900">
                                        No issues found
                                    </p>

                                    <p className="mt-1 text-sm text-gray-500">
                                        You don't have any issued books yet.
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Mobile */}
                <div className="p-4 md:hidden">
                    <div className="flex min-h-[250px] flex-col items-center justify-center text-center">
                        <BookOpen className="h-10 w-10 text-gray-300" />

                        <p className="mt-3 font-medium text-gray-900">
                            No issues found
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                            You don't have any issued books yet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyIssuesPage;