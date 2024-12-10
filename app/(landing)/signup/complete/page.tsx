'use client'

import { useEffect, useState } from 'react'

import classNames from 'classnames/bind'

import { PATH } from '@/shared/constants/path'
import { UserType } from '@/shared/types/auth'
import { LinkButton } from '@/shared/ui/link-button'
import Spinner from '@/shared/ui/spinner'

import { getNicknameCookie, getUserTypeCookie } from '../_lib/cookies'
import SignupCompleteMessage from '../_ui/signup-complete-message'
import Step from '../_ui/step'
import styles from './page.module.scss'

const cx = classNames.bind(styles)

const CompletePage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState<{
    userType: UserType | undefined
    nickname: string | undefined
  }>({ userType: undefined, nickname: undefined })

  useEffect(() => {
    const MAX_RETRIES = 5
    let count = 0

    const checkCookies = () => {
      const userType = getUserTypeCookie()
      const nickname = getNicknameCookie()

      if (count > MAX_RETRIES) {
        setIsLoading(false)
        return
      }

      if (userType && nickname) {
        setUserData({ userType, nickname })
        setIsLoading(false)
        return
      }

      setTimeout(checkCookies, 100)
      count++
    }

    checkCookies()
  }, [])

  if (isLoading) {
    return <Spinner className={cx('spinner')} />
  }

  return (
    <>
      <Step />
      <SignupCompleteMessage nickname={userData.nickname} userType={userData.userType} />
      <div className={cx('button-wrapper')}>
        <LinkButton href={PATH.SIGN_IN} variant="filled">
          로그인하기
        </LinkButton>
        <LinkButton href={PATH.HOME}>홈으로</LinkButton>
      </div>
    </>
  )
}

export default CompletePage
