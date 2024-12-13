import { QueryClient, useMutation } from '@tanstack/react-query'

import { QUERY_KEY } from '@/shared/constants/query-key'

import postEditStrategy, { ContentModel } from '../../_api/post-edit-strategy'

const usePostEditStrategy = () => {
  const queryClient = new QueryClient()
  return useMutation<
    boolean | null | undefined,
    unknown,
    { strategyId: number; information: ContentModel }
  >({
    mutationFn: ({ strategyId, information }: { strategyId: number; information: ContentModel }) =>
      postEditStrategy(strategyId, information),
    onSuccess: (strategyId) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.STRATEGY_DETAILS, strategyId] })
    },
  })
}

export default usePostEditStrategy
