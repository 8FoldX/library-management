"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUserRole } from "@/lib/auth";

function ProtectedRoute({ children, allowedRoles = [] }) {
    const router = useRouter();
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        const role = getUserRole();

        console.log("User role:", role);

        if (!role) {
            router.replace("/auth/login");
            return;
        }

        if (
            allowedRoles.length > 0 &&
            !allowedRoles.includes(role)
        ) {
            router.replace("/");
            return;
        }


        setChecking(false);
    }, [router, allowedRoles]);

    if (checking) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-50">
                <div className="text-sm text-gray-500">
                    Checking access...
                </div>
            </div>
        );
    }

    return <>{children}</>;
}

export default ProtectedRoute;