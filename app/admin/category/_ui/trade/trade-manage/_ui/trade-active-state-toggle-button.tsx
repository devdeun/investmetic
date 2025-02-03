'use client'

import { CSSProperties } from 'react'

import { Button } from '@/shared/ui/button'

import useToggleTradeActiveState from '../_hooks/query/use-toggle-trade-active-state'

interface Props {
  active?: boolean
  tradeTypeId: number
}

const TradeActiveStateToggleButton = ({ active, tradeTypeId }: Props) => {
  const { mutate, isPending } = useToggleTradeActiveState(tradeTypeId)
  const onButtonClick = () => {
    mutate()
  }

  return (
    <Button
      onClick={onButtonClick}
      variant={active ? 'outline' : 'filled'}
      size="small"
      style={buttonStyles}
      disabled={isPending}
    >
      {active ? '비활성화' : '활성화'}
    </Button>
  )
}

const buttonStyles: CSSProperties = {
  height: '30px',
  padding: '7px 16px',
  margin: '15px 0',
}

export default TradeActiveStateToggleButton
