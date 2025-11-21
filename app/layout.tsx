// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import TopBar from "./components/TopBar";
import MobileNav from "./components/MobileNav";

export const metadata: Metadata = {
  title: "드림로또 시즌1",
  description: "천 원으로 서로의 꿈을 잇는 작은 실험",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        style={{
          background: "#f5f7fb",
          margin: 0,
          padding: 0,
        }}
      >
        {/* 🔒 상단 영역 전체를 고정 */}
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
          }}
        >
          <TopBar />
          <MobileNav />
        </div>

        {/* 페이지 내용 */}
        <main
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "20px 16px 40px",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
