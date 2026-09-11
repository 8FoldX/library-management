import { NextResponse } from "next/server";

const FRAPPE_URL =
    process.env.NEXT_PUBLIC_FRAPPE_URL ||
    "http://library.localhost:8000";

async function handler(request, { params }) {
    try {
        const { path } = await params;

        if (!path || path.length === 0) {
            return NextResponse.json(
                {
                    error: "Invalid Frappe API path",
                },
                {
                    status: 400,
                }
            );
        }

        const frappePath = path.join("/");

        let finalUrl;

        // ==========================================
        // FILE REQUEST
        // Example:
        // /api/frappe/files/book.png
        // →
        // http://library.localhost:8000/files/book.png
        // ==========================================

        if (frappePath.startsWith("files/")) {
            finalUrl = `${FRAPPE_URL}/${frappePath}`;
        }

        // ==========================================
        // FULL API PATH
        // Example:
        // /api/frappe/api/method/login
        // →
        // http://library.localhost:8000/api/method/login
        // ==========================================

        else if (frappePath.startsWith("api/")) {
            finalUrl = `${FRAPPE_URL}/${frappePath}`;
        }

        // ==========================================
        // STANDARD FRAPPE METHOD
        // Example:
        // /api/frappe/method/login
        // →
        // http://library.localhost:8000/api/method/login
        // ==========================================

        else if (frappePath.startsWith("method/")) {
            finalUrl = `${FRAPPE_URL}/api/${frappePath}`;
        }

        // ==========================================
        // CUSTOM WHITELISTED METHOD
        // Example:
        // /api/frappe/library_management.api.get_books.get_books
        // →
        // http://library.localhost:8000/api/method/
        // library_management.api.get_books.get_books
        // ==========================================

        else {
            finalUrl =
                `${FRAPPE_URL}/api/method/${frappePath}`;
        }

        // Preserve query parameters
        const requestUrl = new URL(request.url);

        finalUrl += requestUrl.search;

        console.log("=================================");
        console.log("➡️ Request Method:", request.method);
        console.log("➡️ Frontend Path:", frappePath);
        console.log("➡️ Frappe URL:", finalUrl);
        console.log("=================================");

        // ==========================================
        // FORWARD HEADERS
        // ==========================================

        const headers = new Headers();

        headers.set("Host", "library.localhost");

        const accept = request.headers.get("accept");

        if (accept) {
            headers.set("Accept", accept);
        }

        const contentType =
            request.headers.get("content-type");

        if (contentType) {
            headers.set("Content-Type", contentType);
        }

        const authorization =
            request.headers.get("authorization");

        if (authorization) {
            headers.set(
                "Authorization",
                authorization
            );
        }

        // ==========================================
        // FORWARD COOKIES
        // ==========================================

        const cookie = request.headers.get("cookie");

        if (cookie) {
            headers.set("Cookie", cookie);
        }

        // ==========================================
        // REQUEST BODY
        // ==========================================

        let body;

        if (
            request.method !== "GET" &&
            request.method !== "HEAD"
        ) {
            body = await request.arrayBuffer();
        }

        // ==========================================
        // CALL FRAPPE
        // ==========================================

        const frappeResponse = await fetch(finalUrl, {
            method: request.method,
            headers,
            body,
            cache: "no-store",
            redirect: "manual",
        });

        // ==========================================
        // READ RESPONSE
        // Supports JSON, Images, Files, etc.
        // ==========================================

        const responseBody =
            await frappeResponse.arrayBuffer();

        // ==========================================
        // RESPONSE HEADERS
        // ==========================================

        const responseHeaders = new Headers();

        const responseContentType =
            frappeResponse.headers.get("content-type");

        if (responseContentType) {
            responseHeaders.set(
                "Content-Type",
                responseContentType
            );
        }

        // ==========================================
        // FORWARD COOKIES FROM FRAPPE
        // ==========================================

        if (
            typeof frappeResponse.headers.getSetCookie ===
            "function"
        ) {
            const cookies =
                frappeResponse.headers.getSetCookie();

            for (const cookieValue of cookies) {
                responseHeaders.append(
                    "Set-Cookie",
                    cookieValue
                );
            }
        } else {
            const setCookie =
                frappeResponse.headers.get("set-cookie");

            if (setCookie) {
                responseHeaders.append(
                    "Set-Cookie",
                    setCookie
                );
            }
        }

        console.log(
            "⬅️ Frappe Status:",
            frappeResponse.status
        );

        return new NextResponse(responseBody, {
            status: frappeResponse.status,
            headers: responseHeaders,
        });

    } catch (error) {
        console.error(
            "❌ Frappe Proxy Error:",
            error
        );

        return NextResponse.json(
            {
                error: "Frappe proxy error",
                message: error.message,
            },
            {
                status: 500,
            }
        );
    }
}

export {
    handler as GET,
    handler as POST,
    handler as PUT,
    handler as PATCH,
    handler as DELETE,
};