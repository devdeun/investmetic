'use client'

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'

import StrategiesIcon from '@/app/(dashboard)/_ui/strategies-item/strategies-icon'
import classNames from 'classnames/bind'

import Input from '@/shared/ui/input'

import useEditInformationStore from '../../my/strategies/manage/[strategyId]/_store/use-edit-information-store'
import useGetProposalDownload from '../../strategies/[strategyId]/_hooks/query/use-get-proposal-download'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  strategyId: number
  iconUrls?: string[]
  iconNames?: string[]
  name: string
  isEditable?: boolean
}

const StrategyNameBox = ({ strategyId, iconUrls, iconNames, name, isEditable = false }: Props) => {
  const information = useEditInformationStore((state) => state.information)
  const setStrategyName = useEditInformationStore((state) => state.actions.setStrategyName)
  const { mutate } = useGetProposalDownload()

  const handleDownload = () => {
    mutate({ strategyId, name })
  }

  useEffect(() => {
    setStrategyName(name)
  }, [])

  return (
    <div className={cx('name-container')}>
      <StrategiesIcon iconUrls={iconUrls} iconNames={iconNames} isDetailsPage={true} />
      {isEditable ? (
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStrategyName(e.target.value)}
          inputSize="small"
          className={cx('name-input')}
          maxLength={16}
          value={information.strategyName as string}
        />
      ) : (
        <p className={cx('name')}>{name}</p>
      )}
      <button onClick={handleDownload}>제안서 다운로드</button>
    </div>
  )
}

export default StrategyNameBox
