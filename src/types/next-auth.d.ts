import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            userId: number;
            name: string;
            email: string;
            image: string;
            isAdmin: boolean;
            watchList: number[];
        } & DefaultSession['user'];
    }

    interface User {
        id: string;
        userId: number;
        name: string;
        email: string;
        image: string;
        isAdmin: boolean;
        watchList: number[];
    } ;
}
