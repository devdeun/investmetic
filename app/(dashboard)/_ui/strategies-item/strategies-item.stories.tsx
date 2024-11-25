import type { Meta, StoryFn } from '@storybook/react'

import { StrategiesModel } from '@/shared/types/strategy-details-data'

import StrategiesItem from './index'

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
      stockTypeNames: [],
      profitRateChartData: {
        xAxis: [
          '2023-01-01',
          '2023-01-02',
          '2023-01-03',
          '2023-01-04',
          '2023-01-05',
          '2023-01-06',
          '2023-01-07',
          '2023-01-08',
          '2023-01-09',
        ],
        yAxis: [7.2, 5.2, 25, 12.8, 17.2, 11.4, 20, 16, 18],
      },
      tradeTypeIconUrl: '',
      tradeTypeName: '',
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
      stockTypeNames: [],
      profitRateChartData: {
        xAxis: [
          '2023-01-01',
          '2023-01-02',
          '2023-01-03',
          '2023-01-04',
          '2023-01-05',
          '2023-01-06',
          '2023-01-07',
          '2023-01-08',
          '2023-01-09',
        ],
        yAxis: [7.2, 5.2, 25, 12.8, 17.2, 11.4, 20, 16, 18],
      },
      tradeTypeIconUrl: '',
      tradeTypeName: '',
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
