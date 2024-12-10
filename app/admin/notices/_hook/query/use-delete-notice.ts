import { useMutation, useQueryClient } from '@tanstack/react-query'

import deleteNotice from '../../_api/delete-notice'

const useDeleteNotice = (noticeId: number) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => deleteNotice(noticeId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notices'] })
    },
  })
}

export default useDeleteNotice
