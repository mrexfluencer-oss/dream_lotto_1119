// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "드림복권 시즌1",
  description: "꿈을 응원하는 드림로또 프로젝트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #f5f7fb 0%, #eef3ff 50%, #f9f9ff 100%)",
        }}
      >
        {/* ================================== */}
        {/*            상단 고정 헤더             */}
        {/* ================================== */}
        <header
  style={{
    position: "sticky",
    top: 0,
    zIndex: 50,
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderBottom: "1px solid #e5e7eb",
    backdropFilter: "blur(12px)",
  }}
>
  <div
    style={{
      maxWidth: "960px",
      margin: "0 auto",
      padding: "18px 16px 12px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "14px",
    }}
  >
    {/* 중앙 타이틀 */}
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
      }}
    >
      <span
        style={{
          fontSize: "24px",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "#111827",
        }}
      >
        드림복권 시즌1
      </span>

      <span
        style={{
          fontSize: "13px",
          color: "#6b7280",
          fontWeight: 500,
        }}
      >
        천 원으로 서로의 꿈을 잇는 작은 실험
      </span>

      <span
        style={{
          marginTop: "6px",
          fontSize: "11px",
          padding: "4px 10px",
          borderRadius: "999px",
          backgroundColor: "#e5e8ff",
          color: "#4338ca",
          fontWeight: 600,
        }}
      >
        시즌1 진행 중
      </span>
    </div>

    {/* 네비게이션 */}
    <nav
  style={{
    display: "flex",
    gap: "6px",
    flexWrap: "wrap",
    justifyContent: "center",
    fontSize: "12px",
  }}
>
  {/* 홈 */}
  <Link
    href="/"
    style={{
      padding: "5px 10px",
      borderRadius: "999px",
      backgroundColor: "#111827",
      color: "#fff",
      fontWeight: 600,
      textDecoration: "none",
    }}
  >
    홈
  </Link>

  {/* 프로젝트 소개 */}
  <Link
    href="/project"
    style={{
      padding: "5px 10px",
      borderRadius: "999px",
      backgroundColor: "#f3f4f6",
      color: "#374151",
      fontWeight: 500,
      textDecoration: "none",
      whiteSpace: "nowrap",
    }}
  >
    프로젝트 소개
  </Link>

  {/* 기획자 소개 */}
  <Link
    href="/creator"
    style={{
      padding: "5px 10px",
      borderRadius: "999px",
      backgroundColor: "#f3f4f6",
      color: "#374151",
      fontWeight: 500,
      textDecoration: "none",
      whiteSpace: "nowrap",
    }}
  >
    기획자 소개
  </Link>

  {/* FAQ */}
  <Link
    href="/faq"
    style={{
      padding: "5px 10px",
      borderRadius: "999px",
      backgroundColor: "#f3f4f6",
      color: "#374151",
      fontWeight: 500,
      textDecoration: "none",
      whiteSpace: "nowrap",
    }}
  >
    FAQ
  </Link>

  {/* 협업 및 문의 */}
  <Link
    href="/contact"
    style={{
      padding: "5px 10px",
      borderRadius: "999px",
      backgroundColor: "#f3f4f6",
      color: "#374151",
      fontWeight: 500,
      textDecoration: "none",
      whiteSpace: "nowrap",
    }}
  >
    협업 및 문의
  </Link>
</nav>

    </div>
  </header>


        {/* ================================== */}
        {/*              페이지 본문             */}
        {/* ================================== */}
        <main
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "24px 16px 40px",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
