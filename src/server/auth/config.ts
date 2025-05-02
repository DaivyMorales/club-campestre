import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { db } from "@/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      roleId: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        id: {
          label: "Id",
          type: "string",
          placeholder: "1234567890",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "*********",
        },
      },

      async authorize(credentials, req) {
        // Search for user in database
        const userFound = await db.user.findUnique({
          where: { id: credentials.id as string },
          select: {
            name: true,
            email: true,
            password: true,
            image: true,
            id: true,
            roleId: true,
          },
        });

        if (!userFound) throw new Error("Your id or password are incorrect");

        const passwordMatch = await bcrypt.compare(
          credentials.password as string,
          userFound.password as string,
        );

        if (!passwordMatch)
          throw new Error("Your id or password are incorrect");

        return {
          id: userFound.id,
          name: userFound.name,
          roleId: userFound.roleId,
          // Add any other properties you need in the session
        };
      },
    }),
  ],
  adapter: PrismaAdapter(db),
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      session.user.roleId = token.roleId as string; // add this line
      return session;
    },
  },
} satisfies NextAuthConfig;
