import { useQuery } from '@tanstack/react-query'

import getDetailsInformation from '../../_api/get-details-information'

interface Props {
  isReady: boolean
  strategyId: string
}

const useGetDetailsInformationData = ({ isReady, strategyId }: Props) => {
  return useQuery({
    queryKey: ['strategyDetails', strategyId],
    queryFn: () => getDetailsInformation(isReady, strategyId),
    enabled: isReady,
  })
}

export default useGetDetailsInformationData
