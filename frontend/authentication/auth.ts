import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const { signIn, signOut, auth, handlers } = NextAuth({
  providers: [Google],
});

export { signIn, signOut, auth, handlers };