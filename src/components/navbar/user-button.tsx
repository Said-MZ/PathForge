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

const inter = Inter({ subsets: ["latin"] });

const UserButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
              className="w-10 h-10 cursor-pointer text-gray-100 hover:text-gray-300 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={`w-56 ${inter.className}`}>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <div
        className={`absolute right-4 xl:right-36 top-12 z-10 ${inter.className}`}
      ></div>
    </>
  );
};

export default UserButton;