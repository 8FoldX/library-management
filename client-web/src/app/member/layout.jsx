"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Sidebar from "@/components/layout/dashboard/Sidebar";
import Header from "@/components/layout/dashboard/Header";
import { memberLinks } from "@/data/role/member/memberLinks";

export default function MemberLayout({ children }) {
    return (
        <ProtectedRoute allowedRoles={["Member"]}>
            <div className="min-h-screen bg-gray-50">
                <Sidebar links={memberLinks} />

                <div className="min-h-screen lg:ml-64">
                    <Header />

                    <main className="p-4 sm:p-6">
                        {children}
                    </main>
                </div>
            </div>
        </ProtectedRoute>
    );
}