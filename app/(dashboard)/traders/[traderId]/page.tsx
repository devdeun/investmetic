'use client'

import styles from '@/app/(dashboard)/traders/[traderId]/page.module.scss'
import classNames from 'classnames/bind'

import BackHeader from '@/shared/ui/header/back-header'
import Title from '@/shared/ui/title'
import TradersListCard from '@/shared/ui/traders-list-card'

import ListHeader from '../../_ui/list-header'
import StrategiesItem from '../../_ui/strategies-item'

const cx = classNames.bind(styles)

const TraderDetailPage = () => {
  // TODO: 임시데이터 제거
  const strategiesModel = {
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
  }

  const traderData = {
    nickname: '냥냥펀치',
    strategyCount: 10,
    subscriberCount: 20,
    traderId: '940504',
  }

  return (
    <>
      <div className={cx('page-container')}>
        <BackHeader label={'목록으로 돌아가기'} />
        <div className={cx('title')}>
          <Title label={'트레이더 상세보기'}></Title>
        </div>
        <div className={cx('card-wrapper')}>
          <TradersListCard
            key={traderData.traderId}
            nickname={traderData.nickname}
            strategyCount={traderData.strategyCount}
            subscriberCount={traderData.subscriberCount}
            traderId={traderData.traderId}
          />
        </div>
        <ListHeader></ListHeader>
        {Array(3)
          .fill(strategiesModel)
          .map((item, index) => (
            <StrategiesItem key={index} strategiesData={item} />
          ))}
      </div>
    </>
  )
}

export default TraderDetailPage
