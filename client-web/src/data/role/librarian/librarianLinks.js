import {
    LayoutDashboard,
    BookOpen,
    UserRound,
    UserRoundCog,
    Tags,
    LibraryBig,
    ClipboardList,
    CircleDollarSign,
    Users,
} from "lucide-react";

export const librarianLinks = [
    {
        name: "Books",
        href: "/dashboard/books",
        icon: BookOpen,
    },
    {
        name: "Categories",
        href: "/dashboard/categories",
        icon: Tags,
    },
    {
        name: "Members",
        href: "/dashboard/members",
        icon: Users,
    },
    {
        name: "Issues",
        href: "/dashboard/issues",
        icon: ClipboardList,
    },
    {
        name: "Fines",
        href: "/dashboard/fines",
        icon: CircleDollarSign,
    },
    {
        name: "Membership",
        href: "/dashboard/membership",
        icon: LibraryBig,
    },
];