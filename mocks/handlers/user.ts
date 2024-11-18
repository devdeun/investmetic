import { HttpResponse, http } from 'msw'

// const { API_HOST } = process.env
export const userHandlers = [
  http.get('/api/users/check/email', ({ request }) => {
    const url = new URL(request.url)
    const email = url.searchParams.get('email')

    const emailList = new Set(['kbhoon@gmail.com'])

    if (!email || emailList.has(email)) {
      return HttpResponse.json({
        isSuccess: false,
        message: '사용할 수 없는 이메일입니다.',
        code: 2204,
      })
    }

    return HttpResponse.json({
      isSuccess: true,
      message: '사용 가능한 이메일입니다.',
    })
  }),

  http.post('/api/users/signup', async ({ request }) => {
    const newUser = (await request.json()) as { userName: string; password: string }
    const { userName, password } = newUser

    if (!userName || !password) {
      return HttpResponse.json(
        {
          isSuccess: false,
          message: '회원가입에 실패하였습니다.',
          code: 2003,
        },
        { status: 400 }
      )
    }

    return HttpResponse.json(
      {
        isSuccess: true,
        message: '회원가입이 완료되었습니다. 로그인 화면으로 이동합니다.',
      },
      { status: 201 }
    )
  }),

  http.delete('/api/users/:userId', ({ params }) => {
    const { userId } = params

    if (!userId) {
      return HttpResponse.json(
        {
          isSuccess: false,
          message: '회원 탈퇴에 실패하였습니다.',
          code: 2004,
        },
        { status: 400 }
      )
    }

    return HttpResponse.json(
      {
        isSuccess: true,
        message: '탈퇴가 완료되었습니다. 그 동안 서비스를 이용해주셔서 감사합니다.',
      },
      { status: 201 }
    )
  }),
]
