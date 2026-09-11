"use client";

import React from "react";
import {
    AlertCircle,
    CheckCircle,
    IndianRupee,
    Receipt,
} from "lucide-react";

const MyFinesPage = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                    My Fines
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    View your library fines and payment status.
                </p>
            </div>

            {/* Summary Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* Total Fine */}
                <div className="rounded-xl border bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-500">
                            Total Fine
                        </p>

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50">
                            <IndianRupee className="h-5 w-5 text-red-600" />
                        </div>
                    </div>

                    <p className="mt-3 text-2xl font-bold text-gray-900">
                        ₹0
                    </p>
                </div>

                {/* Pending */}
                <div className="rounded-xl border bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-500">
                            Pending
                        </p>

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50">
                            <AlertCircle className="h-5 w-5 text-orange-600" />
                        </div>
                    </div>

                    <p className="mt-3 text-2xl font-bold text-gray-900">
                        ₹0
                    </p>
                </div>

                {/* Paid */}
                <div className="rounded-xl border bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-500">
                            Paid
                        </p>

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                    </div>

                    <p className="mt-3 text-2xl font-bold text-gray-900">
                        ₹0
                    </p>
                </div>
            </div>

            {/* Fines Table */}
            <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
                <div className="border-b px-5 py-4">
                    <div className="flex items-center gap-3">
                        <Receipt className="h-5 w-5 text-gray-600" />

                        <div>
                            <h2 className="font-semibold text-gray-900">
                                Fine History
                            </h2>

                            <p className="text-sm text-gray-500">
                                Your library fine and payment history.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Desktop Table */}
                <div className="hidden overflow-x-auto md:block">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                            <tr className="border-b">
                                <th className="px-5 py-3 text-left font-medium text-gray-500">
                                    Fine ID
                                </th>

                                <th className="px-5 py-3 text-left font-medium text-gray-500">
                                    Issue ID
                                </th>

                                <th className="px-5 py-3 text-left font-medium text-gray-500">
                                    Amount
                                </th>

                                <th className="px-5 py-3 text-left font-medium text-gray-500">
                                    Payment Status
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td
                                    colSpan="4"
                                    className="px-5 py-16 text-center"
                                >
                                    <Receipt className="mx-auto h-10 w-10 text-gray-300" />

                                    <p className="mt-3 font-medium text-gray-900">
                                        No fines found
                                    </p>

                                    <p className="mt-1 text-sm text-gray-500">
                                        You don't have any library fines.
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Mobile */}
                <div className="p-4 md:hidden">
                    <div className="flex min-h-[250px] flex-col items-center justify-center text-center">
                        <Receipt className="h-10 w-10 text-gray-300" />

                        <p className="mt-3 font-medium text-gray-900">
                            No fines found
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                            You don't have any library fines.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyFinesPage;