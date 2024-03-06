import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUser } from "@/lib/db";
const bcrypt = require("bcrypt");

export const nextConfig: NextAuthOptions = {
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                if (credentials) {
                    console.log(credentials )
                    const user = await getUser(credentials.username);

                    if (user) {
                        const match = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                        console.log(user, "000000000000")

                        if (match) {
                            console.log("Logging in");
                            return  {
                                id: user.id,
                                name: user.username,
                                email: user.email,
                                image: user.image || "",
                                isAdmin: user.isAdmin,
                                watchList: user.watchList || [],
                            }
                        } else {
                            console.log("Password incorrect");
                            throw new Error("Password incorrect");
                        }
                    } else {
                        console.log("User not found");
                        throw new Error("User not found");
                    }
                } else {
                    console.log("Something went wrong");
                    throw new Error("Something went wrong");
                }
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            
            if (user) {
                const userData = await getUser(user.name);
                if (userData.watchList !== token.watchList) {
                    token.watchList = userData.watchList;
                }

                token.id = userData.id;
                token.userId = userData.userId; 
                token.name = userData.username;
                token.email = userData.email;
                token.image = userData.image;
                token.isAdmin = userData.isAdmin;
            }

            return token;
        },
        async session({ session, token, user }) {
            session.user = token;
            return session;
        },
    },
};
