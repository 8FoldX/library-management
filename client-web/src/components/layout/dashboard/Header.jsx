"use client";

import React from "react";
import { getUserRole } from "@/lib/auth";
import { UserRound } from "lucide-react";

const Header = () => {
    const role = getUserRole();

    return (
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
            <div>
                <h1 className="text-lg font-semibold text-gray-900">
                    Library Dashboard
                </h1>
            </div>

            <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                    <UserRound className="h-5 w-5 text-blue-600" />
                </div>

                <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                        Admin
                    </p>

                    <p className="text-xs text-gray-500">
                        {role || "Guest"}
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;