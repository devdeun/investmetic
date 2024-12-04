import classNames from 'classnames/bind'

import { LinkButton } from '@/shared/ui/link-button'

import UserInfo from './_ui/user-info'
import UserProfile from './_ui/user-profile'
import styles from './page.module.scss'

const cx = classNames.bind(styles)

const MyProfilePage = () => {
  return (
    <div className={cx('container')}>
      <p className={cx('title')}>나의 정보</p>
      <div className={cx('wrapper')}>
        <UserInfo />
        <div className={cx('user-profile')}>
          <UserProfile userType={'트레이더'} name={'고양이'} email={'meow@example.com'} />
          <div className={cx('link-button')}>
            <LinkButton href={''}>탈퇴하기</LinkButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfilePage
