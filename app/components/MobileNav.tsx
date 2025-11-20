"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 햄버거 버튼 */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          top: "16px",
          right: "16px",
          zIndex: 50,
          width: "36px",
          height: "36px",
          borderRadius: "8px",
          background: "#fff",
          border: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        ☰
      </button>

      {/* 오버레이 전체 영역 */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 40,
          }}
        ></div>
      )}

      {/* 슬라이드 메뉴 */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          right: open ? 0 : "-260px",
          width: "260px",
          height: "100vh",
          background: "#fff",
          zIndex: 50,
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          transition: "right 0.3s ease",
          boxShadow: "-4px 0 16px rgba(0,0,0,0.08)",
        }}
      >
        <button
          onClick={() => setOpen(false)}
          style={{
            alignSelf: "flex-end",
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        <Link href="/" style={linkStyle}>Home</Link>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <span style={{ fontWeight: 600, color: "#333" }}>About</span>
          <Link href="/project" style={subLinkStyle}>프로젝트 소개</Link>
          <Link href="/creator" style={subLinkStyle}>기획자 소개</Link>
        </div>

        <Link href="/faq" style={linkStyle}>FAQ</Link>
        <Link href="/contact" style={linkStyle}>Contact</Link>
      </nav>
    </>
  );
}

const linkStyle = {
  color: "#333",
  fontSize: "16px",
  textDecoration: "none",
  padding: "4px 0",
};

const subLinkStyle = {
  marginLeft: "12px",
  fontSize: "14px",
  color: "#666",
  textDecoration: "none",
};
