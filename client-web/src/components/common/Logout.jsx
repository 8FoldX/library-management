"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { LogOut } from "lucide-react";

import {
  removeUserRole,
  removeUserName,
} from "@/lib/auth";

const Logout = ({ collapsed = false }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    if (loading) return;

    setLoading(true);

    try {
      await axios.get(
        `${process.env.NEXT_PUBLIC_FRAPPE_URL}/api/method/library_management.api.auth.logout`,
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      // Clear frontend authentication data
      removeUserRole();
      removeUserName();

      // Redirect to login/home page
      router.replace("/");
    }
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      title={collapsed ? "Logout" : ""}
      className={`
        flex w-full items-center rounded-lg
        px-3 py-2.5 text-sm font-medium
        text-gray-600 transition
        hover:bg-red-50 hover:text-red-600
        disabled:cursor-not-allowed disabled:opacity-50

        ${collapsed ? "justify-center" : "gap-3"}
      `}
    >
      <LogOut className="h-5 w-5 shrink-0" />

      {!collapsed && (
        <span>
          {loading ? "Logging out..." : "Logout"}
        </span>
      )}
    </button>
  );
};

export default Logout;