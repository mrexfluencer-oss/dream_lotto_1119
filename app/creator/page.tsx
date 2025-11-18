export default function CreatorPage() {
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
        드림복권 기획자 소개
      </h1>
      <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#444" }}>
        이 프로젝트는, 천 원이라는 작은 돈으로 서로의 꿈을 응원하고
        누군가의 첫 걸음을 함께 만들어 보고 싶다는 마음에서 시작되었습니다.
      </p>
      <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#444" }}>
        (여기에 너의 스토리 — 예: 카이스트, 약사, 하찮은 챌린지, 여행, 드림로또
        철학 등 넣으면 됨)
      </p>
    </div>
  );
}
