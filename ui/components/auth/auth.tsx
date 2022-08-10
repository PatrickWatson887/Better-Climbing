import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { PageAuth } from 'types/pages'

export const Auth: React.FC<{ auth: PageAuth, children?: any }> = ({ auth, children }) => {
  const { role, loading: Loading, unauthorized } = auth
  const router = useRouter()

  const { data: session } = useSession({
    required: true,
  })

  const isUser = !!session?.user

  console.log('Authentication enabled for this page', {
    role,
    unauthorized,
    session,
  })

  // Redirect if unauthorized
  useEffect(() => {
    if (session?.roles) {
      if (!session.roles.some((userRole) => role.includes(userRole))) {
        router.push(unauthorized)
      }
    }
  }, [session?.roles, role, router, unauthorized])

  // User authenticated and has approved role
  if (isUser) {
    return <>{children}</>
  }

  // Session is being fetched, or no user.
  return <Loading /> ?? <div>Loading...</div>
}
