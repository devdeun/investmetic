import classNames from 'classnames/bind'

import Avatar from '@/shared/ui/avatar'
import { LinkButton } from '@/shared/ui/link-button'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  name: string
  profileImage?: string
  strategy: number
  subscribe: number
  traderId: string
}

const TradersListCard = ({ name, profileImage, strategy, subscribe }: Props) => {
  return (
    <div className={cx('traders-list-card')}>
      <div className={cx('contents')}>
        <div className={cx('profile-name')}>{name}</div>
        <div className={cx('avatar')}>
          <Avatar src={profileImage} size="large" />
        </div>
        <div className={cx('information')}>
          <div>전략 {strategy}개</div>
          <div>구독 {subscribe}개</div>
        </div>
      </div>
      <div className="link-button-wrapper">
        <LinkButton
          href={'${PATH.TRADERS}/${traderId}'}
          size="medium"
          className={cx('link-button')}
          style={{ color: '#ff5f33' }}
        >
          전략 목록 상세보기
        </LinkButton>
      </div>
    </div>
  )
}

export default TradersListCard
