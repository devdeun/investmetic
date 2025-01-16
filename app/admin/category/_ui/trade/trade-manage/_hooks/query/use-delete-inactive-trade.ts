import { useMutation, useQueryClient } from '@tanstack/react-query'

import { QUERY_KEY } from '@/shared/constants/query-key'

import deleteInactiveTrade from '../../_api/delete-inactive-trade'

const useDeleteInactiveTrade = (tradeTypeId: number) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => deleteInactiveTrade(tradeTypeId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.ADMIN_TRADES],
      })
    },
    onError: (err) => {
      console.error('Error : ', err)
    },
  })
}

export default useDeleteInactiveTrade
