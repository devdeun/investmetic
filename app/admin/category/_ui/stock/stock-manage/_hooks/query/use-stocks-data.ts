import { useSuspenseQuery } from '@tanstack/react-query'

import getStocks from '../../_api/get-stocks'

type ArgType = 'active' | 'inactive'

const useStocksData = (activateState: ArgType, page: number = 1, size: number = 10) => {
  const isActive = activateState === 'active' ? true : false

  return useSuspenseQuery({
    queryKey: ['adminStocks', activateState, page, size],
    queryFn: () => getStocks(isActive, page, size),
  })
}

export default useStocksData
