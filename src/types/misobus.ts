export interface NavItem {
  label: string;
  href: string;
}

export interface HeroCard {
  src: string;
  alt: string;
  variant: "vertical" | "horizontal";
}

export interface ServiceItem {
  label: string;
  src: string;
  alt: string;
}

export interface ProcessStep {
  label: string;
  icon: string;
}

export interface NoticeItem {
  title: string;
  date?: string;
}

export interface SocialLink {
  label: string;
  icon: string;
  hoverIcon?: string;
  href: string;
}
