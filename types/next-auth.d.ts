import NextAuth, { type DefaultUser, type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken: string
    user: {
      id: string;
      nickname: string;
      shareScore:number;
      neighborhood: string;
      publicId: number;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    nickname: string;
    shareScore:number;
    neighborhood: string;
    publicId: number;
  }

  interface JWT {
    accessToken: string;
    id: string;
    shareScore: number;
    neighborhood: string;
    publicId: number;
  }
}
