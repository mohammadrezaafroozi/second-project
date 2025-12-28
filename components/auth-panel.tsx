"use client";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";


export function AuthPanel({session}:{session: Session | null}) {
    const pathname = usePathname()
    return (
        <div className="bg-white p-4 border-t border-gray-200">
            <div className="text-sm text-purple-950/50 space-y-1">
            <p>Current path:{pathname}</p>
            <p>Auth status: {session? 'Logged in': 'Logged out'} </p>
            </div>
        </div>
    );
}