export default function HowToPage() {
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
        드림복권 참여 방법
      </h1>
      <ol style={{ paddingLeft: "18px", fontSize: "14px", lineHeight: 1.6 }}>
        <li>와디즈에서 드림복권 시즌1 프로젝트를 1,000원 후원합니다.</li>
        <li>결제 완료 후 안내되는 링크를 통해 응모용 구글폼을 작성합니다.</li>
        <li>당첨자 추첨 및 콘텐츠 촬영 일정 안내를 기다립니다.</li>
      </ol>
      <p style={{ marginTop: "12px", fontSize: "13px", color: "#666" }}>
        프로젝트 진행 및 꿈 지원금 선정 방식은 와디즈 페이지와 공식 공지에서
        상세히 안내드릴 예정입니다.
      </p>
    </div>
  );
}
