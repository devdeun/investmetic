import { useEffect } from 'react'

import { useRouter } from 'next/navigation'

import { useQuery } from '@tanstack/react-query'

import { logout } from '@/shared/api/auth'
import { PATH } from '@/shared/constants/path'
import { getAccessToken, getRefreshToken } from '@/shared/lib/auth-tokens'
import { useAuthStore } from '@/shared/stores/use-auth-store'
import { getTimeUntilExpiry, getUserFromToken, isTokenExpired } from '@/shared/utils/token-utils'

const TOKEN_CHECK_INTERVAL = 600000 // 10분
const ADMIN_EXPIRY_WARNING = 600000 // 10분

export const useAuth = () => {
  const router = useRouter()
  const { user, isAuthenticated, isKeepLoggedIn } = useAuthStore()

  useEffect(() => {
    const initializeAuth = () => {
      const accessToken = getAccessToken()
      const refreshToken = getRefreshToken()

      if (!accessToken || !refreshToken) {
        handleLogout()
        return
      }

      const user = getUserFromToken(accessToken)
      if (!user) {
        handleLogout()
        return
      }

      if (user.role === 'admin' && isTokenExpired(accessToken)) {
        handleLogout()
        return
      }

      if (user.role === 'user') {
        const sessionToken = sessionStorage.getItem('sessionToken')
        if (!isKeepLoggedIn && !sessionToken) {
          handleLogout()
          return
        }
      }

      useAuthStore.getState().setAuthState({
        isAuthenticated: true,
        user,
        isLoggedOut: false,
      })
    }

    initializeAuth()
  }, [isKeepLoggedIn])

  const { data: tokenStatus } = useQuery({
    queryKey: ['tokenStatus'],
    queryFn: async () => {
      const accessToken = getAccessToken()
      const refreshToken = getRefreshToken()

      if (!accessToken || !refreshToken) {
        handleLogout()
        return null
      }

      const user = getUserFromToken(accessToken)
      if (!user) {
        handleLogout()
        return null
      }

      const isExpired = isTokenExpired(accessToken)
      const timeUntilExpiry = getTimeUntilExpiry(accessToken)

      if (user.role === 'admin') {
        if (isExpired) {
          handleLogout()
          return null
        }
        return {
          isValid: !isExpired,
          timeUntilExpiry,
          isNearExpiry: timeUntilExpiry < ADMIN_EXPIRY_WARNING,
        }
      }

      if (user.role === 'user') {
        const sessionToken = sessionStorage.getItem('sessionToken')
        if (!isKeepLoggedIn && !sessionToken) {
          handleLogout()
          return null
        }
      }

      return {
        isValid: !isExpired,
        timeUntilExpiry,
        isNearExpiry: false,
      }
    },
    refetchInterval: TOKEN_CHECK_INTERVAL,
  })

  const handleLogout = () => {
    sessionStorage.removeItem('sessionToken')
    logout()
    router.replace(PATH.SIGN_IN)
  }

  return {
    user,
    isAuthenticated,
    isKeepLoggedIn,
    tokenStatus,
    isAdminNearExpiry: tokenStatus?.isNearExpiry,
    logout: handleLogout,
  }
}
