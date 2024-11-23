import classNames from 'classnames/bind'

import HomeSubtitle from '../home-subtitle'
import TopSmScoreCard from '../top-strategy-card/top-sm-score-card'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const TopSmScoreSection = () => {
  const topSmScoreStrategies = [
    {
      strategyId: 3,
      strategyName: '내 전략은 엄청나',
      traderImgUrl: '',
      nickname: '엄청난 트레이더',
      profitRateChartData: [10, 9, 7, 12, 15, 13, 18, 34, 27, 40],
      smScore: 95.01,
      cumulativeProfitRate: 60.6,
      subscriptionCount: 1234,
      averageRating: 5.0,
      totalReviews: 32,
    },
    {
      strategyId: 1,
      strategyName: '내 전략은 꽤나 대단해',
      traderImgUrl: '',
      nickname: '대단한 트레이더',
      profitRateChartData: [15.0, 32.0, 98.0, 29.0, 1.0, 59.0],
      smScore: 80.02,
      cumulativeProfitRate: 50.0,
      subscriptionCount: 759,
      averageRating: 4.9,
      totalReviews: 62,
    },
    {
      strategyId: 2,
      strategyName: '나 유명한데 한번 믿어봐',
      traderImgUrl: '',
      nickname: '엄청난 트레이더',
      profitRateChartData: [10, 9, 7, 12, 15, 13, 18, 34, 27, 40],
      smScore: 70.01,
      cumulativeProfitRate: 57.0,
      subscriptionCount: 777,
      averageRating: 5.0,
      totalReviews: 20,
    },
    {
      strategyId: 4,
      strategyName: '나 유명한데 한번 믿어봐',
      traderImgUrl: '',
      nickname: '엄청난 트레이더',
      profitRateChartData: [10, 9, 7, 12, 15, 13, 18, 34, 27, 40],
      smScore: 70.0,
      cumulativeProfitRate: 57.0,
      subscriptionCount: 777,
      averageRating: 5.0,
      totalReviews: 20,
    },
    {
      strategyId: 5,
      strategyName: '나 유명한데 한번 믿어봐',
      traderImgUrl: '',
      nickname: '엄청난 트레이더',
      profitRateChartData: [10, 9, 7, 12, 15, 13, 18, 34, 27, 40],
      smScore: 70.0,
      cumulativeProfitRate: 57.0,
      subscriptionCount: 777,
      averageRating: 5.0,
      totalReviews: 20,
    },
  ]

  return (
    <section className={cx('section-container')}>
      <HomeSubtitle>높은 SM 스코어별로 전략을 확인해보세요!</HomeSubtitle>

      <ul className={cx('strategy-wrapper')}>
        {topSmScoreStrategies.map((strategy, idx) => (
          <li key={strategy.strategyId}>
            <TopSmScoreCard
              size={idx > 0 ? 'small' : 'large'}
              ranking={idx + 1}
              nickname={strategy.nickname}
              title={strategy.strategyName}
              chartData={strategy.profitRateChartData}
              percentageChange={strategy.cumulativeProfitRate}
              score={strategy.smScore}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TopSmScoreSection
