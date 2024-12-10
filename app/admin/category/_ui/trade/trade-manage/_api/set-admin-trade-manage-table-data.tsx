import Image from 'next/image'

import TradeActiveStateToggleButton from '../_ui/trade-active-state-toggle-button'
// import StockActiveStateToggleButton from '../../../stock/stock-manage/_ui/stock-active-state-toggle-button'
import { TradeResponseModel } from '../types'

const setAdminTradeManageTableData = (data: TradeResponseModel['result']) =>
  data?.map((data) => [
    data.tradeName,
    <Image
      src={data.tradeTypeIconUrl}
      alt={data.tradeName}
      width={24}
      height={24}
      key={data.tradeTypeId}
    />,
    <TradeActiveStateToggleButton tradeTypeId={data.tradeTypeId} active key={data.tradeTypeId} />,
  ]) ?? []

export default setAdminTradeManageTableData
