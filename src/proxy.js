import { NextResponse } from "next/server";

export function proxy(request) {
  const isLoggedin = request.cookies.get("auth")?.value == "true";

  if (!isLoggedin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};
