import classNames from 'classnames/bind'

import { PATH } from '@/shared/constants/path'
import { LinkButton } from '@/shared/ui/link-button'

import HomeSubtitle from '../home-subtitle'
import TopFavoriteCard from '../top-strategy-card/top-favorite-card'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const TopFavoriteSection = () => {
  const favoriteStrategies = [
    {
      strategyId: 3,
      strategyName: '내 전략은 엄청나',
      traderImgUrl: '',
      nickname: '엄청난 트레이더',
      profitRateChartData: [10, 9, 7, 12, 15, 13, 18, 34, 27, 40],
      smScore: 75.0,
      cumulativeProfitRate: 60.63,
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
      smScore: 80.0,
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
      smScore: 70.0,
      cumulativeProfitRate: 57.0,
      subscriptionCount: 777,
      averageRating: 5.0,
      totalReviews: 20,
    },
  ]

  return (
    <section className={cx('section-container')}>
      <HomeSubtitle>
        인베스트메틱에서 제공하는 <br />
        인기 있는 전략을 확인해보세요!
      </HomeSubtitle>

      <ul className={cx('strategy-wrapper')}>
        {favoriteStrategies.map((strategy, idx) => (
          <li key={strategy.strategyId}>
            <TopFavoriteCard
              ranking={idx + 1}
              nickname={strategy.nickname}
              title={strategy.strategyName}
              chartData={strategy.profitRateChartData}
              percentageChange={strategy.cumulativeProfitRate}
              subscriptionCount={strategy.subscriptionCount}
              averageRating={strategy.averageRating}
              reviewCount={strategy.totalReviews}
            />
          </li>
        ))}
      </ul>

      <LinkButton href={PATH.STRATEGIES} variant="filled">
        전략랭킹 더보기
      </LinkButton>
    </section>
  )
}

export default TopFavoriteSection
