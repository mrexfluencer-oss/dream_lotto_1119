// app/components/TopBar.tsx
"use client";

import { useEffect, useState } from "react";

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTxFhN6mGmLnyK0z5mV9_6iATEbB9fc5S6sWuUVwr1Ab_MPa3uN8Ok2LrnzkQ_6_8wJMUoboTNo6OFa/pub?gid=395331118&single=true&output=csv";

export default function TopBar() {
  const [participantCount, setParticipantCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch(SHEET_CSV_URL);
        const text = await res.text();
        const lines = text.trim().split("\n");
        const rows = lines.slice(1); // 헤더 제외
        setParticipantCount(rows.length);
      } catch (e) {
        console.error("Failed to load sheet", e);
      }
    };

    fetchCount();
  }, []);

  const totalAmount = participantCount * 1000;

  return (
    <header
      style={{
        background:
          "linear-gradient(135deg, #f5f7fb 0%, #eef3ff 40%, #f9f9ff 100%)",
        padding: "10px 16px 18px",
        borderBottom: "1px solid rgba(148, 163, 184, 0.25)",
      }}
    >
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* 제목 / 부제 / 배지 */}
        <h1
          style={{
            fontSize: "26px",
            fontWeight: 800,
            margin: 0,
            letterSpacing: "-0.03em",
            color: "#111827",
          }}
        >
          드림복권 시즌1
        </h1>
        <p
          style={{
            marginTop: "8px",
            marginBottom: "10px",
            fontSize: "14px",
            color: "#6b7280",
          }}
        >
          천 원으로 서로의 꿈을 잇는 작은 실험
        </p>

        {/* 프로젝트 소개 버튼 (아이콘 + 라운드 버튼) */}
<div
  style={{
    display: "flex",
    justifyContent: "center",
    marginBottom: "14px",
  }}
>
  <a
    href="/project"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "6px 12px",
      borderRadius: "999px",
      border: "1px solid #d0d7e6",
      backgroundColor: "#f8fafc",
      fontSize: "12px",
      color: "#2563eb",
      fontWeight: 600,
      textDecoration: "none",
      boxShadow: "0 0 0 1px rgba(0,0,0,0.02)",
    }}
  >
    <span
      style={{
        display: "inline-block",
        width: "14px",
        height: "14px",
        borderRadius: "50%",
        border: "1.5px solid #2563eb",
        color: "#2563eb",
        fontSize: "9px",
        textAlign: "center",
        lineHeight: "11px",
      }}
    >
      i
    </span>
    프로젝트 소개 바로가기
  </a>
</div>


{/* 참여 현황 카드 */}
<div
  className="topbar-stats"   // ← 여기가 정확한 위치!
  style={{
    marginTop: "18px",
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    flexWrap: "wrap",
  }}
>
  {/* 참여자 수 */}
  <div
    style={{
      flex: "1 1 150px",
      maxWidth: "280px",
      borderRadius: "14px",
      padding: "10px 16px",
      backgroundColor: "#f7f9ff",
      border: "1px solid #e4e8ff",
    }}
  >
    <div style={{ fontSize: "12px", color: "#7a82a2" }}>
      현재 참여자 수
    </div>
    <div
      style={{
        fontSize: "22px",
        fontWeight: 700,
        marginTop: "4px",
        color: "#222",
      }}
    >
      {participantCount.toLocaleString()}명
    </div>
  </div>

  {/* 모금액 */}
  <div
    style={{
      flex: "1 1 150px",
      maxWidth: "280px",
      borderRadius: "14px",
      padding: "10px 16px",
      backgroundColor: "#fff8f4",
      border: "1px solid #ffe2c8",
    }}
  >
    <div style={{ fontSize: "12px", color: "#b07c4f" }}>현재 모금액</div>
    <div
      style={{
        fontSize: "22px",
        fontWeight: 700,
        marginTop: "4px",
        color: "#222",
      }}
    >
      {totalAmount.toLocaleString()}원
    </div>
  </div>
</div>

      </div>
     
    </header>
  );
}
