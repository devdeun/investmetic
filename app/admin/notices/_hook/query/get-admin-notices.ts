import getNotices from '@/app/(landing)/notices/_api/get-notice'
import { useSuspenseQuery } from '@tanstack/react-query'

// import getNotices from '../_api/get-notice'

interface Props {
  page?: number
  size?: number
}

const useAdminNotices = ({ page, size }: Props = {}) => {
  return useSuspenseQuery({
    queryKey: ['notices', page, size],
    queryFn: () => getNotices({ page, size }),
  })
}

export default useAdminNotices
