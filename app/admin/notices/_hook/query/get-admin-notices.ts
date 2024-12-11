import getNotices from '@/app/(landing)/notices/_api/get-notice'
import { useQuery } from '@tanstack/react-query'

interface Props {
  page?: number
  size?: number
}

const useAdminNotices = ({ page, size }: Props = {}) => {
  return useQuery({
    queryKey: ['notices', page, size],
    queryFn: () => getNotices({ page, size }),
  })
}

export default useAdminNotices
