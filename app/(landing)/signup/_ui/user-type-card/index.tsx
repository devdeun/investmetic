'use client'

import { useRouter } from 'next/navigation'

import useSignupStore from '@/app/(landing)/signup/_stores/use-signup-store'
import classNames from 'classnames/bind'

import { PATH } from '@/shared/constants/path'
import { RoleSelectType } from '@/shared/types/user'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  userType: RoleSelectType
  title: string
  highlight: string
}

const UserTypeCard = ({ userType, title, highlight }: Props) => {
  const router = useRouter()
  const { setUserType } = useSignupStore((state) => state.actions)

  const handleTypeSelect = () => {
    setUserType(userType)
    router.push(PATH.SIGN_UP_TERMS_OF_USE)
  }

  return (
    <button className={cx('card')} onClick={handleTypeSelect}>
      <h2 className={cx('title')}>{title}</h2>
      <hr className={cx('line')} />
      <p className={cx('contents')}>
        인베스트메틱을 통해 <br />
        <span className={cx('highlight')}>{highlight}</span>해보세요!
      </p>
    </button>
  )
}

export default UserTypeCard
