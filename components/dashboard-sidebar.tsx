"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Overview", href: "/dashboard" },
  { name: "Profile", href: "/dashboard/profile" },
  { name: "Settings", href: "/dashboard/settings" },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6">
      <h2 className="text-xl font-bold text-purple-950 mb-6">Dashboard</h2>
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <Button
                className={cn(
                  "w-full justify-start bg-pink-500 hover:bg-pink-600 text-white mt-2",
                  isActive && "bg-pink-600"
                )}
              >
                {item.name}
              </Button>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

