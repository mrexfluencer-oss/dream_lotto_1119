export default function CreatorPage() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "24px 16px 40px",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', sans-serif",
      }}
    >
      {/* 페이지 타이틀 */}
      <h1
        style={{
          fontSize: "22px",
          fontWeight: 700,
          marginBottom: "10px",
        }}
      >
        드림복권 기획자 소개
      </h1>



      {/* 기획자 섹션 */}
      <section>
        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          {/* 프로필 이미지 */}
          <div
            style={{
              flex: "0 0 180px",
              maxWidth: "180px",
              width: "100%",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid #e5e7eb",
              backgroundColor: "#f9fafb",
            }}
          >
            <img
              src="/founder.png"
              alt="드림복권 기획자"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>

          {/* 텍스트 영역 */}
          <div style={{ flex: 1, minWidth: "260px" }}>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: 700,
                marginBottom: "6px",
                color: "#111827",
              }}
            >
              백승일 (@Mr.Exfluencer)
            </h2>

            <p
              style={{
                marginTop: 0,
                fontSize: "14px",
                color: "#4b5563",
                marginBottom: "16px",
                lineHeight: 1.7,
              }}
            >
              경험으로 성장하고, 실행으로 증명하는 사람
            </p>

            <p
              style={{
                fontSize: "14px",
                color: "#374151",
                lineHeight: 1.7,
                marginBottom: "14px",
              }}
            >
              카이스트에 입학했지만 꿈이 없었습니다. 그러다 캐나다 워홀에서
              축제를 접했고, 손에 있던 <strong>100만 원</strong>으로 Victoria에서
              Korea Festival을 열었습니다. 그 경험은 제 첫 번째 꿈이 되었고
              문화기획사를 창업하게 됐습니다.
            </p>

            <p
              style={{
                fontSize: "14px",
                color: "#374151",
                lineHeight: 1.7,
                marginBottom: "14px",
              }}
            >
              이후 코로나로 첫 꿈을 잠시 내려놓고 약사가 되었지만, 저는 여전히
              경험을 만들고 기록하며 살아가고 있습니다.
            </p>

            <p
              style={{
                fontSize: "14px",
                color: "#374151",
                lineHeight: 1.7,
                marginBottom: "16px",
              }}
            >
              오래전부터 품어온 꿈이 있습니다.{" "}
              <strong>누군가의 ‘첫 실행’을 돕는 사람</strong>이 되는 것. 그 꿈을
              지금 시작하는 방법이 바로 이 드림복권입니다.
            </p>

            <div
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "14px 16px",
                marginBottom: "16px",
              }}
            >
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#111827",
                }}
              >
                100만원으로 실행해 본 것들
              </h3>

              <ul
                style={{
                  margin: 0,
                  paddingLeft: "20px",
                  color: "#374151",
                  fontSize: "14px",
                  lineHeight: 1.6,
                }}
              >
                <li>Korea Festival 기획·개최</li>
                <li>웃음참기·베개싸움 축제 운영</li>
                <li>대학 축제 장사 도전</li>
                <li>고3 진로 강연 &apos;대학가서 뭐할래?&apos;</li>
                <li>문화기획사 &apos;문화인어스&apos; 창업</li>
                <li>&apos;하찮은 챌린지&apos; 프로젝트</li>
              </ul>
            </div>

            <p
              style={{
                fontSize: "14px",
                color: "#374151",
                lineHeight: 1.7,
              }}
            >
              저는 믿습니다.{" "}
              <strong>
                100만 원이면 누구든 꿈을 찾고, 한 걸음 내딛을 수 있습니다.
              </strong>
              <br />
              드림복권은 그 첫 걸음이 되기 위해 만들어졌습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
