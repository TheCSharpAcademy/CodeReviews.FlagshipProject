import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(req: NextRequest) {
  let token = cookies().get("LIAGToken")?.value;

  if (
    token &&
    (req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/sign-up")
  ) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
  if (
    !token &&
    (req.nextUrl.pathname === "/" ||
      req.nextUrl.pathname === "/missions" ||
      req.nextUrl.pathname === "/achievements" ||
      req.nextUrl.pathname === "/profile")
  ) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
}
