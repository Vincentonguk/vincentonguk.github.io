import { NextResponse } from "next/server";

const USER = process.env.BASIC_AUTH_USER ?? "vinicios";
const PASS = process.env.BASIC_AUTH_PASS ?? "LEC-2025";

function unauthorized() {
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="BrainReader Workspace"' }
  });
}

export function middleware(req) {
  const auth = req.headers.get("authorization") || "";
  if (!auth.startsWith("Basic ")) return unauthorized();
  try {
    const b64 = auth.split(" ")[1] || "";
    const [u, p] = atob(b64).split(":");
    if (u === USER && p === PASS) return NextResponse.next();
  } catch (_) {}
  return unauthorized();
}

// Protege tudo dentro do workspace; libera ícones/imagens internas do Vercel
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
