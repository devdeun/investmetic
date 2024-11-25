import { HttpResponse, http } from 'msw'

import { ERROR_MESSAGES } from '@/shared/constants/error-messages'
import { LoginFormDataModel, TokenPayloadModel, UserModel, isAdmin } from '@/shared/types/auth'

const MOCK_USERS: Record<string, UserModel> = {
  'test@example.com': {
    id: '1',
    email: 'test@example.com',
    name: '김다은',
    nickname: 'devdeun',
    role: 'trader',
    createdAt: '2024-01-01T00:00:00Z',
    imageUrl: 'https://randomuser.me/api',
  },
  'admin@example.com': {
    id: '2',
    email: 'admin@example.com',
    name: '권혁준',
    nickname: 'redhero',
    role: 'trader_admin',
    createdAt: '2024-01-01T00:00:00Z',
    imageUrl: 'https://randomuser.me/api',
  },
}

const createToken = (user: UserModel, isAdmin: boolean) => {
  const now = Math.floor(Date.now() / 1000)
  const exp = now + (isAdmin ? 1800 : 7 * 24 * 60 * 60)
  const payload = { user, exp, iat: now }
  return `mock_${btoa(encodeURIComponent(JSON.stringify(payload)))}`
}

const decodeToken = (token: string) => {
  const payload = token.replace('mock_', '')
  return JSON.parse(decodeURIComponent(atob(payload))) as TokenPayloadModel
}

export const authHandlers = [
  http.post('/api/users/login', async ({ request }) => {
    const { email, password } = (await request.json()) as LoginFormDataModel
    const user = MOCK_USERS[email]

    if (user && password === 'password123') {
      const accessToken = createToken(user, isAdmin(user))
      const refreshToken = createToken(user, isAdmin(user))

      return HttpResponse.json({
        isSuccess: true,
        message: '로그인 성공',
        data: { accessToken, refreshToken, user },
      })
    }

    return HttpResponse.json(
      {
        isSuccess: false,
        message: ERROR_MESSAGES.AUTH.INVALID_CREDENTIALS,
        code: 'INVALID_CREDENTIALS',
      },
      { status: 400 }
    )
  }),

  http.post('/api/users/reissue/refreshtoken', async ({ request }) => {
    const authHeader = request.headers.get('Authorization')
    const refreshToken = authHeader?.replace('Bearer ', '')

    if (!refreshToken) {
      return HttpResponse.json(
        { isSuccess: false, message: ERROR_MESSAGES.AUTH.INVALID_TOKEN },
        { status: 401 }
      )
    }

    try {
      const decoded = decodeToken(refreshToken)

      const accessToken = createToken(decoded.user, isAdmin(decoded.user))
      const newRefreshToken = createToken(decoded.user, isAdmin(decoded.user))

      return HttpResponse.json({
        isSuccess: true,
        message: '토큰 갱신 성공',
        data: { accessToken, refreshToken: newRefreshToken },
      })
    } catch {
      return HttpResponse.json(
        { isSuccess: false, message: ERROR_MESSAGES.AUTH.REFRESH_FAILED },
        { status: 401 }
      )
    }
  }),
]
