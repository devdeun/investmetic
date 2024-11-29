export type UserType = 'TRADER' | 'INVESTOR'

export type RoleType = UserType | `${UserType}_ADMIN`

export interface UserModel {
  id: string
  email: string
  name: string
  nickname: string
  role: RoleType
  createdAt?: string
  imageUrl: string
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
  data: T
  code?: string
}

export type LoginResponseType = ApiResponseModel<AuthResponseModel>
export type TokenResponseType = ApiResponseModel<TokenDataModel>

export interface TokenPayloadModel {
  user: UserModel
  exp: number
  iat: number
}

export interface TokenStatusModel {
  isValid: boolean
  timeUntilExpiry: number
  isNearExpiry: boolean
}

export const isAdmin = (user: UserModel | null): boolean => {
  if (!user) return false
  return user.role.includes('ADMIN')
}

export const isTrader = (user: UserModel | null): boolean => {
  if (!user) return false
  return user.role.includes('TRADER')
}
