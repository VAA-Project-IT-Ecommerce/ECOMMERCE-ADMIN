"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import {
  FiSettings,
  FiTag,
  FiBarChart2,
  FiArchive,
  FiLayers,
  FiShoppingCart,
  FiDroplet,
} from "react-icons/fi";
import { MdOutlineStraighten } from "react-icons/md"; // Icon cho "Size" từ Material Design

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
      icon: <FiBarChart2 />, // Icon bảng tổng quan
      active: pathname === `/${params.storeId}`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: `Settings`,
      icon: <FiSettings />, // Icon cài đặt
      active: pathname === `/${params.storeId}/settings`,
    },
    {
      href: `/${params.storeId}/billboards`,
      label: `Billboards`,
      icon: <FiTag />, // Icon biểu tượng (banner)
      active: pathname === `/${params.storeId}/billboards`,
    },
    {
      href: `/${params.storeId}/categories`,
      label: `Categories`,
      icon: <FiLayers />, // Icon danh mục sản phẩm
      active: pathname === `/${params.storeId}/categories`,
    },
    {
      href: `/${params.storeId}/sizes`,
      label: `Sizes`,
      icon: <MdOutlineStraighten />, // Icon kích thước
      active: pathname === `/${params.storeId}/sizes`,
    },
    {
      href: `/${params.storeId}/colors`,
      label: `Colors`,
      icon: <FiDroplet />, // Icon màu sắc
      active: pathname === `/${params.storeId}/colors`,
    },
    {
      href: `/${params.storeId}/products`,
      label: `Products`,
      icon: <FiArchive />, // Icon sản phẩm
      active: pathname === `/${params.storeId}/products`,
    },
    {
      href: `/${params.storeId}/orders`,
      label: `Orders`,
      icon: <FiShoppingCart />, // Icon đơn hàng
      active: pathname === `/${params.storeId}/orders`,
    },
  ];
  return (
    <nav
      className={cn(
        "flex items-center space-x-4 lg:space-x-6 p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg",
        className
      )}
    >
      {route.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "flex items-center text-sm font-medium transition-all hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md",
            route.active
              ? "text-black dark:text-white bg-gray-200 dark:bg-gray-700"
              : "text-muted-foreground dark:text-gray-400"
          )}
        >
          {route.icon}
          <span className="ml-2">{route.label}</span>
        </Link>
      ))}
    </nav>
  );
}
