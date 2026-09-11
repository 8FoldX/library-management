"use client";

import React from "react";
import Link from "next/link";
import {
    BookOpen,
    Clock,
    IndianRupee,
    ArrowRight,
    User,
} from "lucide-react";

const Page = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                    Member Dashboard
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    Welcome to your library dashboard.
                </p>
            </div>

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl border bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-500">
                            Books Issued
                        </p>

                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                            <BookOpen className="h-5 w-5 text-blue-600" />
                        </div>
                    </div>

                    <p className="mt-3 text-3xl font-bold text-gray-900">
                        0
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                        Currently issued books
                    </p>
                </div>

                <div className="rounded-xl border bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-500">
                            Active Issues
                        </p>

                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50">
                            <Clock className="h-5 w-5 text-orange-600" />
                        </div>
                    </div>

                    <p className="mt-3 text-3xl font-bold text-gray-900">
                        0
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                        Books waiting for return
                    </p>
                </div>

                <div className="rounded-xl border bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-500">
                            Outstanding Fine
                        </p>

                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
                            <IndianRupee className="h-5 w-5 text-red-600" />
                        </div>
                    </div>

                    <p className="mt-3 text-3xl font-bold text-gray-900">
                        ₹0
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                        Pending library fines
                    </p>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">
                    Quick Actions
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Access your library information quickly.
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <Link
                        href="/member/my-books"
                        className="group flex items-center justify-between rounded-lg border p-4 transition hover:border-blue-300 hover:bg-blue-50"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                                <BookOpen className="h-5 w-5 text-blue-600" />
                            </div>

                            <div>
                                <p className="font-medium text-gray-900">
                                    My Books
                                </p>

                                <p className="text-xs text-gray-500">
                                    View issued books
                                </p>
                            </div>
                        </div>

                        <ArrowRight className="h-4 w-4 text-gray-400 transition group-hover:translate-x-1" />
                    </Link>

                    <Link
                        href="/member/my-issues"
                        className="group flex items-center justify-between rounded-lg border p-4 transition hover:border-orange-300 hover:bg-orange-50"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                                <Clock className="h-5 w-5 text-orange-600" />
                            </div>

                            <div>
                                <p className="font-medium text-gray-900">
                                    My Issues
                                </p>

                                <p className="text-xs text-gray-500">
                                    Check issue history
                                </p>
                            </div>
                        </div>

                        <ArrowRight className="h-4 w-4 text-gray-400 transition group-hover:translate-x-1" />
                    </Link>

                    <Link
                        href="/member/my-fines"
                        className="group flex items-center justify-between rounded-lg border p-4 transition hover:border-red-300 hover:bg-red-50"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
                                <IndianRupee className="h-5 w-5 text-red-600" />
                            </div>

                            <div>
                                <p className="font-medium text-gray-900">
                                    My Fines
                                </p>

                                <p className="text-xs text-gray-500">
                                    View fine history
                                </p>
                            </div>
                        </div>

                        <ArrowRight className="h-4 w-4 text-gray-400 transition group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>

            {/* Profile */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                            <User className="h-6 w-6 text-blue-600" />
                        </div>

                        <div>
                            <h2 className="font-semibold text-gray-900">
                                My Profile
                            </h2>

                            <p className="text-sm text-gray-500">
                                View your member information
                            </p>
                        </div>
                    </div>

                    <Link
                        href="/member/profile"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                    >
                        View Profile
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page;