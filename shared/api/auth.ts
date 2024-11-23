import { useMutation } from '@tanstack/react-query'

import {
  removeAccessToken,
  removeRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '@/shared/lib/auth-tokens'
import { useAuthStore } from '@/shared/stores/use-auth-store'
import type { LoginFormDataModel, LoginResponseType } from '@/shared/types/auth'

import axiosInstance from './axios'

export const login = async (credentials: LoginFormDataModel): Promise<LoginResponseType> => {
  const response = await axiosInstance.post('/api/users/login', credentials)
  const { user, accessToken, refreshToken } = response.data.data

  setAccessToken(accessToken)
  setRefreshToken(refreshToken)

  useAuthStore.getState().setAuthState({
    isAuthenticated: true,
    user,
    isLoggedOut: false,
  })

  return response.data
}

export const logout = () => {
  if (typeof window !== 'undefined') {
    removeAccessToken()
    removeRefreshToken()

    useAuthStore.getState().setAuthState({
      isAuthenticated: false,
      user: null,
      isKeepLoggedIn: false,
      isLoggedOut: true,
    })
  }
}

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  })
}
