import { useMutation, useQueryClient } from '@tanstack/react-query'

import deleteInactiveStock from '../../_api/delete-inactive-stock'

const useDeleteInactiveStock = (stockTypeId: number) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => deleteInactiveStock(stockTypeId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['adminStocks'],
      })
    },
    onError: (err) => {
      console.error('Error : ', err)
    },
  })
}

export default useDeleteInactiveStock
