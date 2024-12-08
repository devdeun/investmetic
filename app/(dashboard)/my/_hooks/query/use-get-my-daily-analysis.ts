import { useQuery } from '@tanstack/react-query'

import getMyDailyAnalysis from '../../_api/get-my-daily-analysis'

const useGetMyDailyAnalysis = (strategyId: number, page: number, size: number) => {
  return useQuery({
    queryKey: ['myDailyAnalysis', strategyId, page, size],
    queryFn: () => getMyDailyAnalysis(strategyId, page, size),
  })
}

export default useGetMyDailyAnalysis
