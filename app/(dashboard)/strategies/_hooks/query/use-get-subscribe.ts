import { useMutation, useQueryClient } from '@tanstack/react-query'

import getSubscribe from '../../_api/get-subscribe'

const useGetSubscribe = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (strategyId: number) => getSubscribe(strategyId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favoriteStrategies'] })
    },
  })
}

export default useGetSubscribe
