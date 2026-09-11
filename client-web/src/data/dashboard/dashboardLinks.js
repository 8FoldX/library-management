import {
    LayoutDashboard,
    BookOpen,
    Users,
    BookMarked,
    Tags,
    UserRound,
    Building2,
    IndianRupee,
    CreditCard,
    Settings,
} from "lucide-react";

const adminDashboardLinks = [
    {
        name: "Books",
        href: "/dashboard/books",
        icon: BookOpen,
    },
    {
        name: "Members",
        href: "/dashboard/members",
        icon: Users,
    },
    {
        name: "Issues",
        href: "/dashboard/issues",
        icon: BookMarked,
    },
    {
        name: "Fines",
        href: "/dashboard/fines",
        icon: IndianRupee,
    },
    {
        name: "Membership",
        href: "/dashboard/membership",
        icon: CreditCard,
    },
    {
        name: "Categories",
        href: "/dashboard/categories",
        icon: Tags,
    },
    {
        name: "Authors",
        href: "/dashboard/authors",
        icon: UserRound,
    },
    {
        name: "Publishers",
        href: "/dashboard/publishers",
        icon: Building2,
    },
    {
        name: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },
];

export default adminDashboardLinks;