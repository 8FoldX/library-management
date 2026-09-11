import {
    LayoutDashboard,
    BookOpen,
    Users,
    ClipboardList,
    CircleDollarSign,
    UserRound,
    UserRoundCog,
    Tags,
    LibraryBig,
} from "lucide-react";

export const assistantLibrarianLinks = [

    {
        name: "Add-Books",
        href: "/dashboard/books",
        icon: BookOpen,
    },

    {
        name: "Categories",
        href: "/dashboard/categories",
        icon: Tags,
    },

    {
        name: "All Members",
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
];