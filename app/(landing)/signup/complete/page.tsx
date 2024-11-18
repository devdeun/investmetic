'use client'

import { useRouter } from 'next/navigation'

import useSignupStore from '@/app/(landing)/signup/_stores/use-signup-store'
import SignupCompleteMessage from '@/app/(landing)/signup/_ui/signup-complete-message'
import Step from '@/app/(landing)/signup/_ui/step'
import classNames from 'classnames/bind'

import { PATH } from '@/shared/constants/path'
import { LinkButton } from '@/shared/ui/link-button'

import styles from './page.module.scss'

const cx = classNames.bind(styles)

const CompletePage = () => {
  const router = useRouter()
  const nickname = useSignupStore((state) => state.nickname)
  const userType = useSignupStore((state) => state.userType)

  if (!nickname || !userType) {
    router.push(PATH.SIGN_UP_USER_TYPE)
    return
  }

  return (
    <>
      <Step />
      <SignupCompleteMessage nickname={nickname} userType={userType} />
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
