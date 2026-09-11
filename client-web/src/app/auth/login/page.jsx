"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import {
    getCurrentUser,
    getLibraryRole,
    setUserRole,
    setUserName,
} from "@/lib/auth";

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError("");

        try {
            // =====================================================
            // 1. Login to Frappe THROUGH Next.js proxy
            // =====================================================
            const response = await axios.post(
                "/api/frappe/api/method/login",
                {
                    usr: email,
                    pwd: password,
                },
                {
                    withCredentials: true,
                }
            );

            console.log("Login response:", response.data);

            // =====================================================
            // 2. Check login response
            // =====================================================
            if (
                response.data?.message !== "Logged In" &&
                response.data?.message !== "No App"
            ) {
                setError(
                    response.data?.message || "Login failed"
                );
                return;
            }

            // =====================================================
            // 3. Get currently logged-in Frappe user
            // =====================================================
            const user = await getCurrentUser();

            console.log("Current user:", user);

            if (!user?.logged_in) {
                setError(
                    "Unable to get logged-in user."
                );
                return;
            }

            // =====================================================
            // 4. Get Frappe roles
            // =====================================================
            const roles = user.roles || [];

            console.log("Frappe roles:", roles);

            // =====================================================
            // 5. Find library role
            // =====================================================
            const libraryRole = getLibraryRole(roles);

            console.log("Library role:", libraryRole);

            if (!libraryRole) {
                setError(
                    "No library role assigned to this user."
                );
                return;
            }

            // =====================================================
            // 6. Save user information
            // =====================================================
            setUserRole(libraryRole);
            setUserName(user.full_name);

            console.log(
                "Login successful. Role:",
                libraryRole
            );

            // =====================================================
            // 7. Redirect based on role
            // =====================================================
            if (libraryRole === "Member") {
                console.log(
                    "Redirecting to /member"
                );

                router.replace("/member");
            } else {
                console.log(
                    "Redirecting to /dashboard"
                );

                router.replace("/dashboard");
            }

        } catch (error) {
            console.error("Login error:", error);

            console.error(
                "Server response:",
                error.response?.data
            );

            setError(
                error.response?.data?.message ||
                error.message ||
                "Unable to login"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">

            <div className="w-full max-w-md rounded-xl border bg-white p-8 shadow-sm">

                {/* =================================================
                    Header
                ================================================= */}
                <h1 className="mb-2 text-2xl font-bold">
                    Login
                </h1>

                <p className="mb-6 text-sm text-gray-500">
                    Sign in to your library account
                </p>

                {/* =================================================
                    Error
                ================================================= */}
                {error && (
                    <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
                        {error}
                    </div>
                )}

                {/* =================================================
                    Login Form
                ================================================= */}
                <form
                    onSubmit={handleLogin}
                    className="space-y-4"
                >

                    {/* Email */}
                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            Email
                        </label>

                        <input
                            type="text"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="admin@example.com"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Password"
                            required
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {loading
                            ? "Logging in..."
                            : "Login"}
                    </button>

                </form>

            </div>

        </div>
    );
}