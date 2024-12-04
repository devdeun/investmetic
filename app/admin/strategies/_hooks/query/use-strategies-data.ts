import { useQuery } from '@tanstack/react-query'

import getStrategies from '../../_api/get-strategies'

const useStrategiesData = () => {
  return useQuery({
    queryKey: ['adminStrategies'],
    queryFn: () => getStrategies(),
  })
}

export default useStrategiesData
