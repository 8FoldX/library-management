"use client";

import React from "react";
import { useRouter } from "next/navigation";

import {
  UserRound,
  LogIn,
  UserPlus,
  UserRoundCheck,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function AccountMenu() {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex items-center gap-2 rounded-lg px-3 py-2 transition hover:bg-gray-50 focus:outline-none"
      >
        <Avatar className="h-8 w-8">
          <AvatarFallback>
            <UserRound className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-48"
      >
        {/* Login */}
        <DropdownMenuItem
          onClick={() => router.push("/auth/login")}
          className="cursor-pointer"
        >
          <LogIn className="mr-2 h-4 w-4" />
          Login
        </DropdownMenuItem>

        {/* Sign Up */}
        <DropdownMenuItem
          onClick={() => router.push("/auth/signup")}
          className="cursor-pointer"
        >
          <UserPlus className="mr-2 h-4 w-4" />
          Sign Up
        </DropdownMenuItem>

        {/* Guest */}
        <DropdownMenuItem
          onClick={() => router.push("/")}
          className="cursor-pointer"
        >
          <UserRoundCheck className="mr-2 h-4 w-4" />
          Continue as Guest
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AccountMenu;