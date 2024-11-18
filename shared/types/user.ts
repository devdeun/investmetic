export interface UserModel {
  id: string
  imageUrl: string
  nickname: string
  email: string
  role: RoleType
}

export type UserType = 'trader' | 'investor'

export type RoleType = UserType | `${UserType}_admin`
