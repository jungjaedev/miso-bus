import Link from "next/link";
import { SiteShell } from "@/components/InternalPages";

export default function EstimateThanksRoute() {
  return (
    <SiteShell active="/estimate">
      <section className="estimate-done-section">
        <h1>문의가 접수되었습니다.</h1>
        <p>담당자가 확인 후 빠르게 연락드리겠습니다.</p>
        <Link className="pill-dark" href="/estimate">목록으로</Link>
      </section>
    </SiteShell>
  );
}
