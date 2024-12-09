import { useQuery } from '@tanstack/react-query'

import { getTraderProfile } from '../_api/get-trader-profile'

const useGetTraderProfile = (traderId: number) => {
  return useQuery({
    queryKey: ['traders', traderId],
    queryFn: () => getTraderProfile(traderId),
  })
}
export default useGetTraderProfile
