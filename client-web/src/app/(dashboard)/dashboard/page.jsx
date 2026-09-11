"use client";

import React from "react";
import {
    BookOpen,
    Users,
    BookMarked,
    IndianRupee,
    CreditCard,
} from "lucide-react";

function DashboardPage() {
    const stats = [
        {
            title: "Total Books",
            value: "0",
            icon: BookOpen,
        },
        {
            title: "Members",
            value: "0",
            icon: Users,
        },
        {
            title: "Issued Books",
            value: "0",
            icon: BookMarked,
        },
        {
            title: "Pending Fines",
            value: "₹0",
            icon: IndianRupee,
        },
    ];

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">
                    Dashboard
                </h1>

                <p className="mt-1 text-gray-500">
                    Welcome to the School Library Management System.
                </p>
            </div>

            {/* Statistics */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                        <div
                            key={stat.title}
                            className="rounded-xl border bg-white p-6 shadow-sm"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        {stat.title}
                                    </p>

                                    <p className="mt-2 text-3xl font-bold text-gray-900">
                                        {stat.value}
                                    </p>
                                </div>

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                                    <Icon className="h-6 w-6 text-blue-600" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Welcome Card */}
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                        <CreditCard className="h-7 w-7 text-blue-600" />
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">
                            Library Management
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Manage books, members, issues, fines and
                            memberships from your dashboard.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;