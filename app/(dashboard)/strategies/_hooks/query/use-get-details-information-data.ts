import getDetailsInformation from '@/app/(dashboard)/strategies/_api/get-details-information'
import { useQuery } from '@tanstack/react-query'

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
