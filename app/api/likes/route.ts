// app/api/likes/route.ts
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzJOZwBgSAsUO8rcdE4zNWf7Rlzu0TJnV7Gw5DMjXZxxgCV4M-PJ7ScRNXPvbSnwjFR/exec"; // 네 웹앱 URL

export async function GET() {
  try {
    const res = await fetch(SCRIPT_URL, {
      // 캐시 없이 항상 최신 값
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Apps Script GET error:", res.status, await res.text());
      // 실패해도 프론트가 깨지지 않게 빈 likes 반환
      return Response.json({ likes: {} }, { status: 200 });
    }

    const data = await res.json().catch(() => ({} as any));
    // Apps Script에서 { ok: true, likes: {...} } 형식으로 온다고 가정
    const likes = (data && data.likes && typeof data.likes === "object")
      ? data.likes
      : {};

    return Response.json({ likes }, { status: 200 });
  } catch (e) {
    console.error("GET /api/likes failed:", e);
    return Response.json({ likes: {} }, { status: 200 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      console.error("Apps Script POST error:", res.status, await res.text());
      return Response.json({ ok: false }, { status: 200 });
    }

    const data = await res.json().catch(() => ({} as any));
    // 그대로 프론트에 넘기지만, 프론트는 어차피 optimistic UI라 data를 꼭 안 써도 됨
    return Response.json(data, { status: 200 });
  } catch (e) {
    console.error("POST /api/likes failed:", e);
    return Response.json({ ok: false }, { status: 200 });
  }
}
