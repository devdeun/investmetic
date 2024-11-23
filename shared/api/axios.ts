import axios from 'axios'
import { AxiosError, InternalAxiosRequestConfig } from 'axios'

import { getAccessToken } from '@/shared/lib/auth-tokens'
import { useAuthStore } from '@/shared/stores/use-auth-store'
import { getUserFromToken, isTokenExpired, refreshToken } from '@/shared/utils/token-utils'

import { logout } from './auth'

export const createAxiosInstance = (options: { withInterceptors?: boolean } = {}) => {
  const instance = axios.create()

  if (options.withInterceptors && typeof window !== 'undefined') {
    instance.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        const { isLoggedOut } = useAuthStore.getState()
        const accessToken = getAccessToken()

        if (isLoggedOut || !accessToken) {
          return config
        }

        try {
          const user = getUserFromToken(accessToken)
          const isAdmin = user?.role === 'admin'

          if (isAdmin && isTokenExpired(accessToken)) {
            handleLogout()
            return config
          }

          config.headers.Authorization = `Bearer ${accessToken}`
        } catch (error) {
          console.error('토큰 디코딩 실패:', error)
          handleLogout()
        }

        return config
      },
      (error) => Promise.reject(error)
    )

    instance.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        if (!error.config) return Promise.reject(error)

        const originalRequest = error.config
        const { isLoggedOut } = useAuthStore.getState()

        if (isLoggedOut) {
          return Promise.reject(error)
        }

        if (error.response?.status === 401) {
          try {
            const newToken = await refreshToken()
            if (newToken) {
              originalRequest.headers.Authorization = `Bearer ${newToken}`
              return instance(originalRequest)
            }
          } catch (refreshError) {
            console.error('Token refresh failed:', refreshError)
          }

          handleLogout()
        }

        return Promise.reject(error)
      }
    )
  }

  return instance
}

const handleLogout = () => {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('sessionToken')
    logout()
  }
}

const axiosInstance = createAxiosInstance({ withInterceptors: true })

export default axiosInstance
