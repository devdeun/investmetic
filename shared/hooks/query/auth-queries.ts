import { useRouter } from 'next/navigation'

import { useMutation, useQuery } from '@tanstack/react-query'

import { login } from '@/shared/api/auth'
import { AUTH_TIME } from '@/shared/constants/auth'
import { PATH } from '@/shared/constants/path'
import {
  getAccessToken,
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '@/shared/lib/auth-tokens'
import { useAuthStore } from '@/shared/stores/use-auth-store'
import { LoginResponseType, TokenStatusModel } from '@/shared/types/auth'
import { getTimeUntilExpiry, getUserFromToken, isTokenExpired } from '@/shared/utils/token-utils'

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (response: LoginResponseType) => {
      const { user, accessToken, refreshToken } = response.data

      setAccessToken(accessToken)
      setRefreshToken(refreshToken)

      if (user.role === 'user') {
        sessionStorage.setItem('sessionToken', 'true')
      }

      useAuthStore.getState().setAuthState({
        isAuthenticated: true,
        user,
        isLoggedOut: false,
      })
    },
  })
}

export const useLogoutMutation = () => {
  const router = useRouter()

  return () => {
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
    } catch (error) {
      console.error('로그아웃 실패:', error)
    }
  }
}

// export const useTokenStatusQuery = (logout: () => void) => {
//   const { isKeepLoggedIn } = useAuthStore()

//   return useQuery<TokenStatusModel | null>({
//     queryKey: ['tokenStatus'],
//     queryFn: async () => {
//       const accessToken = getAccessToken()
//       const refreshToken = getRefreshToken()

//       if (!accessToken || !refreshToken) {
//         logout()
//         return null
//       }

//       const user = getUserFromToken(accessToken)
//       if (!user) {
//         logout()
//         return null
//       }

//       const isExpired = isTokenExpired(accessToken)
//       const timeUntilExpiry = getTimeUntilExpiry(accessToken)

//       if (user.role === 'admin') {
//         if (isExpired) {
//           // logout()
//           return null
//         }
//         return {
//           isValid: !isExpired,
//           timeUntilExpiry,
//           isNearExpiry: timeUntilExpiry < AUTH_TIME.ADMIN_EXPIRY_WARNING,
//         }
//       }

//       if (user.role === 'user') {
//         const sessionToken = sessionStorage.getItem('sessionToken')
//         if (!isKeepLoggedIn && !sessionToken) {
//           // logout()
//           return null
//         }
//       }

//       return {
//         isValid: !isExpired,
//         timeUntilExpiry,
//         isNearExpiry: false,
//       }
//     },
//     refetchInterval: AUTH_TIME.TOKEN_CHECK_INTERVAL,
//   })
// }
