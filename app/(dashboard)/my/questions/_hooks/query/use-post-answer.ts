import { useMutation, useQueryClient } from '@tanstack/react-query'

import postAnswer from '../../_api/post-answer'

const usePostAnswer = (questionId: number) => {
  const QueryClient = useQueryClient()
  return useMutation({
    mutationFn: (content: string) => postAnswer(questionId, content),
    onSuccess: () => {
      QueryClient.invalidateQueries({
        queryKey: ['questionDetails', questionId],
      })

      QueryClient.invalidateQueries({
        queryKey: ['questionList'],
      })
    },
  })
}

export default usePostAnswer
