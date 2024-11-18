'use client'

// NOTE: 이름 공모전 개최
import { useRouter } from 'next/navigation'

import { ChevronLeftIcon } from '@/public/icons'
import classNames from 'classnames/bind'

import Header from '..'
import styles from './back-header.module.scss'

const cx = classNames.bind(styles)

const headerStyles = {
  background: 'rgba(251, 251, 251, 0.5)',
  backdropFilter: 'blur(60px)',
}

const BackHeader = () => {
  return <Header Left={<Left />} styles={headerStyles} />
}

const Left = () => {
  const router = useRouter()
  const onButtonClick = () => {
    router.back()
  }

  return (
    <button onClick={onButtonClick} className={cx('container')}>
      <ChevronLeftIcon />
      <span>목록으로 돌아가기</span>
    </button>
  )
}

export default BackHeader
