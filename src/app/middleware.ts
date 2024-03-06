import NextAuth from "next-auth/next";
import { nextConfig } from "@/lib/auth.config";

export default NextAuth(nextConfig).auth;


export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next.*)']
}