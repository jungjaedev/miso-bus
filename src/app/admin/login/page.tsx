import Link from "next/link";
import { SiteShell } from "@/components/InternalPages";
import { loginAdmin } from "./actions";

export default async function AdminLoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;

  return (
    <SiteShell>
      <section className="admin-section admin-login-section">
        <h1>운영자 로그인</h1>
        <form className="admin-login-form" action={loginAdmin}>
          <input name="password" type="password" placeholder="비밀번호" required />
          {error ? <p>비밀번호를 확인해주세요.</p> : null}
          <button type="submit">로그인</button>
        </form>
        <Link className="admin-back-link" href="/">홈으로</Link>
      </section>
    </SiteShell>
  );
}
