import {
  authHandlers,
  postHandlers,
  strategiesHandlers,
  strategyDetailsHandlers,
  userHandlers,
} from './handlers/'

const handlers = [
  ...userHandlers,
  ...postHandlers,
  ...authHandlers,
  ...strategyDetailsHandlers,
  ...strategiesHandlers,
]

export { handlers }
