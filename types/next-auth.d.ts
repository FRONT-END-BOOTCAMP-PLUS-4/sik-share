import NextAuth, { type DefaultUser, type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken: string
    user: {
      id: string;
      publicId: number;
      nickname: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    publicId: number;
  }

  interface JWT {
    accessToken: string;
    id: string;
    publicId: number;
  }
}
