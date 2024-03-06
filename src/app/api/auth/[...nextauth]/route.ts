import NextAuth, { NextAuthOptions } from "next-auth";

import { nextConfig } from "@/lib/auth.config";



const handler = NextAuth(nextConfig);

export { handler as GET, handler as POST  };
