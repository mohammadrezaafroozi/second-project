import { auth } from "@/auth";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LogoutButton } from "@/components/logout-button";
import { Button } from "./ui/button";

export default async function Header() {
  const session = await auth();
  return (
    <div className="bg-white p-4 border-b border-b-gray-200 dark:border-b-gray-800 w-full">
      <div className=" flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex gap-4">
         <Button>  <Link href="/">Home</Link></Button>
          {session && <Link href="/dashboard"><Button>Dashboard</Button></Link>}
          {!session && <Link href="/login"><Button>login</Button></Link>}
        </div>
        <div className="flex items-center gap-2">
          <div className={cn("w-2 h-2 rounded-full", session? 'bg-green-700': "bg-red-700") }>
          </div>
          <span>{session ? "authenticated" : "Not Authenticated"} </span>
          {session && <LogoutButton />}
        </div>
      </div>
    </div>
  );
}
