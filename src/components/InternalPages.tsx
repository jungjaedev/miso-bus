"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent, PointerEvent, TouchEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChatIcon, CloseIcon, MenuIcon, PhoneIcon } from "@/components/icons";

const img = "/images/misobus/";

const mainNav = [
  { label: "미소버스 소개", href: "/about" },
  { label: "차량안내", href: "/our-cars" },
  { label: "고객지원", href: "/cs" },
  { label: "견적문의", href: "/estimate" },
];

const processSteps = [
  { label: "문의", icon: `${img}i_question.svg` },
  { label: "상담", icon: `${img}i_chats.svg` },
  { label: "예약", icon: `${img}i_calendar.svg` },
  { label: "운행", icon: `${img}i_bus.svg` },
];

const footerLinks = [
  { label: "고객지원", href: "/cs" },
  { label: "이용약관", href: "/term-and-service" },
  { label: "개인정보보호정책", href: "/personal-info-policy" },
  { label: "로그인", href: "/admin/login" },
];

const socials = [
  { label: "카카오톡 상담", icon: `${img}icon_kakaotalk_222.svg`, hoverIcon: `${img}icon_kakaotalk.svg`, href: "http://pf.kakao.com/_xafJtK" },
  { label: "인스타그램", icon: `${img}icon_instagram_222.svg`, hoverIcon: `${img}icon_instagram.svg`, href: "https://www.instagram.com/misobus" },
  { label: "블로그", icon: `${img}icon_blog_black.svg`, hoverIcon: `${img}icon_blog.svg`, href: "https://blog.naver.com/miso-bus" },
];

const estimates = [
  ["화성산업진*원", "2026.04.27", "화성시 동탄 첨단1로57(화성산업진흥원 분원)", "한국나노기술원-서플러스글로벌"],
  ["김*영", "2025.09.03", "강원도 춘천시", "강원도 원주 피노키오캠핑장"],
  ["이*호", "2025.03.25", "서울 서대문구 통일로 37길 51", "경기 광주시 남종면 검천리 66"],
  ["*혁", "2024.12.31", "서울", "세종"],
  ["이*희", "2022.06.16", "동덕여대", "고창농악전수관"],
  ["홍*도", "2021.08.20", "동대구역", "경남 남해시 충렬사"],
  ["김*영", "2021.08.20", "서울 동대문구 동대구역 앞", "전남 여수"],
  ["일*매", "2021.07.25", "서울 홍대입구역", "전남 해남 땅끝마을"],
  ["홍*동", "2021.07.25", "서울역", "서울역"],
  ["테*트", "2021.07.25", "서울", "동대구"],
];

const privacySections = [
  ["우리는 누구인가요", "추천 텍스트: 웹사이트 주소는: http://misobus.mycafe24.com/."],
  ["댓글", "추천 텍스트: 방문자가 사이트에 댓글을 남길 때 댓글 양식에 있는 자료, 스팸 감지를 도울 수 있는 방문자의 IP 주소와 브라우저 사용자 에이전트 문자열 또한 수집합니다. 이메일에서 생성된 익명화된 문자열이 그라바타 서비스에 제공될 수도 있습니다."],
  ["미디어", "추천 텍스트: 웹사이트에 이미지를 업로드하면, 임베드한 위치 자료(EXIF GPS)를 포함하여 이미지 업로드를 지해야 합니다. 웹사이트에 방문하는 사람이 웹사이트에 있는 이미지에서 위치 자료를 다운로드하고 추출할 수 있습니다."],
  ["쿠키", "추천 텍스트: 사이트에 댓글을 남기면 이름, 이메일 주소와 웹사이트를 쿠키에 저장할 것인지 선택할 수 있습니다. 로그인 페이지를 방문하면 브라우저가 쿠키를 수용하는지 임시 쿠키를 만들 것입니다."],
  ["다른 웹사이트에서 임베드한 콘텐츠", "추천 텍스트: 이 사이트의 글은 임베드된 콘텐츠가 포함될 수도 있습니다. 다른 웹사이트로부터 임베드된 콘텐츠는 방문자가 해당 다른 웹사이트를 방문한 것과 동일하게 작동됩니다."],
  ["누구와 함께 자료를 공유하나요", "추천 텍스트: 비밀번호 재설정을 요청하면, 재설정 이메일에 IP 주소가 포함됩니다."],
  ["얼마나 오래 자료를 유지하나요", "추천 텍스트: 댓글을 남기면, 댓글과 그 메타자료를 무기한 유지합니다. 웹사이트에 등록한 사용자에 대해 사용자 프로필에 제공한 개인정보도 저장합니다."],
  ["자료에 대해 어떤 권리를 가지고 있나요", "추천 텍스트: 사이트에 계정을 가지고 있거나 댓글을 남겼다면, 보유하고 있는 개인정보의 파일 내보내기를 받도록 요청할 수 있습니다. 또한 보유하고 있는 개인정보를 지우는 것도 요청할 수 있습니다."],
  ["어디로 자료를 보내나요", "추천 텍스트: 자동 스팸 감지 서비스를 통해 방문자 댓글을 확인할 수 있습니다."],
];

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
}

function SmartLink({ href, className, children, ariaLabel }: { href: string; className?: string; children: React.ReactNode; ariaLabel?: string }) {
  if (isExternal(href)) {
    return <a className={className} href={href} aria-label={ariaLabel} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{children}</a>;
  }
  return <Link className={className} href={href} aria-label={ariaLabel}>{children}</Link>;
}

export function SiteShell({ active, children }: { active?: string; children: React.ReactNode }) {
  const [sideOpen, setSideOpen] = useState(false);
  const [floatOpen, setFloatOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("scrol-hidden", sideOpen);
    return () => document.body.classList.remove("scrol-hidden");
  }, [sideOpen]);

  return (
    <main className="misobus-page internal-page">
      <header className="site-header internal-header">
        <nav className="nav-shell" aria-label="주 메뉴">
          <button className="mobile-menu-button" onClick={() => setSideOpen(true)} aria-label="메뉴 열기">
            <MenuIcon />
          </button>
          <Link className="brand" href="/" aria-label="미소버스 홈">
            <Image src={`${img}miso_logo.svg`} alt="미소버스 로고" width={220} height={44} priority />
          </Link>
          <ul className="desktop-nav">
            {mainNav.map((item) => (
              <li key={item.label}>
                <Link className={active === item.href ? "is-active" : undefined} href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={`side-menu ${sideOpen ? "is-open" : ""}`} aria-hidden={!sideOpen}>
          <button className="side-close" onClick={() => setSideOpen(false)} aria-label="메뉴 닫기">
            <CloseIcon />
          </button>
          <Link className="side-logo" href="/">
            <Image src={`${img}logo.svg`} alt="미소버스 로고" width={137} height={37} />
          </Link>
          <ul>
            {mainNav.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="side-customer">
            <a href="tel:01052467695"><span><PhoneIcon /></span>010-5246-7695</a>
            <a href="http://pf.kakao.com/_xafJtK" target="_blank" rel="noreferrer"><span className="kakao"><ChatIcon /></span>카톡상담</a>
          </div>
        </div>
      </header>
      {children}
      <SiteFooter />
      <FloatingInquiry open={floatOpen} onToggle={() => setFloatOpen((open) => !open)} />
    </main>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer internal-footer">
      <div className="section-container footer-top">
        <ul className="footer-menu">
          {footerLinks.map((item) => (
            <li key={item.label}><SmartLink href={item.href}>{item.label}</SmartLink></li>
          ))}
        </ul>
        <ul className="social-list">
          {socials.map((social) => (
            <li key={social.label}>
              <SmartLink href={social.href} ariaLabel={social.label}>
                <Image className="social-main" src={social.icon} alt="" width={48} height={48} />
                <Image className="social-hover" src={social.hoverIcon} alt="" width={50} height={50} />
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>
      <ul className="company-list">
        <li>미소버스</li>
        <li>대표 정재현</li>
        <li>전화 010-5246-7695</li>
      </ul>
      <p>Copyright © MISOBUS. All rights reserved.</p>
    </footer>
  );
}

function FloatingInquiry({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  const items = [
    { label: "카톡문의", icon: `${img}icon_kakaotalk_color.svg`, href: "http://pf.kakao.com/_xafJtK" },
    { label: "전화문의", icon: `${img}icon_call_color.svg`, href: "tel:01052467695" },
    { label: "견적문의", icon: `${img}icon_calculator_color.svg`, href: "/estimate" },
  ];

  return (
    <div className="floating-box">
      <ul className={`floating-menu ${open ? "is-open" : ""}`}>
        {items.map((item) => (
          <li key={item.label}>
            <SmartLink href={item.href} ariaLabel={item.label}>
              <Image src={item.icon} alt="" width={60} height={60} />
            </SmartLink>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
      <button className="floating-button" onClick={onToggle} aria-label={open ? "문의 메뉴 닫기" : "문의 메뉴 열기"}>
        <Image src={open ? `${img}x_close.svg` : `${img}icon_inquiry.svg`} alt="문의버튼" width={60} height={60} />
      </button>
    </div>
  );
}

export function AboutPage() {
  return (
    <SiteShell active="/about">
      <section className="about-hero internal-centered">
        <span>&quot;버스 대절이 필요한 순간&quot;</span>
        <h1>버스대절이 필요한 순간, 미소버스</h1>
        <Link className="pill-dark" href="/estimate">견적/예약 문의</Link>
      </section>
      <section className="about-photo">
        <Image src={`${img}bus_main_img.jpg`} alt="도심 앞 버스" width={1920} height={800} priority />
      </section>
      <ProcessSection title="이용방법" />
      <section className="oneword-section">
        <h2>미소짓는 그날까지,<br /><span>미소버스</span></h2>
      </section>
    </SiteShell>
  );
}

function ProcessSection({ title }: { title: string }) {
  return (
    <section className="internal-process">
      <div className="section-container">
        <h2>{title}</h2>
        <p>문의를 하면, 담당자가 상담을 통해 예약을 도와드립니다.</p>
        <div className="cta-row">
          <Link className="outline-button" href="/estimate">견적/예약 문의</Link>
          <a className="outline-button icon-button" href="http://pf.kakao.com/_xafJtK" target="_blank" rel="noreferrer"><Image src={`${img}icon_kakaotalk_222.svg`} alt="" width={24} height={24} />카톡 문의</a>
          <a className="outline-button icon-button" href="tel:01052467695"><Image src={`${img}bnt_call.svg`} alt="" width={24} height={24} />전화 문의</a>
        </div>
        <ol className="process-list">
          {processSteps.map((step, index) => (
            <li key={step.label} className={index < processSteps.length - 1 ? "has-arrow" : ""}>
              <Image src={step.icon} alt="" width={50} height={50} />
              <span>{step.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CarsPage() {
  const [activeBus, setActiveBus] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const mouseStartX = useRef<number | null>(null);
  const pointerStartX = useRef<number | null>(null);
  const buses = [
    { title: "대형버스 45인승", bus: `${img}bus_28.jpg`, seat: `${img}bus_seat_45.svg` },
    { title: "우등버스 28인승", bus: `${img}bus_28.jpg`, seat: `${img}bus_seat_28.svg` },
    { title: "미니버스 25인승", bus: `${img}bus_16.jpg`, seat: `${img}bus_seat_m25.svg` },
    { title: "미니버스 16인승", bus: `${img}bus_16.jpg`, seat: `${img}bus_seat_m16.svg` },
    { title: "리무진 버스 11인승", bus: `${img}bus_11.jpg`, seat: `${img}bus_seat_11.svg` },
  ];
  const showPrevious = () => setActiveBus((current) => Math.max(current - 1, 0));
  const showNext = () => setActiveBus((current) => Math.min(current + 1, buses.length - 1));
  const updateFromDrag = (distance: number) => {
    if (Math.abs(distance) < 40) return;
    if (distance > 0) {
      showPrevious();
    } else {
      showNext();
    }
  };
  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    updateFromDrag(event.changedTouches[0].clientX - touchStartX.current);
    touchStartX.current = null;
  };
  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return;

    updateFromDrag(event.clientX - pointerStartX.current);
    pointerStartX.current = null;
  };
  const handleMouseUp = (event: MouseEvent<HTMLDivElement>) => {
    if (mouseStartX.current === null) return;

    updateFromDrag(event.clientX - mouseStartX.current);
    mouseStartX.current = null;
  };

  return (
    <SiteShell active="/our-cars">
      <section className="cars-section">
        <h1>어떤 차량이 필요하세요?</h1>
        <div className="car-stage">
          <button aria-label="이전 차량" className="car-arrow" onClick={showPrevious} disabled={activeBus === 0}>‹</button>
          <div className="car-slider-window">
            <div
              className={`car-slider-track is-index-${activeBus}`}
              onTouchStart={(event) => {
                touchStartX.current = event.touches[0].clientX;
              }}
              onTouchEnd={handleTouchEnd}
              onPointerDown={(event) => {
                pointerStartX.current = event.clientX;
              }}
              onPointerUp={handlePointerUp}
              onPointerCancel={() => {
                pointerStartX.current = null;
              }}
              onMouseDown={(event) => {
                mouseStartX.current = event.clientX;
              }}
              onMouseUp={handleMouseUp}
              onMouseLeave={() => {
                mouseStartX.current = null;
              }}
            >
              {buses.map((bus, index) => (
                <div className="car-slide" key={bus.title} aria-hidden={index !== activeBus}>
                  <div className="car-visual">
                    <Image src={bus.bus} alt={bus.title} width={500} height={260} priority={index === 0} />
                    <Image className="seat-map" src={bus.seat} alt={`${bus.title} 좌석배치도`} width={390} height={160} />
                  </div>
                  <h2>{bus.title}</h2>
                </div>
              ))}
            </div>
          </div>
          <button aria-label="다음 차량" className="car-arrow" onClick={showNext} disabled={activeBus === buses.length - 1}>›</button>
        </div>
        <div className="car-thumbs">
          {buses.map((bus, index) => (
            <button
              className={index === activeBus ? "active" : undefined}
              key={bus.title}
              onClick={() => setActiveBus(index)}
              aria-label={`${bus.title} 보기`}
              aria-current={index === activeBus ? "true" : undefined}
            >
              <Image src={bus.bus} alt="" width={76} height={76} />
            </button>
          ))}
        </div>
        <p className="car-note">위 버스 이미지와 실제 차량은 차이가 있을 수 있습니다.</p>
        <div className="etc-cars">
          <div><Image src={`${img}etc_bus.svg`} alt="" width={42} height={42} /><Image src={`${img}etc_car.svg`} alt="" width={42} height={42} /></div>
          <h2>기타</h2>
          <p>이외 다양한 사이즈의 버스도 준비되어 있습니다.</p>
        </div>
      </section>
    </SiteShell>
  );
}

export function CustomerSupportPage() {
  return (
    <SiteShell active="/cs">
      <section className="support-hero">
        <h1>도움이 필요하신가요?</h1>
        <p>평일 10:00 ~ 17:00</p>
        <div className="support-actions">
          <a href="tel:01052467695"><Image src={`${img}icon_call.svg`} alt="" width={70} height={70} /><strong>전화 상담</strong><span>010-5246-7695</span></a>
          <a href="http://pf.kakao.com/_xafJtK" target="_blank" rel="noreferrer"><Image src={`${img}icon_talk.svg`} alt="" width={70} height={70} /><strong>카카오톡 상담</strong><span>(클릭)</span></a>
          <Link href="/estimate"><Image src={`${img}icon_estimate.svg`} alt="" width={70} height={70} /><strong>견적문의</strong><span>(클릭)</span></Link>
        </div>
      </section>
      <section className="faq-section">
        <div className="breadcrumb">홈 〉 고객지원</div>
        <h1>자주하는 질문</h1>
        <div className="faq-tabs"><span>이용안내</span><span>결제/환불</span></div>
        {["어떻게 예약을 하나요?", "탑승인원은 1명 초과할 수 있나요?"].map((q) => (
          <details className="faq-item" key={q}>
            <summary><b>Q.</b>{q}<span>+</span></summary>
            <p>연락의 지혜는 긴지라 가진 피가 노년에게서 사막이다. 무엇 꽃이 것은 우리의 미인을 석가는 힘있다.</p>
          </details>
        ))}
      </section>
    </SiteShell>
  );
}

export function EstimatePage() {
  return (
    <SiteShell active="/estimate">
      <section className="estimate-section">
        <h1>견적문의/예약</h1>
        <p>문의를 남겨주시면, 빠른시간내에 답변을 드리거나 상담을 통해 예약을 도와드립니다.</p>
        <Link className="write-button top" href="/estimate/new">견적/예약 문의글 작성</Link>
        <div className="estimate-list">
          {estimates.map(([name, date, from, to]) => (
            <article className="estimate-card" key={`${name}-${date}-${from}`}>
              <div className="estimate-name"><strong>{name}</strong><span>{date}</span></div>
              <div className="estimate-route"><p><b>출발</b>{from}</p><p><b>도착</b>{to}</p></div>
              <span className="status-pill">문의접수</span>
              <a className="detail-link" href="#">자세히 〉</a>
            </article>
          ))}
        </div>
        <Link className="write-button bottom" href="/estimate/new">견적/예약 문의글 작성</Link>
      </section>
    </SiteShell>
  );
}

export function TermsPage() {
  return (
    <SiteShell>
      <LegalPage title="이용약관" crumb="이용약관">
        <p>이용약관 내용이 들어갑니다.</p>
      </LegalPage>
    </SiteShell>
  );
}

export function PrivacyPage() {
  return (
    <SiteShell>
      <LegalPage title="개인정보 처리방침" crumb="개인정보 처리방침">
        {privacySections.map(([heading, body]) => (
          <section key={heading}>
            <h2>{heading}</h2>
            <p>{body}</p>
          </section>
        ))}
      </LegalPage>
    </SiteShell>
  );
}

function LegalPage({ title, crumb, children }: { title: string; crumb: string; children: React.ReactNode }) {
  return (
    <section className="legal-section">
      <div className="breadcrumb">홈 〉 {crumb}</div>
      <div className="legal-content">
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}
