import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://misobus.com"),
  title: "미소버스",
  description: "버스대절이 필요한 순간, 미소버스가 함께 합니다.",
  openGraph: {
    title: "미소버스",
    description: "버스대절이 필요한 순간, 미소버스가 함께 합니다.",
    locale: "ko_KR",
    type: "website",
    images: ["/seo/miso_identity.jpg"],
  },
  icons: {
    icon: "/seo/favicon-32x32.png",
    apple: "/seo/apple-icon-114x114.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSansKr.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
