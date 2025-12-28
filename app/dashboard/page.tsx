import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { DashboardSidebar } from "@/components/dashboard-sidebar";

export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  const session = await auth();
  
  if (!session) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      <DashboardSidebar />
      <div className="flex-1 p-8 ">
        <h1 className="text-3xl font-bold text-purple-950 mb-6">Dashboard</h1>
        <div className="bg-white p-6 rounded-lg shadow max-w-3xl mx-auto">
          <p className="text-purple-600 text-center">Welcome to your dashboard, {session.user?.name}!</p>
        </div>
      </div>
    </div>
  );
}

