import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import db from "./db";
import { getServerSession, NextAuthOptions } from "next-auth";


export const authOptions: NextAuthOptions = {
  // adapter: PrismaAdapter(db),
  // secret: process.env.NEXTAUTH_SECRET,
  // session: {
  //   strategy: "jwt",
  // },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};

export const getAuthSession = () => getServerSession(authOptions);
