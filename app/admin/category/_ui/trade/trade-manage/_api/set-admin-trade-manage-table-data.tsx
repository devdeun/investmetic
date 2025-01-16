import Image from 'next/image'

import { Button } from '@/shared/ui/button'

import InactiveTradeDeleteButton from '../_ui/inactive-trade-delete-button'
import TradeActiveStateToggleButton from '../_ui/trade-active-state-toggle-button'
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
    <Button.ButtonGroup key={data.tradeTypeId}>
      <TradeActiveStateToggleButton
        active={isActive}
        tradeTypeId={data.tradeTypeId}
        key={data.tradeTypeId}
      />
      {!isActive && <InactiveTradeDeleteButton tradeTypeId={data.tradeTypeId} />}
    </Button.ButtonGroup>,
  ]) ?? []

export default setAdminTradeManageTableData
