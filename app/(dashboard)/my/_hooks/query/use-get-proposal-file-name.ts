import { useQuery } from '@tanstack/react-query'

import getProposalFileName from '../../_api/get-proposal-file-name'
import { QUERY_KEY } from '@/shared/constants/query-key'

const useGetProposalFileName = (strategyId: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.STRATEGY_PROPOSAL_FILE_NAME, strategyId],
    queryFn: () => getProposalFileName(strategyId),
    enabled: !!strategyId,
  })
}

export default useGetProposalFileName
