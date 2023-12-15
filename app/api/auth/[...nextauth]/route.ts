import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';
import { JWT } from 'next-auth/jwt';

interface MyToken extends JWT {
  accessToken?: string; // assuming the accessToken is stored in the token
  // any other custom fields in your token should be added here
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
                const {user} = response.data;
          
                // Check if the response is successful and user data is present
                if (response.status === 200 && user) {
                  return { id: user.id, name: user.name, email: user.email };
                }else{
                    throw new Error("failed login");
                    
                }
          
                // If the response is not successful or user data is missing, return null

              } catch (error) {
                // Handle any errors that occur during the API request
                console.error("Authentication error:", error);
                return null; // Return null in case of an error
              }
            }
          }),
        ],
        // callbacks: {
        //     async session(session: MySession, token: JWT) {
        //       if (token?.accessToken) {
        //         session.accessToken = token.accessToken;
        //       }
        //       return session;
        //     },
        //   },
});

export { handler as GET, handler as POST };