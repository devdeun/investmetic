import axios from 'axios'

import { StrategiesResponseModel } from '../types'

const patchStrategyApproval = async (strategyId: number, isApproved: boolean) => {
  try {
    const res = await axios.patch<StrategiesResponseModel>(
      `/api/admin/strategies/${strategyId}`,
      null,
      {
        params: {
          isApproved: isApproved ? 'APPROVED' : 'DENY',
        },
      }
    )

    if (!res.data.isSuccess) throw new Error(res.data.message)

    return res.data.data
  } catch (err) {
    console.log('Error : ' + err)
    throw err
  }
}

export default patchStrategyApproval
