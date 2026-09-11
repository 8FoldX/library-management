import {
    LayoutDashboard,
    Users,
    ShieldCheck,
    UserRoundCog,
    BookOpen,
    Settings,
    UserRound,
    Tags,
    LibraryBig,
    ClipboardList,
    CircleDollarSign,
} from "lucide-react";

export const superAdminLinks = [
    {
        name: "Users",
        href: "/dashboard/users",
        icon: Users,
    },
    {
        name: "Roles",
        href: "/dashboard/roles",
        icon: ShieldCheck,
    },
    {
        name: "Members",
        href: "/dashboard/members",
        icon: UserRound,
    },
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
    {
        name: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },
];