import { useMutation, useQueryClient } from '@tanstack/react-query'

import patchAdminStrategyPublic from '../../_api/patch-strategy-role'
import { StrategiesPublicStateType } from '../../types'

const usePatchStrategyPublic = (strategyId: number, isPublic: StrategiesPublicStateType) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => patchAdminStrategyPublic(strategyId, isPublic),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adminStrategies'] })
    },
    onError: () => {
      alert('실패했음')
    },
  })
}

export default usePatchStrategyPublic
