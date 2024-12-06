import { useQuery } from '@tanstack/react-query'

import { TradersParamsModel, getTraders } from '../_api/get-traders'

const useGetTraders = (params: TradersParamsModel) => {
  return useQuery({
    queryKey: ['traders', params],
    queryFn: () => getTraders(params),
  })
}

export default useGetTraders
