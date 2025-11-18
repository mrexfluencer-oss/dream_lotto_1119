// app/DreamList.tsx
"use client";

import { useEffect, useState } from "react";

type Dream = {
  id: string;
  name: string;
  dream: string;
};

type Props = {
  dreams: Dream[];
};

type LikedMap = Record<string, boolean>;

const STORAGE_KEY = "dream-lotto-liked-v1";
const ITEMS_PER_PAGE = 10;

export default function DreamList({ dreams }: Props) {
  const [likedMap, setLikedMap] = useState<LikedMap>({});
  const [currentPage, setCurrentPage] = useState(0);

  // 처음 로드할 때 localStorage에서 "이미 좋아요 누른 꿈들" 불러오기
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as LikedMap;
        setLikedMap(parsed);
      }
    } catch (e) {
      console.error("Failed to load liked map:", e);
    }
  }, []);

  // dreams 개수가 바뀌면 페이지를 0으로 리셋 (안전장치)
  useEffect(() => {
    setCurrentPage(0);
  }, [dreams.length]);

  const handleLike = (id: string) => {
    // 이미 이 꿈에 좋아요를 눌렀으면 더 이상 추가로 누를 수 없음
    if (likedMap[id]) return;

    const next = { ...likedMap, [id]: true };
    setLikedMap(next);

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (e) {
      console.error("Failed to save liked map:", e);
    }
  };

  // 페이지네이션 계산
  const totalItems = dreams.length;
  const totalPages = totalItems === 0 ? 1 : Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
  const currentDreams = dreams.slice(startIndex, endIndex);

    // 🔍 디버그: 실제로 몇 개 렌더링되는지 확인
  console.log("dreams:", dreams.length, "currentDreams:", currentDreams.length, "page:", currentPage);


  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <section>
      <h2
        style={{
          fontSize: "18px",
          fontWeight: 600,
          marginBottom: "8px",
        }}
      >
        참여자들의 꿈
      </h2>

      {/* 상단 요약 정보 */}
      <div
        style={{
          fontSize: "12px",
          color: "#777",
          marginBottom: "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span>
          총 <strong>{totalItems}</strong>명 참여
        </span>
        {totalItems > 0 && (
          <span>
            {currentPage + 1} / {totalPages} 페이지 (
            {startIndex + 1}–{endIndex}명 보기)
          </span>
        )}
      </div>

      {totalItems === 0 ? (
        <p style={{ fontSize: "14px", color: "#777" }}>
          아직 응모된 꿈이 없습니다. 첫 번째 꿈의 주인공이 되어 주세요.
        </p>
      ) : (
        <>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {currentDreams.map((item) => {
              const liked = !!likedMap[item.id];
              const likeCount = 1 + (liked ? 1 : 0); // 기존 로직 유지

              return (
                <li
                  key={item.id}
                  style={{
                    border: "1px solid #eee",
                    borderRadius: "12px",
                    padding: "12px 14px",
                    background: "#fafafa",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "8px",
                      marginBottom: "6px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        wordBreak: "break-all",
                      }}
                    >
                      {item.name}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleLike(item.id)}
                      disabled={liked}
                      style={{
                        fontSize: "13px",
                        borderRadius: "999px",
                        padding: "4px 10px",
                        border: liked ? "1px solid #ff7f9f" : "1px solid #ddd",
                        backgroundColor: liked ? "#ffe6ee" : "#fff",
                        color: liked ? "#d50055" : "#555",
                        cursor: liked ? "default" : "pointer",
                        minWidth: "64px",
                      }}
                    >
                      {liked ? "♥" : "♡"} {likeCount}
                    </button>
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      whiteSpace: "pre-line",
                      color: "#444",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.dream}
                  </div>
                </li>
              );
            })}
          </ul>

          {/* 페이지네이션 버튼 영역 */}
          <div
            style={{
              marginTop: "14px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
            }}
          >
            <button
              type="button"
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              style={{
                padding: "6px 12px",
                borderRadius: "999px",
                border: "1px solid #ddd",
                backgroundColor: currentPage === 0 ? "#f5f5f5" : "#fff",
                color: currentPage === 0 ? "#bbb" : "#333",
                cursor: currentPage === 0 ? "default" : "pointer",
              }}
            >
              이전
            </button>

            <span style={{ color: "#666" }}>
              {currentPage + 1} / {totalPages}
            </span>

            <button
              type="button"
              onClick={handleNextPage}
              disabled={currentPage >= totalPages - 1}
              style={{
                padding: "6px 12px",
                borderRadius: "999px",
                border: "1px solid #ddd",
                backgroundColor:
                  currentPage >= totalPages - 1 ? "#f5f5f5" : "#111",
                color:
                  currentPage >= totalPages - 1 ? "#bbb" : "#fff",
                cursor:
                  currentPage >= totalPages - 1 ? "default" : "pointer",
              }}
            >
              다음
            </button>
          </div>
        </>
      )}
    </section>
  );
}
