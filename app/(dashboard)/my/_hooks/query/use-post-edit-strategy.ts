import { QueryClient, useMutation } from '@tanstack/react-query'

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
      queryClient.invalidateQueries({ queryKey: ['strategyDetails', strategyId] })
    },
  })
}

export default usePostEditStrategy
