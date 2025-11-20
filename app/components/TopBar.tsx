// app/components/TopBar.tsx
"use client";

export default function TopBar() {
  return (
    <header
      style={{
        padding: "48px 16px 60px",
        textAlign: "center",
        color: "#111827",
        background: `
          radial-gradient(circle at 20% 20%, #eef2ff 0%, #f8faff 40%, #f5f7fb 100%),
          url("https://grainy-gradients.vercel.app/noise.svg")
        `,
        backgroundSize: "cover",
        backgroundBlendMode: "soft-light",
        backdropFilter: "blur(4px)",
      }}
    >
      {/* 제목 */}
      <h1
        style={{
          fontSize: "30px",
          fontWeight: 800,
          margin: 0,
          letterSpacing: "-0.03em",
        }}
      >
        드림복권 시즌1
      </h1>

      {/* 부제 */}
      <p
        style={{
          marginTop: "10px",
          fontSize: "15px",
          color: "#555",
          fontWeight: 400,
        }}
      >
        천 원으로 서로의 꿈을 잇는 작은 실험
      </p>

      <div
        style={{
          display: "inline-block",
          marginTop: "16px",
          padding: "8px 16px",
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
