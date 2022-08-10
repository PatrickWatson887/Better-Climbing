import { DefaultJWT } from 'next-auth/jwt'

export type Role = 'admin' | 'coach' | 'user'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    /** The user's roles. */
    roles: Role[]
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    roles?: Role[]
  }
}
