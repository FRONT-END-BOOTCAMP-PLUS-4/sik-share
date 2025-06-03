import { NextResponse, type NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";


const PUBLIC_PAGE_REGEX = [/^\/group-buy\/\d+$/];
const PUBLIC_PAGE_PATHS = ["/login"];
const PUBLIC_API_PATHS = [
  "/api/auth",
  "/api/users/exist",
  "/api/users/signup",
  "/api/shares/count",
  "/api/group-buys/count",
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isApiRoute = pathname.startsWith("/api");
  const isPublicPage = PUBLIC_PAGE_PATHS.includes(pathname) || 
    PUBLIC_PAGE_REGEX.some((regex) => regex.test(pathname));
  const isPublicApi =
    PUBLIC_API_PATHS.some((path) => pathname.startsWith(path)) ||
    (/^\/api\/group-buys\/\d+$/.test(pathname) && req.method === "GET");
  
  const token = await getToken({ req });
  
  // 로그인한 유저 /login 접근 시 /map으로 이동
  if(pathname === "/login" && token){
    return NextResponse.redirect(new URL('/map', req.url));
  }
  //회원가입 미완료 사용자 처리
  if (!isApiRoute && token && !token.publicId && pathname !== "/auth/onboarding" ) {
    return NextResponse.redirect(new URL("/auth/onboarding", req.url));
  }

  // 페이지 보호
  if (!isApiRoute && !isPublicPage && !token) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set('callbackUrl', req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // API 보호
  if (isApiRoute && !isPublicApi && !token) {
    return NextResponse.json(
      { message: "로그인이 필요한 서비스입니다." },
      { status: 401 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [  
    "/api/:path*",   
    "/login",           
    "/users/:path*",
    "/map/:path*",
    "/group-buy/:path*",
    "/share/:path*",
    "/chat/:path*",
    "/notification/:path*",
    "/share-box/:path*",
    "/auth/:path*"
  ],
};