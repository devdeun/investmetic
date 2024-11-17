'use client'

import { useEffect, useState } from 'react'

import { BookmarkIcon, BookmarkOutlineIcon } from '@/public/icons'
import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  subscriptionStatus: boolean
}
const Subscribe = ({ subscriptionStatus }: Props) => {
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    if (subscriptionStatus) {
      setIsSubscribed(true)
    }
  }, [])

  const handleSubscribe = (event: React.MouseEvent) => {
    event.preventDefault()
    setIsSubscribed(!isSubscribed)
  }

  return (
    <div className={cx('subscribe-icon')}>
      {isSubscribed ? (
        <button onClick={handleSubscribe}>
          <BookmarkIcon />
        </button>
      ) : (
        <button onClick={handleSubscribe}>
          <BookmarkOutlineIcon />
        </button>
      )}
    </div>
  )
}

export default Subscribe
