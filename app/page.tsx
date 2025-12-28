import { auth } from "@/auth";
import { AuthPanel } from "@/components/auth-panel";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const session = await auth();
  return (
    <div className="min-h-screen">
      <div className="overflow-hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="p-6 min-h-96 relative">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-purple-950">
              Welcome to the Home Page
            </h1>
            <p className="text-purple-600/50 ">
              This is a public page accessible to everyone
            </p>
          </div>
        </div>
        {/* end main content */}
        <AuthPanel session={session}/>
      </div>
    </div>
  );
}
