import { auth } from "@/auth";
import { AuthPanel } from "@/components/auth-panel";
import { LoginForm } from "@/components/login-form";
import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic';

export default  async function Login() {
    const session = await auth()
    if(session){
        redirect('/')
    }
  return (
    <div className="min-h-screen">
      <div className="overflow-hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="p-6 min-h-96 relative">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-purple-950">
             Login
            </h1>
            <p className="text-purple-600/50 ">
             please login to accsess your account.
            </p>
            <LoginForm/>
          </div>
        </div>
        {/* end main content */}
        <AuthPanel session={session}/>
      </div>
    </div>
  )
}
