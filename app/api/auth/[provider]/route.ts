import NextAuth, { getServerSession, type NextAuthOptions } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";
import GoogleProvider from "next-auth/providers/google";
import { CreateUserUsecase } from "@/application/usecases/auth/CreateUserUsecase";
import { PrismaUserRepository } from "@/infra/repositories/prisma/PrismaUserRepository";
import { CreateUserDto } from "@/application/usecases/auth/dto/CreateUserDto";
import { CheckAddressUsecase } from '@/application/usecases/auth/CheckAddressUsecase';

export const authOptions:NextAuthOptions = {
  providers:[
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || '',
      clientSecret: process.env.KAKAO_CLIENT_SECRET || ''
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID || '',
      clientSecret: process.env.NAVER_CLIENT_SECRET || ''
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
    })
  ],

  callbacks:{
    async signIn({user, account, profile}){
      const userRepository = new PrismaUserRepository()
      const createUserUsecase = new CreateUserUsecase(userRepository);
      const dto = new CreateUserDto(
        user.email || "",
        user.name || profile?.name || "",
        user.image || profile?.image || "",
      )

      await createUserUsecase.execute(dto);
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.publicId = user.publicId;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.publicId = token.publicId as number;
      }
      return session;
    },

    async redirect({baseUrl}){
      const session = await getServerSession(authOptions);
      const email = session?.user?.email;

      if(!email) return `${baseUrl}/login`;

      const userRepository = new PrismaUserRepository()
      const checkAddressUsecase = new CheckAddressUsecase(userRepository);
      const targetPath = await checkAddressUsecase.execute(email);

      return `${baseUrl}${targetPath}`
    }
  },

  pages: {
    signIn: '/auth'
  },
  session:{
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
