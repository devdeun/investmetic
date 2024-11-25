import { jwtDecode } from 'jwt-decode'

import { getRefreshToken, setAccessToken, setRefreshToken } from '@/shared/lib/auth-tokens'
import type { TokenPayloadModel, TokenResponseType } from '@/shared/types/auth'

import axiosInstance from '../api/axios'

let isRefreshing = false
let refreshSubscribers: ((token: string) => void)[] = []

export const refreshToken = async (): Promise<string | null> => {
  const refreshToken = getRefreshToken()
  if (!refreshToken) return null

  if (isRefreshing) {
    return new Promise((resolve) => {
      refreshSubscribers.push((token) => resolve(token))
    })
  }

  try {
    isRefreshing = true

    const response = await axiosInstance.post<TokenResponseType>(
      '/api/users/reissue/refreshtoken',
      {},
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    )

    if (!response.data.data) {
      return null
    }

    const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data.data

    if (newAccessToken && newRefreshToken) {
      setAccessToken(newAccessToken)
      setRefreshToken(newRefreshToken)
      refreshSubscribers.forEach((cb) => cb(newAccessToken))
      return newAccessToken
    }

    return null
  } catch (error) {
    console.error('Token refresh failed:', error)
    return null
  } finally {
    isRefreshing = false
    refreshSubscribers = []
  }
}

export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = jwtDecode<TokenPayloadModel>(token)
    return decoded.exp * 1000 < Date.now()
  } catch {
    return true
  }
}

export const getTimeUntilExpiry = (token: string): number => {
  try {
    const decoded = jwtDecode<TokenPayloadModel>(token)
    return decoded.exp * 1000 - Date.now()
  } catch {
    return 0
  }
}

export const getUserFromToken = (token: string | null): TokenPayloadModel['user'] | null => {
  if (!token) return null
  try {
    const decoded = jwtDecode<TokenPayloadModel>(token)
    return decoded.user
  } catch {
    return null
  }
}
