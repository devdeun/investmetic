import Link from 'next/link'

import classNames from 'classnames/bind'

import { StrategiesModel } from '@/shared/types/strategy-details-data'

import AreaChart from './area-chart'
import StrategiesSummary from './strategies-summary'
import styles from './styles.module.scss'
import Subscribe from './subscribe'

const cx = classNames.bind(styles)

interface Props {
  strategiesData: StrategiesModel
}

const StrategiesItem = ({ strategiesData: data }: Props) => {
  return (
    <Link className={cx('container')} href={`/strategies/${data.strategyId}`}>
      <StrategiesSummary
        iconUrls={[data.tradeTypeIconUrl, ...data.stockTypeInfo.stockTypeIconUrls]}
        iconNames={[data.tradeTypeName, ...data.stockTypeInfo.stockTypeNames]}
        title={data.strategyName}
        profile={{
          traderImage: data.traderImgUrl,
          nickname: data.nickname,
        }}
        subscriptionCount={data.subscriptionCount}
        averageRating={data.averageRating}
        totalReview={data.totalReviews}
      />
      <AreaChart profitRateChartData={data.profitRateChartData} />
      <div className={cx('mdd')}>
        <p>{data.mdd}</p>
      </div>
      <div className={cx('sm-score')}>
        <p>{data.smScore}</p>
      </div>
      <div className={cx('profit')}>
        <span>누적 수익률</span>
        <p>{data.cumulativeProfitRate}%</p>
        <span>최근 1년 수익률</span>
        <p>{data.recentYearProfitLossRate ? data.recentYearProfitLossRate + '%' : '-'}</p>
      </div>
      <div className={cx('subscribe')}>
        <Subscribe subscriptionStatus={data.isSubscribed} />
      </div>
    </Link>
  )
}

export default StrategiesItem
