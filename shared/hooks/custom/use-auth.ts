import { useEffect } from 'react'

import { useRouter } from 'next/navigation'

import { AUTH_TIME } from '@/shared/constants/auth'
import { PATH } from '@/shared/constants/path'
import {
  getAccessToken,
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
} from '@/shared/lib/auth-tokens'
import { useAuthStore } from '@/shared/stores/use-auth-store'
import { TokenStatusModel, isAdmin } from '@/shared/types/auth'
import { getTimeUntilExpiry, getUserFromToken, isTokenExpired } from '@/shared/utils/token-utils'

export const useAuth = () => {
  const router = useRouter()
  const { user, isKeepLoggedIn } = useAuthStore()

  const logout = () => {
    try {
      removeAccessToken()
      removeRefreshToken()
      sessionStorage.removeItem('sessionToken')

      useAuthStore.getState().setAuthState({
        isAuthenticated: false,
        user: null,
        isKeepLoggedIn: false,
        isLoggedOut: true,
      })

      router.replace(PATH.SIGN_IN)
    } catch (err) {
      console.error('로그아웃 실패:', err)
    }
  }

  const checkTokenStatus = (): TokenStatusModel | null => {
    const accessToken = getAccessToken()
    const refreshToken = getRefreshToken()

    if (!accessToken || !refreshToken) {
      logout()
      return null
    }

    const tokenUser = getUserFromToken(accessToken)
    if (!tokenUser) {
      logout()
      return null
    }

    const isExpired = isTokenExpired(accessToken)
    const timeUntilExpiry = getTimeUntilExpiry(accessToken)

    if (isAdmin(tokenUser)) {
      if (isExpired) {
        logout()
        return null
      }
      return {
        isValid: !isExpired,
        timeUntilExpiry,
        isNearExpiry: timeUntilExpiry < AUTH_TIME.ADMIN_EXPIRY_WARNING,
      }
    }

    const sessionToken = sessionStorage.getItem('sessionToken')
    if (!isKeepLoggedIn && !sessionToken) {
      logout()
      return null
    }

    return {
      isValid: !isExpired,
      timeUntilExpiry,
      isNearExpiry: false,
    }
  }

  useEffect(() => {
    const initializeAuth = () => {
      const accessToken = getAccessToken()
      const refreshToken = getRefreshToken()

      if (!accessToken || !refreshToken) return

      const tokenUser = getUserFromToken(accessToken)
      if (!tokenUser) return

      if (isAdmin(tokenUser) && isTokenExpired(accessToken)) {
        logout()
        return
      }

      if (!isAdmin(tokenUser)) {
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

    // const interval = setInterval(checkTokenStatus, AUTH_TIME.TOKEN_CHECK_INTERVAL)
    // return () => clearInterval(interval)
  }, [isKeepLoggedIn, router, user])

  return {
    logout,
    checkTokenStatus,
  }
}
