'use client'

import { useState } from 'react'

import Select from '@/shared/ui/select'

import usePatchUserRole from '../_hooks/query/use-patch-strategy-role'
import { strategyPublicOptions } from '../constants'
// import { InvestorOptions, TraderOptions } from '../constants'
import { StrategiesPublicStateType, StrategiesResponseModel } from '../types'

interface Props {
  data: StrategiesResponseModel['result']['content'][number]
}

const PublicSelect = ({ data }: Props) => {
  const { strategyId, isPublic } = data
  const [value, setValue] = useState(isPublic)

  const { mutate } = usePatchUserRole(strategyId, value)

  return (
    <Select
      value={value}
      onChange={(v) => {
        setValue(v as StrategiesPublicStateType)
        mutate()
      }}
      options={strategyPublicOptions}
      key={strategyId}
    />
  )
}

export default PublicSelect
