import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from 'next-auth/jwt';
import { Session, User } from "next-auth";
import { auth } from "@/utils/FirebaseAdmin";


interface MyToken extends JWT {
  accessToken?: string;
}
interface ExtendedUser extends User {
  token?: string;
}


// Extend the Session type to include accessToken
interface MySession extends Session {
  accessToken?: string;
}


const handler = NextAuth({
    pages: {
        signIn: "/signup",
        // logIn: "/login"
      },

    providers: [
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",

        }),
        AppleProvider({
            clientId: process.env.APPLE_CLIENT_ID!,
            clientSecret: process.env.APPLE_CLIENT_SECRET!,
          }),

          CredentialsProvider({
            name: 'Credentials',
            credentials: {
              email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              console.log("Authorizing:", credentials);
              // Check if credentials are defined and both email and password are provided
              if (!credentials || !credentials.email || !credentials.password) {
                console.log('Credentials are missing or incomplete');
                return null; // Early return if credentials are missing or incomplete
              }
          
              try {
                // Authenticate against Firebase
                const { email, password } = credentials;
                const userRecord = await auth.getUserByEmail(email); // Assuming auth is correctly imported from Firebase Admin


                // Return user data for NextAuth
                const user = { id: userRecord.uid, email: userRecord.email, name: userRecord.displayName };
                return user;

              } catch (error) {
                console.error('Error in Firebase Authentication:', error);
                return null;
              }
            }
          }),


        ],
        callbacks: {
          async jwt({ token, user, account }) {
              // If the user just logged in or the account is updated, add the token to the JWT
              const extendedUser = user as ExtendedUser; // Type assertion
              if (account && extendedUser?.token) {
                token.accessToken = extendedUser.token;
              }
              return token;
          }, async session({ session, token }) {
            // Cast session to your custom session type
            const customSession = session as MySession;
            // Add the `accessToken` to the session

            if (token.accessToken) {
              const newToken = token as MyToken
                customSession.accessToken = newToken.accessToken;
            }
            return customSession;
        },

      },

});

export { handler as GET, handler as POST };