import NextAuth, { type DefaultUser, type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      publicId: number;
      nickname: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    publicId: number;
    nickname: string;
  }

  interface JWT {
    id: string;
    publicId: number;
    nickname: string;
  }
}
