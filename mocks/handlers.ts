import {
  postHandlers,
  strategiesHandlers,
  strategyDetailsHandlers,
  userHandlers,
} from './handlers/'

const handlers = [
  ...userHandlers,
  ...postHandlers,
  ...strategyDetailsHandlers,
  ...strategiesHandlers,
]

export { handlers }
