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
        {/* ✅ 상단 고정 헤더 */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            backgroundColor: "rgba(248, 250, 252, 0.96)", // 거의 흰색
            borderBottom: "1px solid #e2e8f0",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            style={{
              maxWidth: "960px",
              margin: "0 auto",
              padding: "10px 16px 8px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            {/* 제목 + 작은 설명 한 줄 */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: 800,
                    letterSpacing: "-0.04em",
                    color: "#111827",
                  }}
                >
                  드림복권 시즌1
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    color: "#6b7280",
                  }}
                >
                  천 원으로 서로의 꿈을 잇는 작은 실험
                </span>
              </div>

              {/* 오른쪽 작게 시즌 뱃지 */}
              <span
                style={{
                  fontSize: "11px",
                  padding: "4px 8px",
                  borderRadius: "999px",
                  backgroundColor: "#eef2ff",
                  color: "#4f46e5",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                시즌1 진행 중
              </span>
            </div>

            {/* 네비게이션 탭 */}
            <nav
              style={{
                display: "flex",
                gap: "8px",
                fontSize: "13px",
                flexWrap: "wrap",
                marginTop: "4px",
              }}
            >
              <Link
                href="/"
                style={{
                  padding: "6px 10px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  backgroundColor: "#111827",
                  color: "#ffffff",
                  fontWeight: 500,
                }}
              >
                홈
              </Link>

              <Link
                href="/how-to"
                style={{
                  padding: "6px 10px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  backgroundColor: "#f3f4f6",
                  color: "#374151",
                }}
              >
                참여 방법
              </Link>

              <Link
                href="/creator"
                style={{
                  padding: "6px 10px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  backgroundColor: "#f3f4f6",
                  color: "#374151",
                }}
              >
                기획자 소개
              </Link>

              <Link
                href="/faq"
                style={{
                  padding: "6px 10px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  backgroundColor: "#f3f4f6",
                  color: "#374151",
                }}
              >
                FAQ
              </Link>

              <Link
                href="/contact"
                style={{
                  padding: "6px 10px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  backgroundColor: "#f3f4f6",
                  color: "#374151",
                }}
              >
                협업 및 문의
              </Link>
            </nav>
          </div>
        </header>

        {/* ✅ 페이지 본문 */}
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

