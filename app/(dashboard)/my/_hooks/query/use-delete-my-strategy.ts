import { useMutation, useQueryClient } from '@tanstack/react-query'

import { deleteMyStrategy } from '../../_api/delete-my-strategy'

export const useDeleteMyStrategy = () => {
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: (strategyId: number) => deleteMyStrategy(strategyId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['myStrategies'],
      })
    },
  })

  return { mutate, isPending }
}
