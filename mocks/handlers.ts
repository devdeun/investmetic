import { HttpResponse, http } from 'msw'

const { API_HOST } = process.env

const handlers = [
  http.get(`${API_HOST}/api/users`, () => {
    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),
]

export { handlers }
