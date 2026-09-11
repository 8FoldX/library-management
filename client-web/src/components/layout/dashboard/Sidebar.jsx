"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Library,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { getUserRole } from "@/lib/auth";
import { Logout } from "@/components/common";

import { superAdminLinks } from "@/data/role/super_admin/superAdminLinks";
import { librarianLinks } from "@/data/role/librarian/librarianLinks";
import { assistantLibrarianLinks } from "@/data/role/assistant_librarian/assistantLibrarianLinks";
import { staffLinks } from "@/data/role/staff/staffLinks";
import { memberLinks } from "@/data/role/member/memberLinks";

const roleLinks = {
  "Super Admin": superAdminLinks,
  Librarian: librarianLinks,
  "Assistant Librarian": assistantLibrarianLinks,
  Staff: staffLinks,
  Member: memberLinks,
};

function Sidebar({
  links: customLinks,
  collapsed,
  setCollapsed,
}) {
  const pathname = usePathname();
  const role = getUserRole();

  const [mobileOpen, setMobileOpen] = useState(false);

  const links = customLinks || roleLinks[role] || [];

  const closeMobileSidebar = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* ================= MOBILE HEADER ================= */}
      <div className="fixed left-0 top-0 z-40 flex h-16 w-full items-center justify-between border-b bg-white px-4 md:hidden">
        <Link
          href="/dashboard"
          onClick={closeMobileSidebar}
          className="flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
            <Library className="h-5 w-5 text-white" />
          </div>

          <div>
            <h1 className="text-sm font-bold text-gray-900">
              School Library
            </h1>

            <p className="text-xs text-gray-500">
              {role || "Dashboard"}
            </p>
          </div>
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100"
          aria-label="Open sidebar"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={closeMobileSidebar}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen flex-col
          border-r bg-white shadow-sm
          transition-all duration-300 ease-in-out

          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }

          ${
            collapsed
              ? "md:w-20"
              : "w-64"
          }
        `}
      >
        {/* ================= LOGO ================= */}
        <div
          className={`
            flex h-16 shrink-0 items-center border-b
            ${
              collapsed
                ? "justify-center px-3"
                : "justify-between px-5"
            }
          `}
        >
          <Link
            href="/dashboard"
            onClick={closeMobileSidebar}
            className="flex items-center gap-3 overflow-hidden"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600">
              <Library className="h-5 w-5 text-white" />
            </div>

            {!collapsed && (
              <div className="whitespace-nowrap">
                <h1 className="text-sm font-bold text-gray-900">
                  School Library
                </h1>

                <p className="text-xs text-gray-500">
                  {role || "Dashboard"}
                </p>
              </div>
            )}
          </Link>

          {/* Mobile Close Button */}
          <button
            type="button"
            onClick={closeMobileSidebar}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 md:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* ================= NAVIGATION ================= */}
        <nav className="flex-1 overflow-y-auto p-3">
          <div className="space-y-1">
            {links.map((link) => {
              const Icon = link.icon;

              const isActive =
                pathname === link.href ||
                pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileSidebar}
                  title={collapsed ? link.name : undefined}
                  className={`
                    flex items-center rounded-lg text-sm
                    font-medium transition-all duration-200

                    ${
                      collapsed
                        ? "justify-center px-3 py-3"
                        : "gap-3 px-3 py-2.5"
                    }

                    ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }
                  `}
                >
                  <Icon className="h-5 w-5 shrink-0" />

                  {!collapsed && (
                    <span className="truncate">
                      {link.name}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* ================= COLLAPSE ================= */}
        <div className="hidden border-t p-3 md:block">
          <button
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className={`
              flex w-full items-center rounded-lg
              px-3 py-2.5 text-sm font-medium
              text-gray-600 transition hover:bg-gray-100

              ${
                collapsed
                  ? "justify-center"
                  : "gap-3"
              }
            `}
          >
            {collapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <>
                <ChevronLeft className="h-5 w-5" />
                <span>Collapse</span>
              </>
            )}
          </button>
        </div>

        {/* ================= LOGOUT ================= */}
        <div
          className={`
            shrink-0 border-t p-3
            ${collapsed ? "flex justify-center" : ""}
          `}
        >
          <Logout collapsed={collapsed} />
        </div>
      </aside>
    </>
  );
}

export default Sidebar;