"use client";

import React, { useState } from "react";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Sidebar from "@/components/layout/dashboard/Sidebar";
import Header from "@/components/layout/dashboard/Header";

import { getNavigationForRole } from "@/lib/permissions";
import { getUserRole } from "@/lib/auth";

export default function DashboardLayout({ children }) {
  const role = getUserRole();
  const links = getNavigationForRole(role);

  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <ProtectedRoute
      allowedRoles={[
        "Super Admin",
        "Librarian",
        "Assistant Librarian",
        "Staff",
      ]}
    >
      <div className="min-h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar
          links={links}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        {/* Main Content */}
        <div
          className={`
            min-h-screen
            transition-all duration-300 ease-in-out
            ${collapsed ? "md:ml-20" : "md:ml-64"}
          `}
        >
          <Header
            onMenuClick={() => setMobileOpen(true)}
          />

          <main className="p-4 pt-20 sm:p-6 sm:pt-20 md:p-6 md:pt-6 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}