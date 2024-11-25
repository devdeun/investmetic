import { useMutation } from '@tanstack/react-query'

import { login } from '@/shared/api/auth'
import { setAccessToken, setRefreshToken } from '@/shared/lib/auth-tokens'
import { useAuthStore } from '@/shared/stores/use-auth-store'
import { LoginResponseType, isAdmin } from '@/shared/types/auth'

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (response: LoginResponseType) => {
      const { user, accessToken, refreshToken } = response.data
      setAccessToken(accessToken)
      setRefreshToken(refreshToken)

      if (!isAdmin(user)) {
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
