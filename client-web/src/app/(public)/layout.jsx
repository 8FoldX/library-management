"use client";

import React from "react";
import Header from "@/components/layout/app/Header";
import Footer from "@/components/layout/app/Footer";

export default function PublicLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            
            {/* Public Header */}
            <Header />

            {/* Page Content */}
            <main className="flex-1">
                {children}
            </main>

            {/* Public Footer */}
            <Footer />

        </div>
    );
}