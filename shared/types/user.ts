export interface UserModel {
  id: string
  imageUrl: string
  nickname: string
  email: string
  role: RoleType
}

export type RoleType = 'trader' | 'investor' | 'trader_admin' | 'investor_admin'

export type RoleSelectType = 'trader' | 'investor'
