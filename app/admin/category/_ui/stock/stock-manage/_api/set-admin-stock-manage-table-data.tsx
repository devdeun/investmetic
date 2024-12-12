import Image from 'next/image'

import { Button } from '@/shared/ui/button'

import InactiveStockDeleteButton from '../_ui/inactive-stock-delete-button'
import StockActiveStateToggleButton from '../_ui/stock-active-state-toggle-button'
import { StockResponseModel } from '../types'

const setAdminStockManageTableData = (data: StockResponseModel['result'], isActive: boolean) =>
  data?.content.map((data) => [
    data.stockTypeId,
    data.stockTypeName,
    <Image
      src={data.stockTypeIconUrl}
      alt={data.stockTypeName}
      width={42}
      height={24}
      key={data.stockTypeName}
    />,
    <Button.ButtonGroup key={data.stockTypeId}>
      <StockActiveStateToggleButton active={isActive} stockTypeId={data.stockTypeId} />
      {!isActive && <InactiveStockDeleteButton stockTypeId={data.stockTypeId} />}
    </Button.ButtonGroup>,
  ]) ?? []

export default setAdminStockManageTableData
