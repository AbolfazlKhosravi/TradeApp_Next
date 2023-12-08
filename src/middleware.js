import { NextResponse } from "next/server";
import userMiddlerWare from "./utils/userMiddleware";

export async function middleware(req) {
  const url = req.url;
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/profile")) {
    const { user } = await userMiddlerWare(req);
    if (!user) return NextResponse.redirect(new URL("/auth", url));
  }
  if (pathname.startsWith("/admin")) {
    const { user } = await userMiddlerWare(req);
    if (!user) return NextResponse.redirect(new URL("/auth", url));
    if (user && user.role !== "ADMIN")
      return NextResponse.redirect(new URL("/", url));
  }
  if (pathname.startsWith("/auth")) {
    const { user } = await userMiddlerWare(req);
    if (user) return NextResponse.redirect(new URL("/", url));
  }
}

export const config = {
  matcher: ["/admin/:path*", "/profile/:path*", "/auth/:path*"],
};
