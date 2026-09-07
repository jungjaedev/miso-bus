import { createHash } from "node:crypto";
import { cookies } from "next/headers";

const cookieName = "miso_admin";

function adminToken() {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return null;
  return createHash("sha256").update(`miso-bus:${password}`).digest("hex");
}

export async function isAdmin() {
  const token = adminToken();
  return Boolean(token && (await cookies()).get(cookieName)?.value === token);
}

export async function setAdminCookie(password: string) {
  const token = adminToken();
  if (!token || password !== process.env.ADMIN_PASSWORD) return false;

  (await cookies()).set(cookieName, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: 60 * 60 * 8,
  });
  return true;
}

export async function clearAdminCookie() {
  (await cookies()).delete(cookieName);
}
