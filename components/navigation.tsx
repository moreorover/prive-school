"use client";

import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
// import { Icon } from "@iconify/react";
import { LuHeart } from "react-icons/lu";
// import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Docs", href: "/docs" },
    { name: "Login", href: "/login" },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand as={Link} href="/">
          <LuHeart className="text-primary-500 text-2xl" />
          <p className="font-bold text-inherit ml-2">Prive School</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === "/about"}>
          <Link
            // as={Link}
            color={pathname === "/about" ? "primary" : "foreground"}
            href="/about"
            // onPress={handleNavItemClick}
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/blog"}>
          <Link
            // as={Link}
            color={pathname === "/blog" ? "primary" : "foreground"}
            href="/blog"
            onPress={(e) => setIsMenuOpen(false)}
          >
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/pricing"}>
          <Link
            // as={Link}
            color={pathname === "/pricing" ? "primary" : "foreground"}
            href="/pricing"
            onPress={(e) => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item.name}-${index}`}
            isActive={pathname === item.href}
          >
            <Link
              className="w-full"
              color={pathname === item.href ? "primary" : "foreground"}
              href={item.href}
              size="lg"
              onPress={(e) => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button
            as={Link}
            className="mt-4 w-full"
            color="primary"
            href="/signup"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
