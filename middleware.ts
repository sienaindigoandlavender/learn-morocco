import { NextResponse, type NextRequest } from "next/server";
import { isValidSessionToken, SESSION_COOKIE } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const response = NextResponse.next();
  // Site-wide: not searchable, not indexable.
  response.headers.set("X-Robots-Tag", "noindex, nofollow");

  if (pathname.startsWith("/wiki") && pathname !== "/wiki/login") {
    const token = request.cookies.get(SESSION_COOKIE)?.value;
    if (!(await isValidSessionToken(token))) {
      const url = request.nextUrl.clone();
      url.pathname = "/wiki/login";
      url.searchParams.set("next", pathname + (request.nextUrl.search || ""));
      return NextResponse.redirect(url);
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt).*)"],
};
