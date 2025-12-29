"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";
import { LogoutButton } from "@/components/logout-button";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Header() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const isActive = (path: string, matchSubPaths: boolean = false) => {
    if (matchSubPaths) {
      return pathname === path || pathname?.startsWith(`${path}/`);
    }
    return pathname === path;
  };

  return (
    <div className="bg-white p-4 border-b border-b-gray-200 dark:border-b-gray-800 w-full">
      <div className=" flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex gap-4">
          <Button 
            variant={isActive("/") ? "secondary" : "default"}
            asChild
          >
            <Link href="/">Home</Link>
          </Button>
          
          {session && (
            <Button 
              variant={isActive("/dashboard", true) ? "secondary" : "default"}
              asChild
            >
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          )}
          
          {!session && (
            <Button asChild>
              <Link href="/login">login</Link>
            </Button>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <div className={cn(
            "w-2 h-2 rounded-full", 
            session ? 'bg-green-700' : "bg-red-700"
          )}></div>
          
          <span>{session ? "authenticated" : "Not Authenticated"} </span>
          
          {session && <LogoutButton />}
        </div>
      </div>
    </div>
  );
}