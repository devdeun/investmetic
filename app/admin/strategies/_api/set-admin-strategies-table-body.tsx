import { Button } from '@/shared/ui/button'

import AdminStrategiesApproveTd from '../_ui/admin-strategies-approve-td'
import StrategyDeleteButton from '../_ui/button/strategy-delete-button copy'
import StrategyEditButton from '../_ui/button/strategy-edit-button'
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
      <Button.ButtonGroup key={data.strategyId}>
        <StrategyEditButton strategyId={data.strategyId} />
        <StrategyDeleteButton strategyId={data.strategyId} />
      </Button.ButtonGroup>,
    ]
  })

export default setAdminStrategiesTableBody
