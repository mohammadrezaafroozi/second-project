"use server";

import { signIn, signOut } from "@/auth";

export async function loginAction(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  try {
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    return {
      ok: result?.ok ?? false,
      error: result?.error ?? null,
    };
  } catch {
    return {
      ok: false,
      error: "An error occurred. Please try again.",
    };
  }
}

export async function logoutAction() {
  await signOut({ redirect: true, redirectTo: "/login" });
}

