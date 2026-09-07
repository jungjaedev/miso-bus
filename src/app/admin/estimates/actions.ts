"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/adminAuth";
import { estimateStatuses, updateEstimateStatus, type EstimateStatus } from "@/lib/estimateStore";

export async function changeEstimateStatus(formData: FormData) {
  if (!(await isAdmin())) redirect("/admin/login");

  const status = String(formData.get("status")) as EstimateStatus;
  if (!estimateStatuses.includes(status)) throw new Error("Invalid status");

  await updateEstimateStatus(String(formData.get("id") ?? ""), status);
  revalidatePath("/admin/estimates");
}
