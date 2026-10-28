
import { NextRequest, NextResponse } from "next/server"

export function proxy(request: NextRequest) {
  const hostname = request.headers
    .get("host")
    ?.split(":")[0]
    .toLowerCase()

  const pathname = request.nextUrl.pathname

  const isScanmij =
    hostname === "scanmij.com" ||
    hostname === "www.scanmij.com"

  if (isScanmij) {
    const url = request.nextUrl.clone()

    if (pathname === "/") {
      url.pathname = "/scanmij"
      return NextResponse.rewrite(url)
    }

    if (pathname === "/bestellen") {
      url.pathname = "/scanmij/bestellen"
      return NextResponse.rewrite(url)
    }

    if (pathname === "/bedankt") {
      url.pathname = "/scanmij/bedankt"
      return NextResponse.rewrite(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/", "/bestellen", "/bedankt"],
}
