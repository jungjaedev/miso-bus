"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChatIcon, CloseIcon, MenuIcon, PhoneIcon } from "@/components/icons";
import type { HeroCard, NavItem, NoticeItem, ProcessStep, ServiceItem, SocialLink } from "@/types/misobus";

const img = "/images/misobus/";

const navItems: NavItem[] = [
  { label: "미소버스 소개", href: "/about" },
  { label: "차량안내", href: "/our-cars" },
  { label: "고객지원", href: "/cs" },
  { label: "견적문의", href: "/estimate" },
];

const heroCards: HeroCard[] = [
  { src: `${img}card1.png`, alt: "전국어디서나", variant: "vertical" },
  { src: `${img}card2a.png`, alt: "누구든지", variant: "horizontal" },
  { src: `${img}card3.png`, alt: "어떤 버스든지", variant: "vertical" },
];

const services: ServiceItem[] = [
  { label: "단체관광", src: `${img}li_tour.png`, alt: "단체관광" },
  { label: "결혼식", src: `${img}li_wedding.png`, alt: "결혼식" },
  { label: "산악회/동호회", src: `${img}li_mountain.png`, alt: "산악회/동호회" },
  { label: "워크샵", src: `${img}li_workshop.png`, alt: "워크샵" },
  { label: "견학/수학여행", src: `${img}li_group.png`, alt: "견학/수학여행" },
  { label: "기타", src: `${img}li_etc.png`, alt: "기타" },
];

const processSteps: ProcessStep[] = [
  { label: "문의", icon: `${img}i_question.svg` },
  { label: "상담", icon: `${img}i_chats.svg` },
  { label: "예약", icon: `${img}i_calendar.svg` },
  { label: "운행", icon: `${img}i_bus.svg` },
];

const notices: NoticeItem[] = [
  { title: "안녕하세요. 미소버스 서비스 준비중입니다.", date: "2021-07-10" },
  { title: "안녕하세요. 곧 서비스가 시작됩니다.", date: "2021-07-10" },
  { title: "서비스 준비중입니다.", date: "2021-07-10" },
];

const faqs: NoticeItem[] = [
  { title: "가격이 얼마인가요?" },
  { title: "탑승인원은 1명 초과할 수 있나요?" },
  { title: "환불은 어떻게 받을 수 있나요?" },
];

const socials: SocialLink[] = [
  { label: "카카오톡 상담", icon: `${img}icon_kakaotalk_222.svg`, hoverIcon: `${img}icon_kakaotalk.svg`, href: "http://pf.kakao.com/_xafJtK" },
  { label: "인스타그램", icon: `${img}icon_instagram_222.svg`, hoverIcon: `${img}icon_instagram.svg`, href: "https://www.instagram.com/misobus" },
  { label: "블로그", icon: `${img}icon_blog_black.svg`, hoverIcon: `${img}icon_blog.svg`, href: "https://blog.naver.com/miso-bus" },
];

export function MisobusPage() {
  const [sideOpen, setSideOpen] = useState(false);
  const [floatOpen, setFloatOpen] = useState(false);
  const [busVisible, setBusVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("scrol-hidden", sideOpen);
    return () => document.body.classList.remove("scrol-hidden");
  }, [sideOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setBusVisible(entry.isIntersecting),
      { rootMargin: "-20% 0px -20% 0px", threshold: 0.05 },
    );
    const target = document.querySelector("[data-bus-image]");
    if (target) observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setServicesVisible(entry.isIntersecting),
      { rootMargin: "-10% 0px -10% 0px", threshold: 0.05 },
    );
    const target = document.querySelector("[data-service-grid]");
    if (target) observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="misobus-page">
      <Header sideOpen={sideOpen} onMenu={() => setSideOpen(true)} onClose={() => setSideOpen(false)} />
      <HeroSection />
      <ServiceSection visible={servicesVisible} />
      <BusImageSection visible={busVisible} />
      <InquirySection />
      <NoticeFaqSection />
      <Footer />
      <FloatingInquiry open={floatOpen} onToggle={() => setFloatOpen((open) => !open)} />
    </main>
  );
}

function Header({ sideOpen, onMenu, onClose }: { sideOpen: boolean; onMenu: () => void; onClose: () => void }) {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="주 메뉴">
        <button className="mobile-menu-button" onClick={onMenu} aria-label="메뉴 열기">
          <MenuIcon />
        </button>
        <Link className="brand" href="/" aria-label="미소버스 홈">
          <Image src={`${img}miso_logo.svg`} alt="미소버스 로고" width={220} height={44} priority />
        </Link>
        <ul className="desktop-nav">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`side-menu ${sideOpen ? "is-open" : ""}`} aria-hidden={!sideOpen}>
        <button className="side-close" onClick={onClose} aria-label="메뉴 닫기">
          <CloseIcon />
        </button>
        <Link className="side-logo" href="/">
          <Image src={`${img}logo.svg`} alt="미소버스 로고" width={137} height={37} />
        </Link>
        <ul>
          {navItems.map((item) => (
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
  );
}

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="section-container hero-container">
        <div className="hero-copy">
          <span>“버스대절이 필요한 순간”</span>
          <h1><b>함께 이동할 땐</b><strong>미소버스</strong></h1>
        </div>
        <div className="hero-cards" aria-label="미소버스 장점">
          {heroCards.map((card) => (
            <Image
              key={card.alt}
              className={`hero-card ${card.variant}`}
              src={card.src}
              alt={card.alt}
              width={card.variant === "vertical" ? 450 : 600}
              height={card.variant === "vertical" ? 601 : 451}
              priority
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceSection({ visible }: { visible: boolean }) {
  return (
    <section className="service-section">
      <div className="section-container">
        <h2>버스대절이 필요한 순간,<br className="mobile-break" /> 미소버스가 찾아갑니다.</h2>
        <p>단체관광, 결혼식, 산악모임, 워크샵 등 각종행사에 필요한 버스를 예약할 수 있어요.</p>
        <ul className={`service-grid ${visible ? "is-visible" : ""}`} data-service-grid>
          {services.map((service) => (
            <li key={service.label}>
              <Image src={service.src} alt={service.alt} width={430} height={430} />
              <span>{service.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BusImageSection({ visible }: { visible: boolean }) {
  return (
    <section className="bus-image-section" data-bus-image>
      <Image className={`bus-desktop ${visible ? "is-visible" : ""}`} src={`${img}bus_main_img.jpg`} alt="건물앞 버스" width={1920} height={800} />
      <Image className={`bus-mobile ${visible ? "is-visible" : ""}`} src={`${img}bus_main_img_m.jpg`} alt="건물앞 버스" width={720} height={500} />
    </section>
  );
}

function InquirySection() {
  return (
    <section className="inquiry-section">
      <div className="section-container">
        <h2>미소버스와 안전한 여정을 시작하세요.</h2>
        <p>문의를 하면, 담당자가 상담을 통해 예약을 도와드립니다.</p>
        <div className="cta-row">
          <Link className="outline-button" href="/about">미소버스 소개</Link>
          <Link className="dark-button" href="/estimate">견적/예약 문의</Link>
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

function NoticeFaqSection() {
  return (
    <section className="notice-section">
      <div className="section-container notice-grid">
        <InfoPanel title="공지사항" items={notices} />
        <InfoPanel title="자주하는 질문" items={faqs} />
      </div>
    </section>
  );
}

function InfoPanel({ title, items }: { title: string; items: NoticeItem[] }) {
  return (
    <div className="info-panel">
      <div className="panel-head">
        <h2>{title}</h2>
        <a href="#">더보기 <Image src={`${img}plus_222.svg`} alt="" width={12} height={12} /></a>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <a href="#">{item.title}</a>
            {item.date ? <span>{item.date}</span> : null}
          </li>
        ))}
      </ul>
    </div>
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
            {item.href.startsWith("/") ? (
              <Link href={item.href} aria-label={item.label}>
                <Image src={item.icon} alt="" width={60} height={60} />
              </Link>
            ) : (
              <a href={item.href} aria-label={item.label} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
                <Image src={item.icon} alt="" width={60} height={60} />
              </a>
            )}
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

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-container footer-top">
        <ul className="footer-menu">
          {[
            { label: "고객지원", href: "/cs" },
            { label: "이용약관", href: "/term-and-service" },
            { label: "개인정보보호정책", href: "/personal-info-policy" },
            { label: "로그인", href: "#" },
          ].map((item) => (
            <li key={item.label}><Link href={item.href}>{item.label}</Link></li>
          ))}
        </ul>
        <ul className="social-list">
          {socials.map((social) => (
            <li key={social.label}>
              <a href={social.href} aria-label={social.label} target="_blank" rel="noreferrer">
                <Image className="social-main" src={social.icon} alt="" width={48} height={48} />
                {social.hoverIcon ? <Image className="social-hover" src={social.hoverIcon} alt="" width={50} height={50} /> : null}
              </a>
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
