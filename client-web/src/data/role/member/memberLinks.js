import {
    LayoutDashboard,
    BookOpen,
    ClipboardList,
    CircleDollarSign,
    UserRound,
} from "lucide-react";

export const memberLinks = [
    {
        name: "My Books",
        href: "/member/my-books",
        icon: BookOpen,
    },
    {
        name: "My Issues",
        href: "/member/my-issues",
        icon: ClipboardList,
    },
    {
        name: "My Fines",
        href: "/member/my-fines",
        icon: CircleDollarSign,
    },
    {
        name: "Profile",
        href: "/member/profile",
        icon: UserRound,
    },
];