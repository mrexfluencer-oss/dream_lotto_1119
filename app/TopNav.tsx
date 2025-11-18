// app/TopNav.tsx
import Link from "next/link";

export default function TopNav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background:
          "linear-gradient(135deg, #f5f7fb 0%, #eef3ff 50%, #f9f9ff 100%)",
        borderBottom: "1px solid #e0e4f0",
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "16px 16px 10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {/* 왼쪽 상단 제목 영역 */}
        <div
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#222",
          }}
        >
          드림복권 시즌1
        </div>

        {/* 탭/메뉴 영역 */}
        <nav
          style={{
            display: "flex",
            gap: "12px",
            fontSize: "14px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" style={{ color: "#333", textDecoration: "none" }}>
            홈
          </Link>
          <Link
            href="/how-to"
            style={{ color: "#333", textDecoration: "none" }}
          >
            참여 방법
          </Link>
          <Link
            href="/creator"
            style={{ color: "#333", textDecoration: "none" }}
          >
            기획자 소개
          </Link>
          <Link href="/faq" style={{ color: "#333", textDecoration: "none" }}>
            FAQ
          </Link>
          <Link
            href="/contact"
            style={{ color: "#333", textDecoration: "none" }}
          >
            협업 및 문의
          </Link>
        </nav>
      </div>
    </header>
  );
}
