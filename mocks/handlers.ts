import { postHandlers, userHandlers } from './handlers/'

const handlers = [...userHandlers, ...postHandlers]

export { handlers }
