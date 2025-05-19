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

    async jwt({ token, user }) {
      if (user) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/exist`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: user.email }),
        });

        const data = await res.json();

        if (data.exists) {
          token.id = data.id;
          token.nickname = data.nickname;
          token.profileUrl = data.profileUrl;
          token.neighborhood = data.neighborhood;
          token.publicId = data.publicId;
          token.shareScore = data.shareScore;
        }
      }
      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.user.email = token.email;
      session.user.image = token.image as string;
      session.user.nickname = token.name as string;
      session.user.shareScore = token.shareScore as number;
      session.user.neighborhood = token.neighborhood as string;
      session.user.publicId = token.publicId as number;    
      session.user.id = token.id as string;  
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
