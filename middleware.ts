import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  // Si el usuario ya está autenticado y trata de ir a la página de login o registro, redirigirlo
  if (token && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Continuar si no está autenticado o si está accediendo a otra página
  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register"], // Páginas que deseas proteger
};
