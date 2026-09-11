import React from "react";
import Link from "next/link";

function Logo() {
    return (
        <Link
            href="/"
            className="flex items-center gap-3"
        >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">
                <span className="text-2xl">
                    📚
                </span>
            </div>

            <div>
            </div>
        </Link>
    );
}

export default Logo;