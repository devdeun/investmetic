import { useQuery } from '@tanstack/react-query'

import getMyAccountImages from '../../_api/get-my-account-iamges'

const useGetAccountImages = (strategyId: number) => {
  return useQuery({
    queryKey: ['myAccountImages', strategyId],
    queryFn: () => getMyAccountImages(strategyId),
  })
}

export default useGetAccountImages
