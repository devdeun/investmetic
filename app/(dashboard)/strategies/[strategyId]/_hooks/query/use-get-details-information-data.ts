import { useQuery } from '@tanstack/react-query'

import { StrategyDetailsInformationModel } from '@/shared/types/strategy-data'

import getDetailsInformation from '../../_api/get-details-information'
import { InformationType } from '../../page'

interface Props {
  strategyId: number
}

const useGetDetailsInformationData = ({
  strategyId,
}: Props): {
  data:
    | {
        detailsSideData: InformationType[]
        detailsInformationData: StrategyDetailsInformationModel
      }
    | undefined
} => {
  return useQuery({
    queryKey: ['strategyDetails', strategyId],
    queryFn: () => getDetailsInformation(strategyId),
  })
}

export default useGetDetailsInformationData
