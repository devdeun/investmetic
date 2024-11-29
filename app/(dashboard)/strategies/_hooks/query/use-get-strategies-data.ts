import { useQuery } from '@tanstack/react-query'

import getStrategiesData from '../../_api/get-strategies'

interface Props {
  isReady: boolean
  page: number
  size: number
}

const useGetStrategiesData = ({ isReady, page, size }: Props) => {
  return useQuery({
    queryKey: ['strategies', page, size],
    queryFn: () => getStrategiesData(isReady, page, size),
    enabled: isReady,
  })
}

export default useGetStrategiesData
