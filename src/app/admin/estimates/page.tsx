import { redirect } from "next/navigation";
import { SiteShell } from "@/components/InternalPages";
import { isAdmin } from "@/lib/adminAuth";
import { estimateStatuses, listEstimateInquiries } from "@/lib/estimateStore";
import { logoutAdmin } from "../login/actions";
import { changeEstimateStatus } from "./actions";

export const dynamic = "force-dynamic";

export default async function AdminEstimatesPage() {
  if (!(await isAdmin())) redirect("/admin/login");

  const rows = await listEstimateInquiries();

  return (
    <SiteShell>
      <section className="admin-section">
        <div className="admin-head">
          <h1>견적 문의 목록</h1>
          <form action={logoutAdmin}><button type="submit">로그아웃</button></form>
        </div>
        <div className="admin-list">
          {rows.length ? rows.map((row) => (
            <article className="admin-estimate-card" key={row.id}>
              <div>
                <strong>{row.name}</strong>
                <span>{new Date(row.createdAt).toLocaleString("ko-KR")}</span>
              </div>
              <p><b>연락처</b>{row.phone}</p>
              <p><b>출발</b>{row.fromPlace}</p>
              <p><b>도착</b>{row.toPlace}</p>
              <p><b>탑승일</b>{row.rideDate || "-"}</p>
              <p><b>인원</b>{row.peopleCount ?? "-"}</p>
              <p><b>차량</b>{row.vehicleType || "-"}</p>
              {row.memo ? <p className="admin-memo"><b>메모</b>{row.memo}</p> : null}
              <form action={changeEstimateStatus}>
                <input type="hidden" name="id" value={row.id} />
                <select name="status" defaultValue={row.status}>
                  {estimateStatuses.map((status) => <option key={status}>{status}</option>)}
                </select>
                <button type="submit">변경</button>
              </form>
            </article>
          )) : <p className="admin-empty">아직 접수된 문의가 없습니다.</p>}
        </div>
      </section>
    </SiteShell>
  );
}
