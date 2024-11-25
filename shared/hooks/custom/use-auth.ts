import { useEffect } from 'react'

import { useLogoutMutation } from '@/shared/hooks/query/auth-queries'
import { getAccessToken, getRefreshToken } from '@/shared/lib/auth-tokens'
import { useAuthStore } from '@/shared/stores/use-auth-store'
import { getUserFromToken, isTokenExpired } from '@/shared/utils/token-utils'

export const useAuth = () => {
  const { user, isAuthenticated, isKeepLoggedIn } = useAuthStore()
  const logout = useLogoutMutation()
  // const { data: tokenStatus } = useTokenStatusQuery(logout)

  useEffect(() => {
    const initializeAuth = () => {
      const accessToken = getAccessToken()
      const refreshToken = getRefreshToken()

      if (!accessToken || !refreshToken) return

      const tokenUser = getUserFromToken(accessToken)
      if (!tokenUser) return

      if (tokenUser.role === 'admin' && isTokenExpired(accessToken)) {
        logout()
        return
      }

      if (tokenUser.role === 'user') {
        const sessionToken = sessionStorage.getItem('sessionToken')
        if (!isKeepLoggedIn && !sessionToken) {
          logout()
          return
        }
      }

      if (!user || user.id !== tokenUser.id) {
        useAuthStore.getState().setAuthState({
          isAuthenticated: true,
          user: tokenUser,
          isLoggedOut: false,
        })
      }
    }

    // initializeAuth()
  }, [])

  return {
    user,
    isAuthenticated,
    isKeepLoggedIn,
    // tokenStatus,
    // isAdminNearExpiry: tokenStatus?.isNearExpiry,
    logout,
  }
}
