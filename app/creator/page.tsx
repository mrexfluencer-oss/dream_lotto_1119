export default function CreatorPage() {
  return (
    <div
      style={{
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "960px",
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
            marginBottom: "8px",
            textAlign: "center",
            letterSpacing: "-0.02em",
          }}
        >
          드림복권 기획자 소개
        </h1>

        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.7,
            color: "#4b5563",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          천 원이라는 작은 돈으로 서로의 꿈을 응원하고,
          누군가의 첫 걸음을 함께 만들어 보고 싶다는 마음에서
          드림복권 프로젝트가 시작되었습니다.
        </p>

        {/* 메인 카드 */}
        <section
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "18px",
            boxShadow: "0 14px 30px rgba(15, 23, 42, 0.08)",
            padding: "20px 20px 24px",
          }}
        >
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
                flex: "0 0 220px",
                maxWidth: "220px",
                width: "100%",
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid #e5e7eb",
                backgroundColor: "#f9fafb",
              }}
            >
              <img
                src="/founder.png"
                alt="드림복권 기획자 백승일"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>

            {/* 텍스트 영역 */}
            <div
              style={{
                flex: 1,
                minWidth: "260px",
              }}
            >
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
                  marginBottom: "12px",
                }}
              >
                카이스트에 입학했지만 뚜렷한 꿈이 없었습니다. 그러다 캐나다
                워홀에서 축제를 접했고, 손에 있던{" "}
                <strong>100만 원</strong>으로 Victoria에서 Korea Festival을
                열었습니다. 그 경험은 제 첫 번째 꿈이 되었고, 문화기획사를
                창업하는 계기가 되었습니다.
              </p>

              <p
                style={{
                  fontSize: "14px",
                  color: "#374151",
                  lineHeight: 1.7,
                  marginBottom: "12px",
                }}
              >
                이후 코로나로 첫 꿈을 잠시 내려놓고 약사가 되었지만, 저는
                여전히 사람들의 경험을 만들고 기록하며 살아가고 있습니다.
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
                <strong>누군가의 &apos;첫 실행&apos;을 돕는 사람</strong>이 되는 것.
                그 꿈을 지금 시작하는 방법이 바로 이 드림복권입니다.
              </p>

              {/* 실행 리스트 카드 */}
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  padding: "12px 14px",
                  marginBottom: "16px",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 8px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#111827",
                  }}
                >
                  100만 원으로 실행해 본 것들
                </h3>

                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "18px",
                    color: "#374151",
                    fontSize: "13px",
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
    </div>
  );
}
