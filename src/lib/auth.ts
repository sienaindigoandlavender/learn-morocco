// Web Crypto so this works in both Node and the Edge runtime (middleware).

export const SESSION_COOKIE = "wiki_session";

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

function toHex(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let out = "";
  for (let i = 0; i < bytes.length; i++) {
    out += bytes[i].toString(16).padStart(2, "0");
  }
  return out;
}

function requireSecret(): string {
  const s = process.env.WIKI_SESSION_SECRET;
  if (!s || s.length < 16) {
    throw new Error("WIKI_SESSION_SECRET must be set (>=16 chars)");
  }
  return s;
}

export async function expectedToken(): Promise<string> {
  const password = process.env.WIKI_PASSWORD ?? "";
  const secret = requireSecret();
  const data = new TextEncoder().encode(`${password}:${secret}`);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return toHex(hash);
}

export function checkPassword(submitted: string): boolean {
  const expected = process.env.WIKI_PASSWORD ?? "";
  if (expected.length === 0) return false;
  return timingSafeEqual(submitted, expected);
}

export async function isValidSessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const expected = await expectedToken();
  return timingSafeEqual(token, expected);
}
