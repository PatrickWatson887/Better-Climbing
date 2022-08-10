import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { Role } from 'types/next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      credentials: {
        username: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = {
          id: 1,
          name: credentials?.username,
          email: credentials?.username,
        }

        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
    GithubProvider({
      clientId: process.env.NEXT_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXT_GITHUB_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // User object only passed on initial JWT creation
        token.roles = getRoles(user.email)
      }
      return token
    },
    async session({ session, token }) {
      if (token.roles) session.roles = token.roles
      return session
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.JWT_SECRET
})

const admins = [
  'rossadamcooper@gmail.com',
  'patrick.watson887@gmail.com',
  'danaan.markey@gmail.com',
]

function getRoles(email: string | null | undefined) {
  const roles: Role[] = ['user']

  if (email && admins.includes(email)) roles.push('admin')

  return roles
}
