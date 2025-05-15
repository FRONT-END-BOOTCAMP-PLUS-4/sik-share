import NextAuth, { type NextAuthOptions } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";
import GoogleProvider from "next-auth/providers/google";

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
    async signIn(){
      return true;
    },

    async jwt({ token, account, user }) {
      if (user) {
        token.email = user.email;
        token.image = user.image;
        token.nickname = user.name;
        token.accessToken = account?.access_token;
        
      }
      return token;
    },

    async session({ session, token }) {
      session.user.email = token.email;
      session.user.image = token.image as string;
      session.user.nickname = token.name as string;
      session.accessToken = token.accessToken as string;
      
      return session;
    },

    async redirect(){
      return '/auth/post-login';
    }
  },

  pages: {
    signIn: '/login'
  },
  session:{
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
