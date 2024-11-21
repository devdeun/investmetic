import classNames from 'classnames/bind'

import HomeSubtitle from '../home-subtitle'
import MetricCard from '../metric-card'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const UserMetricsSection = () => {
  const { totalTraderCount, totalStrategiesCount, totalUserCount, totalSubscribeCount } = {
    totalTraderCount: 512,
    totalStrategiesCount: 5210,
    totalUserCount: 43431,
    totalSubscribeCount: 8210,
  }

  return (
    <section>
      <HomeSubtitle>이미 이렇게 많은 사람들이 주식 전략을 공유하고, 구독하고 있어요!</HomeSubtitle>

      <div className={cx('card-wrapper')}>
        <MetricCard count={totalTraderCount} label="명의 트레이더가" />
        <MetricCard count={totalStrategiesCount} label="개의 투자 전략을 올렸어요!" />
        <MetricCard count={totalUserCount} label="명의 투자자가" />
        <MetricCard count={totalSubscribeCount} label="개의 전략을 구독 중이에요!" />
      </div>
    </section>
  )
}

export default UserMetricsSection
