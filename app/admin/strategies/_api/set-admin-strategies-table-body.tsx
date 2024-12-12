import { Button } from '@/shared/ui/button'

import AdminStrategiesApproveTd from '../_ui/admin-strategies-approve-td'
import StrategyDeleteButton from '../_ui/button/strategy-delete-button copy'
import StrategyEditButton from '../_ui/button/strategy-edit-button'
import { StrategiesResponseModel } from '../types'

const setAdminStrategiesTableBody = (data: StrategiesResponseModel['result']['content']) =>
  data.map((data, idx) => {
    return [
      idx + 1,
      data.createAt,
      data.strategyName,
      data.nickname,
      data.isPublic === 'PUBLIC' ? '공개' : '비공개',
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
