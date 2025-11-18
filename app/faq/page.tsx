type Qna = {
  q: string;
  a: string;
};

const faqList: Qna[] = [
  {
    q: "정말 100만원을 주나요?",
    a: "네. 시즌1에서 선정된 당첨자에게는 1인당 100만원의 꿈 지원금을 제공합니다. 구체적인 선정 인원과 방식은 와디즈 및 공식 안내 페이지에 공지됩니다.",
  },
  {
    q: "꿈의 크기나 성공 가능성이 중요하나요?",
    a: "아니요. 드림복권은 꿈의 크기나 현실 가능성보다, '당신의 이야기'와 첫걸음을 내딛고자 하는 마음을 더 중요하게 생각합니다.",
  },
  {
    q: "당첨되면 무엇을 해야 하나요?",
    a: "사전 인터뷰 콘텐츠 촬영 1회, 이후 일정에 따른 사후 콘텐츠 촬영 1회에 참여해 주셔야 합니다.",
  },
];

export default function FaqPage() {
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
        자주 묻는 질문 (FAQ)
      </h1>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {faqList.map((item, idx) => (
          <li
            key={idx}
            style={{
              marginBottom: "16px",
              paddingBottom: "12px",
              borderBottom: "1px solid #eee",
            }}
          >
            <p
              style={{
                fontWeight: 600,
                marginBottom: "4px",
                fontSize: "14px",
              }}
            >
              Q. {item.q}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                color: "#444",
                lineHeight: 1.6,
              }}
            >
              A. {item.a}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
