import { HttpResponse, http } from 'msw'

const allPosts = new Map()
allPosts.set(123, { title: 'How to be with X-mas with girl-friend' })

const { API_HOST } = process.env

export const postHandlers = [
  http.get(`${API_HOST}/api/posts`, () => {
    return HttpResponse.json({ title: 'How to be friend with you' })
  }),
]
