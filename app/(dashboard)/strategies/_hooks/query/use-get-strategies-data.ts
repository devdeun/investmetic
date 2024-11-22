import getStrategiesData from '@/app/(dashboard)/strategies/_api/get-strategies'
import { useQuery } from '@tanstack/react-query'

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
