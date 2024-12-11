import Image from 'next/image'

import TradeActiveStateToggleButton from '../_ui/trade-active-state-toggle-button'
// import StockActiveStateToggleButton from '../../../stock/stock-manage/_ui/stock-active-state-toggle-button'
import { TradeResponseModel } from '../types'

const setAdminTradeManageTableData = (data: TradeResponseModel['result'], isActive: boolean) =>
  data?.map((data) => [
    data.tradeTypeId,
    data.tradeName,
    <Image
      src={data.tradeTypeIconUrl}
      alt={data.tradeName}
      width={24}
      height={24}
      key={data.tradeTypeId}
    />,
    <TradeActiveStateToggleButton
      active={isActive}
      tradeTypeId={data.tradeTypeId}
      key={data.tradeTypeId}
    />,
  ]) ?? []

export default setAdminTradeManageTableData
