import { jwtDecode } from 'jwt-decode'
import { HttpResponse, http } from 'msw'

import { ERROR_MESSAGES } from '@/shared/constants/error-messages'
import { LoginFormDataModel, TokenPayloadModel, UserModel } from '@/shared/types/auth'

const MOCK_USERS: Record<string, UserModel> = {
  'test@example.com': {
    id: '1',
    email: 'test@example.com',
    name: 'user1',
    role: 'user',
    createdAt: '2024-01-01T00:00:00Z',
  },
  'admin@example.com': {
    id: '2',
    email: 'admin@example.com',
    name: 'user2',
    role: 'admin',
    createdAt: '2024-01-01T00:00:00Z',
  },
}

const createToken = (user: UserModel, isAdmin: boolean) => {
  const now = Math.floor(Date.now() / 1000)
  const exp = now + (isAdmin ? 1800 : 7 * 24 * 60 * 60)
  return `mock_${btoa(JSON.stringify({ user, exp, iat: now }))}`
}

export const authHandlers = [
  http.post('/api/users/login', async ({ request }) => {
    const { email, password } = (await request.json()) as LoginFormDataModel
    const user = MOCK_USERS[email]

    if (user && password === 'password123') {
      const isAdmin = user.role === 'admin'
      const accessToken = createToken(user, isAdmin)
      const refreshToken = createToken(user, isAdmin)

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
      const decoded = jwtDecode<TokenPayloadModel>(refreshToken)
      const isAdmin = decoded.user.role === 'admin'

      const accessToken = createToken(decoded.user, isAdmin)
      const newRefreshToken = createToken(decoded.user, isAdmin)

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
