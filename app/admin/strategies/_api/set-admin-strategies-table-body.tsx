import AdminStrategiesApproveTd from '../_ui/admin-strategies-approve-td'
import PublicSelect from '../_ui/public-select'
import { StrategiesResponseModel } from '../types'

const setAdminStrategiesTableBody = (data: StrategiesResponseModel['result']['content']) =>
  data.map((data) => {
    return [
      data.strategyId,
      data.createAt,
      data.strategyName,
      data.nickname,
      <PublicSelect data={data} key={data.strategyId} />,
      <AdminStrategiesApproveTd
        isApproved={data.isApproved}
        strategyId={data.strategyId}
        key={data.strategyId}
      />,
    ]
  })

export default setAdminStrategiesTableBody
