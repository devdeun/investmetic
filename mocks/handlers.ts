import { authHandlers, postHandlers, userHandlers } from './handlers/'

const handlers = [...userHandlers, ...postHandlers, ...authHandlers]

export { handlers }
