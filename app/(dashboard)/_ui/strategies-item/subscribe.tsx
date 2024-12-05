'use client'

import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

import { BookmarkIcon, BookmarkOutlineIcon } from '@/public/icons'
import classNames from 'classnames/bind'

import { PATH } from '@/shared/constants/path'
import useModal from '@/shared/hooks/custom/use-modal'
import { useAuthStore } from '@/shared/stores/use-auth-store'
import SigninCheckModal from '@/shared/ui/modal/signin-check-modal'
import SubscribeWarningModal from '@/shared/ui/modal/subscribe-warning-modal'

import useGetSubscribe from '../../strategies/_hooks/query/use-get-subscribe'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  strategyId: number
  subscriptionStatus: boolean
  traderName: string
}

const Subscribe = ({ strategyId, subscriptionStatus, traderName }: Props) => {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const router = useRouter()
  const user = useAuthStore((state) => state.user)
  const {
    isModalOpen: isSigninCheckModalOpen,
    openModal: openSigninCheckModal,
    closeModal: closeSigninCheckModal,
  } = useModal()
  const {
    isModalOpen: isSubscribeWarningModal,
    openModal: openSubscribeWarningModal,
    closeModal: closeSubscribeWarningModal,
  } = useModal()
  const { mutate } = useGetSubscribe()

  useEffect(() => {
    if (subscriptionStatus) {
      setIsSubscribed(true)
    }
  }, [subscriptionStatus])

  const handleSubscribe = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!user) {
      openSigninCheckModal()
    } else if (user?.nickname === traderName) {
      openSubscribeWarningModal()
    } else {
      mutate(strategyId, {
        onSuccess: () => setIsSubscribed(!isSubscribed),
      })
    }
  }

  const handleRoute = () => router.push(PATH.SIGN_IN)

  return (
    <>
      <div className={cx('subscribe-icon')}>
        <button onClick={handleSubscribe}>
          {isSubscribed ? <BookmarkIcon /> : <BookmarkOutlineIcon />}
        </button>
      </div>

      <SigninCheckModal
        isModalOpen={isSigninCheckModalOpen}
        onCloseModal={closeSigninCheckModal}
        onChange={handleRoute}
      />
      <SubscribeWarningModal
        isModalOpen={isSubscribeWarningModal}
        onCloseModal={closeSubscribeWarningModal}
      />
    </>
  )
}

export default Subscribe
