"use server";

import { redirect } from "next/navigation";
import { clearAdminCookie, setAdminCookie } from "@/lib/adminAuth";

export async function loginAdmin(formData: FormData) {
  const ok = await setAdminCookie(String(formData.get("password") ?? ""));
  if (!ok) redirect("/admin/login?error=1");
  redirect("/admin/estimates");
}

export async function logoutAdmin() {
  await clearAdminCookie();
  redirect("/admin/login");
}
