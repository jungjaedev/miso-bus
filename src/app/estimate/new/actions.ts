"use server";

import { redirect } from "next/navigation";
import { createEstimateInquiry } from "@/lib/estimateStore";

function text(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function required(formData: FormData, key: string) {
  const value = text(formData, key);
  if (!value) throw new Error("필수 항목을 입력해주세요.");
  return value;
}

export async function submitEstimateInquiry(formData: FormData) {
  const peopleCount = Number.parseInt(text(formData, "peopleCount"), 10);

  await createEstimateInquiry({
    name: required(formData, "name"),
    phone: required(formData, "phone"),
    fromPlace: required(formData, "fromPlace"),
    toPlace: required(formData, "toPlace"),
    rideDate: text(formData, "rideDate"),
    peopleCount: Number.isFinite(peopleCount) ? peopleCount : null,
    vehicleType: text(formData, "vehicleType"),
    memo: text(formData, "memo"),
  });

  redirect("/estimate/thanks");
}
