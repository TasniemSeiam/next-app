"use client";
import { routes } from "@/app/routes/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="sidebar bg-gray-300 sidebar ">
    
      {routes.map((route, index) => (
        <Link
          key={index}
          href={route.href}
          className={
            pathname == route.href
              ? "text-gray-600 underline  px-4 "
              : "  px-4 hover:text-gray-600 hover:underline "
          }
        >
          <p>{route.title} </p>
        </Link>
      ))}

    </div>
  );
};

export default Sidebar;
