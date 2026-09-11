"use client";

import React from "react";
import {
    User,
    Mail,
    Phone,
    MapPin,
    ShieldCheck,
    BookOpen,
} from "lucide-react";

const ProfilePage = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                    My Profile
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    View your library account information.
                </p>
            </div>

            {/* Profile Card */}
            <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
                {/* Profile Header */}
                <div className="border-b bg-gray-50 px-6 py-6">
                    <div className="flex flex-col items-center gap-4 sm:flex-row">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                            <User className="h-10 w-10 text-blue-600" />
                        </div>

                        <div className="text-center sm:text-left">
                            <h2 className="text-xl font-bold text-gray-900">
                                Member
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Library Member
                            </p>

                            <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                                <ShieldCheck className="h-3.5 w-3.5" />
                                Active
                            </div>
                        </div>
                    </div>
                </div>

                {/* Information */}
                <div className="p-6">
                    <h3 className="mb-5 text-lg font-semibold text-gray-900">
                        Personal Information
                    </h3>

                    <div className="grid gap-5 sm:grid-cols-2">
                        {/* Name */}
                        <div className="flex items-start gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                                <User className="h-4 w-4 text-blue-600" />
                            </div>

                            <div>
                                <p className="text-xs font-medium text-gray-500">
                                    Full Name
                                </p>

                                <p className="mt-1 text-sm font-medium text-gray-900">
                                    Member
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-50">
                                <Mail className="h-4 w-4 text-purple-600" />
                            </div>

                            <div>
                                <p className="text-xs font-medium text-gray-500">
                                    Email
                                </p>

                                <p className="mt-1 break-all text-sm font-medium text-gray-900">
                                    member@example.com
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-50">
                                <Phone className="h-4 w-4 text-green-600" />
                            </div>

                            <div>
                                <p className="text-xs font-medium text-gray-500">
                                    Phone
                                </p>

                                <p className="mt-1 text-sm font-medium text-gray-900">
                                    Not available
                                </p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50">
                                <MapPin className="h-4 w-4 text-orange-600" />
                            </div>

                            <div>
                                <p className="text-xs font-medium text-gray-500">
                                    Address
                                </p>

                                <p className="mt-1 text-sm font-medium text-gray-900">
                                    Not available
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Library Summary */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900">
                            Library Summary
                        </h3>

                        <p className="text-sm text-gray-500">
                            Your current library activity.
                        </p>
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg border p-4">
                        <p className="text-sm text-gray-500">
                            Books Issued
                        </p>

                        <p className="mt-1 text-2xl font-bold text-gray-900">
                            0
                        </p>
                    </div>

                    <div className="rounded-lg border p-4">
                        <p className="text-sm text-gray-500">
                            Active Issues
                        </p>

                        <p className="mt-1 text-2xl font-bold text-gray-900">
                            0
                        </p>
                    </div>

                    <div className="rounded-lg border p-4">
                        <p className="text-sm text-gray-500">
                            Outstanding Fine
                        </p>

                        <p className="mt-1 text-2xl font-bold text-gray-900">
                            ₹0
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;