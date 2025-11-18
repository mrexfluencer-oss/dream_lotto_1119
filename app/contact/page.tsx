export default function ContactPage() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "24px 16px",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "22px",
          fontWeight: 700,
          marginBottom: "12px",
        }}
      >
        협업 및 문의
      </h1>
      <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#444" }}>
        드림복권 프로젝트와의 협업, 후원, 인터뷰 제안 등은 아래 연락처로
        보내주세요.
      </p>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginTop: "12px",
          fontSize: "13px",
          color: "#444",
        }}
      >
        <li>📩 이메일: mr.exfluencer@gmail.com</li>
        <li>📷 인스타그램: @mr.exfluencer</li>
      </ul>
    </div>
  );
}
