import type { LoginFormDataModel, LoginResponseType } from '@/shared/types/auth'

import axiosInstance from './axios'

export const login = async (credentials: LoginFormDataModel): Promise<LoginResponseType> => {
  const response = await axiosInstance.post('/api/users/login', credentials)
  return response.data
}
