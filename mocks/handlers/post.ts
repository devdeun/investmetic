import { HttpResponse, http } from 'msw'

const allPosts = new Map()
allPosts.set(123, { title: 'How to be with X-mas with girl-friend' })

// const { API_HOST } = process.env

export const postHandlers = [
  http.get('/api/posts', () => {
    return HttpResponse.json({
      title: '오늘 점심은 뭐가 좋을까',
    })
  }),
  http.get('http://localhost:3000/api/posts', () => {
    return HttpResponse.json({
      title: '역시 제육볶음이지ㅋ',
    })
  }),
]
