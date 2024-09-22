"use client";
import { routes } from "@/app/routes/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const Header = () => {
  const pathname = usePathname();
  return (
    <header className=" bg-black header  ">
      {routes.map((route, index) => (
        <Link
          key={index}
          href={route.href}
          className={
            pathname == route.href
              ? "text-gray-200 underline  px-4 "
              : "text-white  px-4 hover:text-gray-300 hover:underline "
          }
        >
          {route.title}
        </Link>
      ))}
    </header>
  );
};

export default Header;
