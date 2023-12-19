import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';
import { JWT } from 'next-auth/jwt';
import { Session } from "next-auth";

interface MyToken extends JWT {
  accessToken?: string; // assuming the accessToken is stored in the token
  // any other custom fields in your token should be added here
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
              username: { label: "Username", type: "text", placeholder: "jsmith" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              try {
                // Make a POST request to your authentication API endpoint using Axios
                const response = await axios.post("https://cherubin-shortner.onrender.com/api/auth/login", credentials, {
                  headers: { "Content-Type": "application/json" }
                });
          
                // Extract user data from the response
                const {user,token}:{user:any,token:string} = response.data;
                console.log({user,token})

                // Check if the response is successful and user data is present
                if (response.status === 200 && user) {
                  return   user;
                }else{
                    throw new Error("failed login");
                    
                }

                // If the response is not successful or user data is missing, return null

              } catch (error:any) {
                // Handle any errors that occur during the API request
                console.error("Authentication error:", error?.data);
                return null; // Return null in case of an error
              }
            }
          }),
        ],
        callbacks: {
          async jwt({ token, user, account }) {
              // If the user just logged in or the account is updated, add the token to the JWT
              if (account && user) {
                  token.accessToken = user.token;
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