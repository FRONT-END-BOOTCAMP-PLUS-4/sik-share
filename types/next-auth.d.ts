import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      publicId: number;
      name?: string;
      email?: string;
      image?: string;
    };
  }

  interface User {
    publicId: number;
  }

  interface JWT {
    id: string;
    publicId: number;
  }
}