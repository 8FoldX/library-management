"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { UserPlus, Mail, Lock, User, Loader2 } from "lucide-react";
import axios from "axios";

function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!formData.full_name.trim()) {
      setError("Full name is required");
      return;
    }

    if (!formData.email.trim()) {
      setError("Email is required");
      return;
    }

    if (!formData.password) {
      setError("Password is required");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_FRAPPE_URL}/api/method/library_management.api.signup.signup`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.data?.message?.status === "Success") {
        setSuccess("Account created successfully!");

        setTimeout(() => {
          router.push("/auth/login");
        }, 1500);
      } else {
        setSuccess("Account created successfully!");

        setTimeout(() => {
          router.push("/auth/login");
        }, 1500);
      }
    } catch (err) {
      console.error("Signup Error:", err);

      const message =
        err.response?.data?.exception ||
        err.response?.data?.message ||
        "Unable to create account";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">

        {/* Card */}
        <div className="rounded-2xl border bg-white p-8 shadow-sm">

          {/* Header */}
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
              <UserPlus className="h-7 w-7 text-blue-600" />
            </div>

            <h1 className="mt-5 text-2xl font-bold text-gray-900">
              Create Account
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Create your library account
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="mt-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-600">
              {success}
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-5"
          >

            {/* Full Name */}
            <div>
              <label
                htmlFor="full_name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>

              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                <input
                  id="full_name"
                  name="full_name"
                  type="text"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email
              </label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <p className="mt-1.5 text-xs text-gray-400">
                Password must be at least 6 characters.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Creating Account...
                </>
              ) : (
                <>
                  <UserPlus className="h-4 w-4" />
                  Create Account
                </>
              )}
            </button>
          </form>

          {/* Login */}
          <div className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("/auth/login")}
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Login
            </button>
          </div>

          {/* Guest */}
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Continue as Guest
            </button>
          </div>

        </div>

      </div>
    </main>
  );
}

export default SignupPage;