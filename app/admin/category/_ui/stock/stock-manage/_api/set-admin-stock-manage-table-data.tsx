import Image from 'next/image'

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
    <StockActiveStateToggleButton
      active={isActive}
      stockTypeId={data.stockTypeId}
      key={data.stockTypeId}
    />,
  ]) ?? []

export default setAdminStockManageTableData
