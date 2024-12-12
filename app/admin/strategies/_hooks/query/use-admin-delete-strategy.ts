import { deleteMyStrategy } from '@/app/(dashboard)/my/_api/delete-my-strategy'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const useDeleteAdminStrategy = (strategyId: number) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => deleteMyStrategy(strategyId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['adminStrategies'],
      })
    },
  })
}

export default useDeleteAdminStrategy
