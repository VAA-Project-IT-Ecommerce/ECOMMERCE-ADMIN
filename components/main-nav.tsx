"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import {
  FiSettings,
  FiGrid,
  FiList,
  FiDroplet,
  FiMonitor,
} from "react-icons/fi";
import { MdOutlineStraighten } from "react-icons/md"; // Biểu tượng "Size" từ Material Design

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();
  const route = [
    {
      href: `/${params.storeId}`,
      label: `Overview`,
      icon: <FiGrid />,
      active: pathname === `/${params.storeId}`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: `Settings`,
      icon: <FiSettings />,
      active: pathname === `/${params.storeId}/settings`,
    },

    {
      href: `/${params.storeId}/categories`,
      label: `Categories`,
      icon: <FiList />,
      active: pathname === `/${params.storeId}/categories`,
    },
    {
      href: `/${params.storeId}/sizes`,
      label: `Sizes`,
      icon: <MdOutlineStraighten />,
      active: pathname === `/${params.storeId}/sizes`,
    },
    {
      href: `/${params.storeId}/colors`,
      label: `Colors`,
      icon: <FiDroplet />,
      active: pathname === `/${params.storeId}/colors`,
    },
    {
      href: `/${params.storeId}/billboards`,
      label: `Billboards`,
      icon: <FiMonitor />,
      active: pathname === `/${params.storeId}/billboards`,
    },
  ];
  return (
    <nav
      className={cn(
        "flex items-center space-x-4 lg:space-x-6 p-4 bg-white shadow-md rounded-lg",
        className
      )}
    >
      {route.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "flex items-center text-sm font-medium transition-all hover:text-primary hover:bg-gray-100 p-2 rounded-md",
            route.active
              ? "text-black dark:text-white bg-gray-200"
              : "text-muted-foreground"
          )}
        >
          {route.icon}
          <span className="ml-2">{route.label}</span>
        </Link>
      ))}
    </nav>
  );
}
