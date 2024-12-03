interface UsersResponseBaseModel<T extends boolean> {
  isSuccess: T
  message: string
  code: T extends false ? number : null
}

type RoleType = 'TRADER' | 'TRADER_ADMIN' | 'INVESTOR' | 'INVESTOR'

interface UserInfoModel {
  userId: number
  userName: string
  email: string
  imageUrl: string | null
  nickname: string
  phone: string
  infoAgreement: boolean
  role: RoleType
}

export interface AdminUsersResponeseModel extends UsersResponseBaseModel<boolean> {
  result: {
    content: Array<UserInfoModel>
    page: number
    size: number
    totalElements: number
    totalPages: number
    first: boolean
    last: boolean
  }
}

export type UserRoleType = '모든 회원' | '일반' | '트레이더' | '관리자'
