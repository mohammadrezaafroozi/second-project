"use client";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);

  const credentialsAction = async (formData: FormData) => {
    setError(null);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      await signIn("credentials", {
        username,
        password,
        redirect: true,
        callbackUrl: "/dashboard",
      });
    } catch (err: any) {
      setError(err?.message ?? "Invalid username or password");
    }
  };
  return (
    <form action={credentialsAction}>
      <div className="space-y-4">
        <label htmlFor="username" className="sr-only">
          Username
        </label>
        <Input
          type="text"
          id="username"
          name="username"
          required
          className="w-full p-2 rounded-md border border-gray-200 outline-none"
          placeholder="username"
        />

        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <Input
          type="password"
          id="password"
          name="password"
          required
          className="w-full p-2 rounded-md border border-gray-200 outline-none"
          placeholder="password"
        />
        {error && <p className="text-red-500">{error}</p>}
        <Button className="w-full bg-primary" type="submit">Sign In</Button>
      </div>
      
    </form>
  );
}
