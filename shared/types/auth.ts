export type UserRoleType = 'admin' | 'user'

export interface UserModel {
  id: string
  email: string
  name: string
  role: UserRoleType
  createdAt?: string
}

export interface LoginFormDataModel {
  email: string
  password: string
}

export interface TokenDataModel {
  accessToken: string
  refreshToken: string
}

export interface AuthResponseModel {
  accessToken: string
  refreshToken: string
  user: UserModel
  keepLoggedIn?: boolean
}

export interface ApiResponseModel<T> {
  isSuccess: boolean
  message: string
  data?: T
  code?: string
}

export type LoginResponseType = ApiResponseModel<AuthResponseModel>
export type TokenResponseType = ApiResponseModel<TokenDataModel>

export interface TokenPayloadModel {
  user: UserModel
  exp: number
  iat: number
}

export const isAdmin = (user: UserModel | null): user is UserModel & { role: 'admin' } => {
  return user?.role === 'admin'
}

export const isUser = (user: UserModel | null): user is UserModel & { role: 'user' } => {
  return user?.role === 'user'
}
