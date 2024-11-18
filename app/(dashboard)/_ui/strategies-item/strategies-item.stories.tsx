import StrategiesItem from '@/app/(dashboard)/_ui/strategies-item'
import type { Meta, StoryFn } from '@storybook/react'

import { StrategiesModel } from '@/shared/types/strategy-details-data'

const meta: Meta<typeof StrategiesItem> = {
  title: 'components/StrategiesItem',
  component: StrategiesItem,
  tags: ['autodocs'],
}

const strategy: StoryFn<{ strategiesData: StrategiesModel[] }> = ({ strategiesData }) => (
  <>
    {strategiesData.map((strategy) => (
      <StrategiesItem key={strategy.strategyId} strategiesData={strategy} />
    ))}
  </>
)

export const Primary = strategy.bind({})
Primary.args = {
  strategiesData: [
    {
      strategyId: '123',
      strategyName: '리치테크 FuturesDay',
      nickname: 'MACS',
      stockTypeIconUrl: [],
      profitRateChartData: [
        { date: '2024-01-01', profitRate: 5.2 },
        { date: '2024-02-01', profitRate: 6.4 },
        { date: '2024-03-01', profitRate: 12.8 },
        { date: '2024-04-01', profitRate: 8.2 },
        { date: '2024-05-01', profitRate: 9.4 },
        { date: '2024-06-01', profitRate: 15.8 },
      ],
      tradeTypeIconUrl: '',
      mdd: '-20,580,856',
      smScore: 60.6,
      cumulativeProfitLossRate: 120.1,
      recentYearProfitLossRate: 30.1,
      subscriptionCnt: 23,
      isSubscribed: true,
      averageRating: 4.8,
      totalReview: 12,
    },
    {
      strategyId: '12345',
      strategyName: 'ETF 레버리지/인버',
      nickname: '수밍',
      stockTypeIconUrl: [],
      profitRateChartData: [
        { date: '2023-12-01', profitRate: 7.2 },
        { date: '2024-01-01', profitRate: 5.2 },
        { date: '2024-02-01', profitRate: 25 },
        { date: '2024-03-01', profitRate: 12.8 },
        { date: '2024-04-01', profitRate: 17.2 },
        { date: '2024-05-01', profitRate: 11.4 },
        { date: '2024-06-01', profitRate: 20 },
        { date: '2024-07-01', profitRate: 16 },
        { date: '2024-08-01', profitRate: 18 },
      ],
      tradeTypeIconUrl: '',
      mdd: '-20,580,856',
      smScore: 60.6,
      cumulativeProfitLossRate: 120.1,
      recentYearProfitLossRate: 30.1,
      subscriptionCnt: 23,
      isSubscribed: false,
      averageRating: 4.8,
      totalReview: 12,
    },
  ],
}

export default meta
