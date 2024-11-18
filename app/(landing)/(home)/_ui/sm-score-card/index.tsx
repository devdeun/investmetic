'use client'

import classNames from 'classnames/bind'

import Avatar from '@/shared/ui/avatar'

import LineChart from '../line-chart'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

export type CardSizeType = 'small' | 'large'

interface Props {
  name: string
  title: string
  score: number
  percentageChange: number
  chartData: number[]
  ranking: number
  profileImage?: string
  size?: CardSizeType
}

const ScoreCard = ({
  name,
  title,
  score,
  percentageChange,
  chartData,
  ranking,
  profileImage,
  size = 'small',
}: Props) => {
  const isNegative = percentageChange < 0

  return (
    <div className={cx('card-wrapper', size)}>
      <div className={cx('top-frame', size)}>
        <div className={cx('content-area')}>
          <div className={cx('rank')}>Top {ranking}</div>
          <div className={cx('profile')}>
            <Avatar src={profileImage} size="small" />
            <span className={cx('profile-name')}>{name}</span>
          </div>
          <h3 className={cx('title')}>{title}</h3>
        </div>
        <div className={cx('chart-area', size)}>
          <LineChart data={chartData} isNegative={isNegative} size={size} />
        </div>
      </div>
      <div className={cx('bottom-frame')}>
        <div className={cx('sm-score')}>
          <span className={cx('label')}>SM SCORE</span>
          <span className={cx('value', 'score')}>{score.toFixed(2)}</span>
        </div>
        <div className={cx('profit')}>
          <span className={cx('label')}>누적수익률</span>
          <span className={cx('value', { negative: isNegative })}>
            {isNegative ? '' : '+'}
            {percentageChange}%
          </span>
        </div>
      </div>
    </div>
  )
}

export default ScoreCard
