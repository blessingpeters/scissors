import 'next-auth';

declare module 'next-auth/jwt' {
  /** Extends the built-in JWT type from NextAuth */
  interface JWT {
    accessToken?: string;
  }
}

declare module 'next-auth' {
  /** Extends the built-in User type from NextAuth */
  interface User {
    token?: string;
    id: string;
  }

  /** Extends the built-in Session type from NextAuth */
  interface Session {
   user?: User
  }
}
