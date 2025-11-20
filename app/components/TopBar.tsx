// app/components/TopBar.tsx
"use client";

export default function TopBar() {
  return (
    <header
      style={{
        padding: "32px 16px 40px",
        textAlign: "center",
        background: "linear-gradient(180deg, #f8faff 0%, #f5f7fb 90%)",
      }}
    >
      {/* 제목 */}
      <h1
        style={{
          fontSize: "28px",
          fontWeight: 800,
          margin: 0,
          color: "#111827",
          letterSpacing: "-0.03em",
        }}
      >
        드림복권 시즌1
      </h1>

      {/* 부제 */}
      <p
        style={{
          marginTop: "10px",
          fontSize: "14px",
          color: "#6b7280",
          fontWeight: 400,
        }}
      >
        천 원으로 서로의 꿈을 잇는 작은 실험
      </p>

      {/* 시즌 배지 */}
      <div
        style={{
          display: "inline-block",
          marginTop: "14px",
          padding: "6px 14px",
          borderRadius: "999px",
          background: "#eef2ff",
          color: "#4f46e5",
          fontWeight: 600,
          fontSize: "13px",
        }}
      >
        시즌1 진행 중
      </div>
    </header>
  );
}
