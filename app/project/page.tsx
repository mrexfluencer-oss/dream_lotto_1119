"use client";

import Link from "next/link";

export default function ProjectPage() {
  return (
    <div
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "24px 16px 40px",
      }}
    >
      {/* HERO 섹션 */}
      <section style={{ textAlign: "center", marginBottom: "56px" }}>
        <h1
          style={{
            fontSize: "26px",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#111827",
            marginBottom: "12px",
          }}
        >
          모든 꿈은 가치가 있습니다.
        </h1>

        <p
          style={{
            fontSize: "14px",
            color: "#6b7280",
            lineHeight: 1.6,
            maxWidth: "600px",
            margin: "0 auto 12px",
          }}
        >
          드림복권은 작은 실행이 모여 큰 변화를 만드는 실험입니다.  
          우리는 어떤 꿈도 평가하지 않습니다.  
          경쟁이 아닌, 응원으로 연결되는 새로운 방식의 지원 구조입니다.
        </p>

        <span
          style={{
            display: "inline-block",
            marginTop: "10px",
            fontSize: "12px",
            padding: "6px 12px",
            borderRadius: "999px",
            backgroundColor: "#e5e8ff",
            color: "#4338ca",
            fontWeight: 600,
          }}
        >
          드림복권 시즌1 · 꿈 응원 프로젝트
        </span>
      </section>

      {/* WHY 섹션 */}
      <section style={{ marginBottom: "64px" }}>
        <h2
          style={{
            fontSize: "20px",
            fontWeight: 700,
            marginBottom: "14px",
            letterSpacing: "-0.02em",
          }}
        >
          왜 드림복권인가요?
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* 카드 1 */}
          <div
            style={{
              background: "#fafbff",
              borderRadius: "14px",
              padding: "20px 18px",
              border: "1px solid #eef0f7",
            }}
          >
            <h3
              style={{
                fontSize: "15px",
                fontWeight: 700,
                marginBottom: "6px",
                color: "#111827",
              }}
            >
              우리는 어떤 꿈도 평가하지 않습니다.
            </h3>
            <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: 1.55 }}>
              꿈의 크기나 가능성, 스펙으로 판단하지 않습니다.  
              누군가에겐 작아 보이는 꿈도, 그 사람의 삶을 바꿀 힘을 가졌기 때문입니다.
            </p>
          </div>

          {/* 카드 2 */}
          <div
            style={{
              background: "#fafbff",
              borderRadius: "14px",
              padding: "20px 18px",
              border: "1px solid #eef0f7",
            }}
          >
            <h3
              style={{
                fontSize: "15px",
                fontWeight: 700,
                marginBottom: "6px",
                color: "#111827",
              }}
            >
              말이 아닌 ‘실행’이 일어나는 구조입니다.
            </h3>
            <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: 1.55 }}>
              실행은 꿈을 현실로 끌어오는 가장 강력한 방법입니다.  
              드림복권은 실행이 발생하는 것을 목표로 합니다.
            </p>
          </div>

          {/* 카드 3 */}
          <div
            style={{
              background: "#fafbff",
              borderRadius: "14px",
              padding: "20px 18px",
              border: "1px solid #eef0f7",
            }}
          >
            <h3
              style={{
                fontSize: "15px",
                fontWeight: 700,
                marginBottom: "6px",
                color: "#111827",
              }}
            >
              누구나 부담 없이 참여할 수 있습니다.
            </h3>
            <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: 1.55 }}>
              1,000원이라는 작은 금액으로  
              누구나 다른 사람의 꿈을 응원할 수 있습니다.  
              이 작은 응원이 내 꿈의 첫 걸음을 만들 수도 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* HOW 섹션 */}
      <section style={{ marginBottom: "64px" }}>
        <h2
          style={{
            fontSize: "20px",
            fontWeight: 700,
            marginBottom: "16px",
            letterSpacing: "-0.02em",
          }}
        >
          어떻게 운영되나요?
        </h2>

        <ol
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "22px",
            paddingLeft: "18px",
          }}
        >
          <li style={{ fontSize: "15px", color: "#374151", lineHeight: 1.6 }}>
            <strong>1) 참가자들은 1,000원을 후원합니다.</strong><br />
            모든 모금액은 실시간으로 공개됩니다.
          </li>

          <li style={{ fontSize: "15px", color: "#374151", lineHeight: 1.6 }}>
            <strong>2) 시즌 종료 후 실시간 랜덤 추첨이 진행됩니다.</strong><br />
            유튜브·인스타그램 라이브로 누구나 확인할 수 있습니다.
          </li>

          <li style={{ fontSize: "15px", color: "#374151", lineHeight: 1.6 }}>
            <strong>3) 당첨자에게 꿈 실행 지원금을 전달합니다.</strong><br />
            인터뷰 및 실행 과정은 콘텐츠로 제작됩니다.
          </li>

          <li style={{ fontSize: "15px", color: "#374151", lineHeight: 1.6 }}>
            <strong>4) 시즌마다 새로운 주제로 다시 시작됩니다.</strong><br />
            드림복권은 지속적인 실행 실험입니다.
          </li>
        </ol>
      </section>

      {/* 철학 섹션 */}
      <section style={{ marginBottom: "64px" }}>
        <h2
          style={{
            fontSize: "20px",
            fontWeight: 700,
            marginBottom: "16px",
            letterSpacing: "-0.02em",
          }}
        >
          프로젝트 철학
        </h2>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {[
            "우리는 어떤 꿈도 평가하지 않습니다.",
            "작은 실행이 큰 변화를 만듭니다.",
            "꿈의 크기보다 더 중요한 것은 ‘당신의 이야기’입니다.",
            "모두가 자신의 속도로 꿈을 향해 나아갈 수 있도록.",
          ].map((text, idx) => (
            <li
              key={idx}
              style={{
                background: "#fafbff",
                borderRadius: "14px",
                padding: "16px 18px",
                border: "1px solid #eef0f7",
                fontSize: "14px",
                color: "#374151",
                lineHeight: 1.55,
              }}
            >
              {text}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA (참여하기) */}
      <section style={{ textAlign: "center", marginTop: "40px" }}>
        <Link
          href="/"
          style={{
            display: "inline-block",
            background:
              "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
            color: "#fff",
            padding: "14px 24px",
            borderRadius: "999px",
            fontSize: "15px",
            fontWeight: 600,
            textDecoration: "none",
            boxShadow:
              "0 6px 20px rgba(99, 102, 241, 0.25)",
          }}
        >
          드림복권 시즌1 참여하기
        </Link>

        <p
          style={{
            fontSize: "12px",
            color: "#6b7280",
            marginTop: "12px",
          }}
        >
          작은 응원이 누군가의 첫 걸음을 만들 수 있습니다.
        </p>
      </section>
    </div>
  );
}
