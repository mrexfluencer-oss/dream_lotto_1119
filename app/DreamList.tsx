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

export default function DreamList({ dreams }: Props) {
  const [likedMap, setLikedMap] = useState<LikedMap>({});

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

  return (
    <section>
      <h2
        style={{
          fontSize: "18px",
          fontWeight: 600,
          marginBottom: "12px",
        }}
      >
        참여자들의 꿈
      </h2>

      {dreams.length === 0 ? (
        <p style={{ fontSize: "14px", color: "#777" }}>
          아직 응모된 꿈이 없습니다. 첫 번째 꿈의 주인공이 되어 주세요.
        </p>
      ) : (
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
          {dreams.map((item) => {
            const liked = !!likedMap[item.id];
            const likeCount = 1 + (liked ? 1 : 0); // 기본 1에서, 내가 누르면 +1

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
      )}
    </section>
  );
}
