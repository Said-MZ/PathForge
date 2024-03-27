"use client";
import { useState } from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { Inter } from "next/font/google";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const UserButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // temporary until we set up authentication
  const isSignedIn = false;
  const userName = "اسم المستخدم";
  //-----------------------------------------
  return (
    <>
      {isMenuOpen && (
        <div
          className="absolute top-0 right-0 w-screen h-screen transparent z-0"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={null}>
            <RiAccountCircleFill
              className="w-10 h-10 cursor-pointer dark:text-gray-100 dark:hover:text-gray-300 hover:text-neutral-700 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={`w-56`}>
          <DropdownMenuLabel className="text-right">
            {isSignedIn ? `مرحبًا، ${userName}` : "مرحبًا، زائر"}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {isSignedIn ? (
              <>
                <Link href="/profile">
                  <DropdownMenuItem className="flex justify-end">
                    الملف الشخصي
                  </DropdownMenuItem>
                </Link>
                <Link href="/settings">
                  <DropdownMenuItem className="flex justify-end">
                    الإعدادات
                  </DropdownMenuItem>
                </Link>
              </>
            ) : (
              <>
                <Link href="/login">
                  <DropdownMenuItem className="flex justify-end">
                    تسجيل الدخول
                  </DropdownMenuItem>
                </Link>
              </>
            )}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className={`absolute right-4 xl:right-36 top-12 z-10`}></div>
    </>
  );
};

export default UserButton;
