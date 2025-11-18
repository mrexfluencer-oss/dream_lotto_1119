"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

// ✅ 드림 리스트용 CSV (Public 시트)
const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTxFhN6mGmLnyK0z5mV9_6iATEbB9fc5S6sWuUVwr1Ab_MPa3uN8Ok2LrnzkQ_6_8wJMUoboTNo6OFa/pub?gid=395331118&single=true&output=csv";

// ✅ 좋아요용 API (Next.js API Route)
const LIKES_API_URL = "/api/likes";

type Dream = {
  id: string;
  name: string;
  dream: string;
  baseLikes: number; // 기본 1
};

type LikesMap = Record<string, number>;

const LIKED_IDS_KEY = "dreamLotto_likedIds_v1";

// CSV → Dream[]
function parseCsv(text: string): Dream[] {
  const lines = text.trim().split("\n");
  if (lines.length <= 1) return [];

  const [, ...rows] = lines; // 첫 줄은 헤더

  return rows
    .map((line) => {
      const cols = line.split(",");
      const name = (cols[0] || "").trim();
      const dream = (cols[1] || "").trim(); // A=이름, B=꿈
      const meta = (cols[2] || "").trim(); // C=타임스탬프 등(표시는 안 하지만 id에만 사용)

      if (!name || !dream) return null;

      // ✅ index 대신 내용 기반 id (시트에 새 응답이 추가되어도 같은 행은 같은 id 유지)
      const id = `${name}:::${dream}:::${meta}`;

      return {
        id,
        name,
        dream,
        baseLikes: 1,
      } as Dream;
    })
    .filter((v): v is Dream => v !== null);
}

export default function HomePage() {
  const [dreams, setDreams] = useState<Dream[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // 글로벌 좋아요 맵: { dreamId: likesCount }
  const [likes, setLikes] = useState<LikesMap>({});
  // 이 브라우저에서 이미 좋아요를 누른 꿈 id 리스트
  const [likedIds, setLikedIds] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortMode, setSortMode] = useState<"latest" | "likes">("latest");

  // 1) CSV에서 꿈 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(SHEET_CSV_URL);
        const text = await res.text();
        const parsed = parseCsv(text);
        setDreams(parsed);
        setLoading(false);
      } catch (e) {
        console.error("Error fetching sheet:", e);
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 2) 서버(API)를 통해 글로벌 좋아요 맵 가져오기
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const res = await fetch(LIKES_API_URL);
        const data = await res.json();
        if (data && data.likes && typeof data.likes === "object") {
          setLikes(data.likes as LikesMap);
        }
      } catch (e) {
        console.error("Failed to fetch likes from API", e);
      }
    };

    fetchLikes();
  }, []);

  // 3) 브라우저(localStorage)에서 이미 좋아요 누른 id 리스트 불러오기
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const storedLikedIds = window.localStorage.getItem(LIKED_IDS_KEY);
      if (storedLikedIds) {
        setLikedIds(JSON.parse(storedLikedIds) as string[]);
      }
    } catch (e) {
      console.error("Failed to load likedIds from storage", e);
    }
  }, []);

  // likedIds 변경 시 localStorage에 저장
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(LIKED_IDS_KEY, JSON.stringify(likedIds));
    } catch (e) {
      console.error("Failed to save likedIds", e);
    }
  }, [likedIds]);

  // 보여줄 좋아요 숫자 (글로벌 likesMap 없으면 baseLikes=1 사용)
  const getDisplayLikes = (id: string, baseLikes: number) => {
    const serverLikes = likes[id];
    return serverLikes !== undefined ? serverLikes : baseLikes;
  };

  // 좋아요 토글: 1) UI에서 1씩만 증감  2) 서버에도 delta 반영
  const handleLike = async (id: string, baseLikes: number) => {
    const alreadyLiked = likedIds.includes(id);
    const delta = alreadyLiked ? -1 : +1; // 한 번 클릭마다 1씩만 증감

    // 1) 로컬 UI 즉시 반영 (optimistic update)
    setLikedIds((prev) =>
      alreadyLiked ? prev.filter((x) => x !== id) : [...prev, id]
    );
    setLikes((prev) => {
      const current = prev[id] ?? baseLikes;
      const next = Math.max(current + delta, 1); // 1 아래로는 내려가지 않게
      return { ...prev, [id]: next };
    });

    // 2) 서버에 실제 반영 (실패해도 화면은 유지, 콘솔만 에러)
    try {
      await fetch(LIKES_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, delta }), // { id, delta: +1/-1 }
      });
    } catch (e) {
      console.error("Failed to update likes on server", e);
      // 필요하다면 여기서 롤백 로직 추가 가능
    }
  };

  // 검색 (이름 + 꿈 내용)
  const filteredDreams = useMemo(() => {
    if (!searchTerm.trim()) return dreams;
    const term = searchTerm.trim().toLowerCase();
    return dreams.filter(
      (d) =>
        d.name.toLowerCase().includes(term) ||
        d.dream.toLowerCase().includes(term)
    );
  }, [dreams, searchTerm]);

  // 정렬 (최신순 / 좋아요순)
  const sortedDreams = useMemo(() => {
    const arr = [...filteredDreams];
    if (sortMode === "likes") {
      arr.sort((a, b) => {
        const aLikes = getDisplayLikes(a.id, a.baseLikes);
        const bLikes = getDisplayLikes(b.id, b.baseLikes);
        return bLikes - aLikes;
      });
    }
    // sortMode === "latest"면 그대로 (시트 순서)
    return arr;
  }, [filteredDreams, sortMode, likes]);

  const participantCount = dreams.length;
  const totalAmount = participantCount * 1000;

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f5f7fb 0%, #eef3ff 50%, #f9f9ff 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "32px 16px 40px",
        }}
      >
        {/* 메인 카드 */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            boxShadow: "0 14px 30px rgba(0, 0, 0, 0.06)",
            padding: "24px 20px 28px",
          }}
        >
          {/* 헤더 / 네비 */}
          <header
            style={{
              marginBottom: "20px",
              borderBottom: "1px solid #f0f0f0",
              paddingBottom: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <h1
                  style={{
                    fontSize: "24px",
                    fontWeight: 800,
                    margin: 0,
                    letterSpacing: "-0.03em",
                  }}
                >
                  드림복권 시즌1
                </h1>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontSize: "13px",
                    color: "#888",
                  }}
                >
                  천 원으로 시작하는, 서로의 꿈을 잇는 작은 실험.
                </p>
              </div>

              <nav
                style={{
                  display: "flex",
                  gap: "8px",
                  fontSize: "13px",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href="/how-to"
                  style={{
                    color: "#555",
                    textDecoration: "none",
                    padding: "6px 10px",
                    borderRadius: "999px",
                    backgroundColor: "#f6f7fb",
                  }}
                >
                  참여 방법
                </Link>
                <Link
                  href="/creator"
                  style={{
                    color: "#555",
                    textDecoration: "none",
                    padding: "6px 10px",
                    borderRadius: "999px",
                    backgroundColor: "#f6f7fb",
                  }}
                >
                  기획자 소개
                </Link>
                <Link
                  href="/faq"
                  style={{
                    color: "#555",
                    textDecoration: "none",
                    padding: "6px 10px",
                    borderRadius: "999px",
                    backgroundColor: "#f6f7fb",
                  }}
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  style={{
                    color: "#555",
                    textDecoration: "none",
                    padding: "6px 10px",
                    borderRadius: "999px",
                    backgroundColor: "#f6f7fb",
                  }}
                >
                  협업 문의
                </Link>
              </nav>
            </div>

            {/* 소개 + 와디즈 버튼 */}
            <div
              style={{
                marginTop: "14px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <p
                style={{
                  color: "#555",
                  lineHeight: 1.7,
                  fontSize: "14px",
                  margin: 0,
                }}
              >
                천 원으로 서로의 꿈을 응원하고,
                <br />
                100만원으로 나의 꿈을 시작할 수도 있는 곳.
                <br />
                꿈의 크기도 중요하지 않고, 현실 가능성도 따지지 않아요.
                <br />
                그저 &apos;당신의 이야기&apos;면 됩니다.
              </p>

              <div>
                <a
                  href="https://wadiz-link-placeholder.com" // 와디즈 링크로 교체
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 18px",
                    borderRadius: "999px",
                    backgroundColor: "#00c4c4",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: 600,
                    textDecoration: "none",
                    boxShadow: "0 6px 14px rgba(0, 196, 196, 0.35)",
                  }}
                >
                  와디즈에서 드림복권 참여하기
                </a>
              </div>
            </div>
          </header>

          {/* 참여 현황 */}
          <section
            style={{
              display: "flex",
              gap: "12px",
              marginBottom: "18px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                flex: "1 1 150px",
                borderRadius: "14px",
                padding: "14px 16px",
                backgroundColor: "#f7f9ff",
                border: "1px solid #e4e8ff",
              }}
            >
              <div style={{ fontSize: "12px", color: "#7a82a2" }}>
                현재 참여자 수
              </div>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  marginTop: "4px",
                  color: "#222",
                }}
              >
                {participantCount.toLocaleString()}명
              </div>
            </div>
            <div
              style={{
                flex: "1 1 150px",
                borderRadius: "14px",
                padding: "14px 16px",
                backgroundColor: "#fff8f4",
                border: "1px solid #ffe2c8",
              }}
            >
              <div style={{ fontSize: "12px", color: "#b07c4f" }}>
                현재 모금액
              </div>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  marginTop: "4px",
                  color: "#222",
                }}
              >
                {totalAmount.toLocaleString()}원
              </div>
            </div>
          </section>

          {/* 검색 + 정렬 */}
          <section
            style={{
              marginBottom: "14px",
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            <input
              type="text"
              placeholder="이름이나 키워드로 꿈을 검색해보세요."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                flex: "1 1 200px",
                padding: "10px 12px",
                borderRadius: "10px",
                border: "1px solid #dde1ee",
                fontSize: "14px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            <div
              style={{
                display: "flex",
                gap: "6px",
                fontSize: "12px",
              }}
            >
              <button
                type="button"
                onClick={() => setSortMode("latest")}
                style={{
                  padding: "8px 10px",
                  borderRadius: "999px",
                  border:
                    sortMode === "latest"
                      ? "1px solid #00c4c4"
                      : "1px solid #dde1ee",
                  backgroundColor:
                    sortMode === "latest" ? "#e0fbfb" : "#f7f8fc",
                  color: "#444",
                  cursor: "pointer",
                }}
              >
                최신순
              </button>
              <button
                type="button"
                onClick={() => setSortMode("likes")}
                style={{
                  padding: "8px 10px",
                  borderRadius: "999px",
                  border:
                    sortMode === "likes"
                      ? "1px solid #00c4c4"
                      : "1px solid #dde1ee",
                  backgroundColor:
                    sortMode === "likes" ? "#e0fbfb" : "#f7f8fc",
                  color: "#444",
                  cursor: "pointer",
                }}
              >
                좋아요순
              </button>
            </div>
          </section>

          {/* 안내 문구 */}
          <section
            style={{
              marginBottom: "16px",
              fontSize: "13px",
              color: "#666",
            }}
          >
            <p style={{ marginBottom: "4px" }}>
              아래는 지금까지 드림복권 시즌1에 응모해 준 사람들의 이름과 꿈입니다.
            </p>
            <p style={{ marginBottom: "4px" }}>
              각 꿈 옆의 ♡ 버튼을 눌러, 마음에 닿는 꿈에 한 번씩 좋아요를 남길
              수 있어요.
            </p>
          </section>

          {/* 에러/로딩 */}
          {loading && (
            <p style={{ fontSize: "14px", color: "#777" }}>
              불러오는 중입니다...
            </p>
          )}
          {error && (
            <p style={{ fontSize: "14px", color: "red" }}>
              데이터를 불러오는 중 오류가 발생했습니다. 잠시 후 다시 시도해
              주세요.
            </p>
          )}

          {/* 꿈 리스트 */}
          {!loading && !error && (
            <section style={{ marginBottom: "8px" }}>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "10px",
                }}
              >
                참여자들의 꿈
              </h2>

              {sortedDreams.length === 0 ? (
                <p style={{ fontSize: "14px", color: "#777" }}>
                  조건에 맞는 꿈이 없습니다. 검색어를 바꿔보세요.
                </p>
              ) : (
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {sortedDreams.map((item) => {
                    const alreadyLiked = likedIds.includes(item.id);
                    const displayLikes = getDisplayLikes(
                      item.id,
                      item.baseLikes
                    );

                    return (
                      <li
                        key={item.id}
                        style={{
                          border: "1px solid #f0f0f5",
                          borderRadius: "14px",
                          padding: "12px 14px",
                          background: "#fafbff",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "6px",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "14px",
                              fontWeight: 600,
                              marginRight: "8px",
                              color: "#333",
                            }}
                          >
                            {item.name}
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              handleLike(item.id, item.baseLikes)
                            }
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                              border: "none",
                              background: "transparent",
                              cursor: "pointer",
                              fontSize: "14px",
                              color: alreadyLiked ? "#e53935" : "#888",
                              padding: "2px 4px",
                            }}
                          >
                            <span>{alreadyLiked ? "♥" : "♡"}</span>
                            <span>{displayLikes}</span>
                          </button>
                        </div>
                        <div
                          style={{
                            fontSize: "13px",
                            whiteSpace: "pre-line",
                            color: "#444",
                            lineHeight: 1.6,
                          }}
                        >
                          {item.dream}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
          )}
        </div>

        {/* 푸터 */}
        <footer
          style={{
            marginTop: "18px",
            fontSize: "12px",
            color: "#999",
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} 드림복권 시즌1
        </footer>
      </div>
    </div>
  );
}
