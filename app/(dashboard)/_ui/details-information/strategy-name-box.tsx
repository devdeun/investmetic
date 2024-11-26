import React from 'react'

import StrategiesIcon from '@/app/(dashboard)/_ui/strategies-item/strategies-icon'
import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  iconUrl: string[]
  name: string
  hasButton?: boolean
}

const StrategyNameBox = ({ iconUrl, name, hasButton = true }: Props) => {
  return (
    <div className={cx('name-container')}>
      <StrategiesIcon icon={iconUrl} />
      <p className={cx('name')}>{name}</p>
      {hasButton && <button>제안서 다운로드</button>}
    </div>
  )
}

export default StrategyNameBox
