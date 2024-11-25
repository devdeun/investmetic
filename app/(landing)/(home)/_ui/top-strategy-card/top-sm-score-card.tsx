'use client'

import TopStrategyCard from '.'
import { CardSizeType } from '../sm-score-card'
import { TopStrategyCardCommonProps } from './types'

interface Props extends TopStrategyCardCommonProps {
  size?: CardSizeType
  score: number
}

const TopSmScoreCard = ({
  size = 'small',
  ranking,
  nickname,
  title,
  chartData,
  percentageChange,
  score,
}: Props) => {
  return (
    <TopStrategyCard size={size}>
      <TopStrategyCard.ContentsWrapper>
        <TopStrategyCard.Content ranking={ranking} nickname={nickname} title={title} />
        <TopStrategyCard.SmScore score={score} />
      </TopStrategyCard.ContentsWrapper>
      <TopStrategyCard.ProfitChart
        chartData={chartData}
        percentageChange={percentageChange}
        size={size}
      />
    </TopStrategyCard>
  )
}

export default TopSmScoreCard
