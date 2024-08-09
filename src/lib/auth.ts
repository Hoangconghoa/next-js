import { NextAuthOptions, User, getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import GoogleProviders from "next-auth/providers/google";
import GithubProviders from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
export const authConfig: NextAuthOptions = {
  providers: [
    // CredentialsProvider({
    //     name: "Sign in",
    //     credentials: {
    //       email: {
    //         label: "Email",
    //         type: "email",
    //         placeholder: "example@example.com",
    //       },
    //       password: { label: "Password", type: "password" },
    //     },
    //     async authorize(credentials) {
    //         if (!credentials || !credentials.email || !credentials.password)
    //           return null;

    //         const dbUser = await prisma.user.findFirst({
    //           where: { email: credentials.email },
    //         });

    //         //Verify Password here
    //         //We are going to use a simple === operator
    //         //In production DB, passwords should be encrypted using something like bcrypt...
    //         if (dbUser && dbUser.password === credentials.password) {
    //           const { password, createdAt, id, ...dbUserWithoutPassword } = dbUser;
    //           return dbUserWithoutPassword as User;
    //         }

    //         return null;
    //       },
    //     }),
    GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProviders({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
};
