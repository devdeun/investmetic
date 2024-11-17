import Link from 'next/link'

import AreaChart from '@/app/(dashboard)/strategies/_ui/strategies-item/area-chart'
import StrategiesSummary from '@/app/(dashboard)/strategies/_ui/strategies-item/strategies-summary'
import Subscribe from '@/app/(dashboard)/strategies/_ui/strategies-item/subscribe'
import classNames from 'classnames/bind'

import { StrategiesModel } from '@/shared/types/strategy-details-data'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  strategiesData: StrategiesModel
}
const StrategiesItem = ({ strategiesData: data }: Props) => {
  return (
    <Link className={cx('container')} href={`/strategies/${data.strategyId}`}>
      <StrategiesSummary
        icon={[...data.stockTypeIconUrl, data.tradeTypeIconUrl]}
        title={data.strategyName}
        profile={{
          traderImage: data.traderImage,
          nickname: data.nickname,
        }}
        subscriptionCount={data.subscriptionCnt}
        averageRating={data.averageRating}
        totalReview={data.totalReview}
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
        <p>{data.cumulativeProfitLossRate}%</p>
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
