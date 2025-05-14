import NextAuth, { type DefaultUser, type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      nickname: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    nickname: string;
  }

  interface JWT {
    nickname: string;
  }
}
