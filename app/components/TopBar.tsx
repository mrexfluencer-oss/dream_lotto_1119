export default function TopBar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        background: "#f7f8fc",
        padding: "16px 0 28px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: "22px",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            margin: 0,
            color: "#111",
          }}
        >
          드림복권 시즌1
        </h1>
        <p style={{ marginTop: "4px", color: "#888", fontSize: "12px" }}>
          천 원으로 서로의 꿈을 잇는 작은 실험
        </p>
      </div>
    </header>
  );
}
