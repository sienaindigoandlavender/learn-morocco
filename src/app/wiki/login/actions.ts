"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { checkPassword, expectedToken, SESSION_COOKIE } from "@/lib/auth";

export async function login(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/wiki");

  if (!checkPassword(password)) {
    redirect("/wiki/login?error=1&next=" + encodeURIComponent(next));
  }

  cookies().set(SESSION_COOKIE, await expectedToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });

  redirect(next.startsWith("/wiki") ? next : "/wiki");
}

export async function logout() {
  cookies().delete(SESSION_COOKIE);
  redirect("/wiki/login");
}
