import axios from "axios";

const LIBRARY_ROLES = [
    "Super Admin",
    "Librarian",
    "Assistant Librarian",
    "Staff",
    "Member",
];

export async function getCurrentUser() {
    const response = await axios.get(
        "/api/frappe/api/method/library_management.api.auth.get_current_user",
        {
            withCredentials: true,
        }
    );

    console.log(
        "Current user response:",
        response.data
    );

    return response.data.message;
}

export function getLibraryRole(roles = []) {
    return (
        LIBRARY_ROLES.find((role) =>
            roles.includes(role)
        ) || null
    );
}

export function getUserRole() {
    if (typeof window === "undefined") {
        return null;
    }

    return localStorage.getItem("userRole");
}

export function setUserRole(role) {
    if (typeof window === "undefined") {
        return;
    }

    localStorage.setItem("userRole", role);
}

export function removeUserRole() {
    if (typeof window === "undefined") {
        return;
    }

    localStorage.removeItem("userRole");
}

export function setUserName(name) {
    if (typeof window === "undefined") {
        return;
    }

    localStorage.setItem("userName", name);
}

export function getUserName() {
    if (typeof window === "undefined") {
        return null;
    }

    return localStorage.getItem("userName");
}

export function removeUserName() {
    if (typeof window === "undefined") {
        return;
    }

    localStorage.removeItem("userName");
}