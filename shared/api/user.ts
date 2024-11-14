import { UserModel } from '@/shared/types/user'

export const fetchUser = () => {
  const user: UserModel = {
    id: '123',
    imageUrl: 'S3 링크',
    nickname: '김아무개씨',
    email: 'kimamugae@naver.com',
    role: 'trader_admin',
  }

  return user
}
