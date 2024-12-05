import { StrategiesResponseModel } from '../types'

const setAdminStrategiesTableBody = (data: StrategiesResponseModel['result']['content']) =>
  data.map((data, idx) => {
    return [
      idx + 1,
      data.createAt,
      data.strategyName,
      data.nickname,
      data.isPublic,
      data.isApproved,
      'button',
    ]
  })

export default setAdminStrategiesTableBody
