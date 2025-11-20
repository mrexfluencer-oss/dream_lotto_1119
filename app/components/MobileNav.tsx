// app/components/MobileNav.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // 메뉴 클릭 시 자동 닫히기
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* 햄버거 버튼 */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          top: "18px",
          right: "16px",
          zIndex: 1000,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "28px",
        }}
      >
        ☰
      </button>

      {/* 오버레이 */}
      {open && (
        <div
          onClick={closeMenu}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 900,
          }}
        />
      )}

      {/* 메뉴 패널 */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: open ? 0 : "-70%",
          width: "70%",
          height: "100%",
          background: "#fff",
          boxShadow: "-4px 0 16px rgba(0,0,0,0.1)",
          padding: "20px",
          zIndex: 1001,
          transition: "right 0.28s ease",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={closeMenu}
          style={{
            background: "transparent",
            border: "none",
            fontSize: "24px",
            alignSelf: "flex-end",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        {/* 메뉴 리스트 */}
        <Link
          href="/"
          onClick={closeMenu}
          style={menuStyle}
        >
          홈
        </Link>

        {/* About → 두 개의 하위 메뉴 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p style={{ fontWeight: 600, margin: 0 }}>About</p>

          <Link
            href="/project"
            onClick={closeMenu}
            style={submenuStyle}
          >
            프로젝트 소개
          </Link>

          <Link
            href="/creator"
            onClick={closeMenu}
            style={submenuStyle}
          >
            기획자 소개
          </Link>
        </div>

        <Link
          href="/faq"
          onClick={closeMenu}
          style={menuStyle}
        >
          FAQ
        </Link>

        <Link
          href="/contact"
          onClick={closeMenu}
          style={menuStyle}
        >
          협업 및 문의
        </Link>
      </div>
    </>
  );
}

// 스타일 분리
const menuStyle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: 600,
  textDecoration: "none",
  color: "#333",
};

const submenuStyle: React.CSSProperties = {
  marginLeft: "12px",
  fontSize: "14px",
  color: "#555",
  textDecoration: "none",
};
