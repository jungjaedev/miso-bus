import Link from "next/link";
import { SiteShell } from "@/components/InternalPages";
import { submitEstimateInquiry } from "./actions";

export default function EstimateNewRoute() {
  return (
    <SiteShell active="/estimate">
      <section className="estimate-form-section">
        <div className="breadcrumb">홈 〉 견적문의 〉 작성</div>
        <h1>견적/예약 문의글 작성</h1>
        <form className="estimate-form" action={submitEstimateInquiry}>
          <div className="form-grid">
            <label className="form-field">
              <span>이름</span>
              <input name="name" required />
            </label>
            <label className="form-field">
              <span>연락처</span>
              <input name="phone" type="tel" required />
            </label>
            <label className="form-field">
              <span>출발지</span>
              <input name="fromPlace" required />
            </label>
            <label className="form-field">
              <span>도착지</span>
              <input name="toPlace" required />
            </label>
            <label className="form-field">
              <span>탑승일</span>
              <input name="rideDate" type="date" />
            </label>
            <label className="form-field">
              <span>탑승 인원</span>
              <input name="peopleCount" type="number" min="1" inputMode="numeric" />
            </label>
            <label className="form-field form-field-full">
              <span>차량 종류</span>
              <select name="vehicleType" defaultValue="">
                <option value="">선택 안함</option>
                <option>대형버스 45인승</option>
                <option>우등버스 28인승</option>
                <option>미니버스 25인승</option>
                <option>미니버스 16인승</option>
                <option>리무진 버스 11인승</option>
              </select>
            </label>
            <label className="form-field form-field-full">
              <span>문의 내용</span>
              <textarea name="memo" rows={6} />
            </label>
          </div>
          <div className="form-actions">
            <Link className="form-secondary" href="/estimate">목록</Link>
            <button className="form-submit" type="submit">문의 접수</button>
          </div>
        </form>
      </section>
    </SiteShell>
  );
}
