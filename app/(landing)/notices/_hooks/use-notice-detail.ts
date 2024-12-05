import { useQuery } from '@tanstack/react-query'

import { getNoticeDetail } from '../_api/get-notice-detail'

const useNoticeDetail = (noticeId: string) => {
  return useQuery({
    queryKey: ['noticeDetail', noticeId],
    queryFn: () => getNoticeDetail(noticeId),
  })
}

export default useNoticeDetail
