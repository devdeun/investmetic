'use client'

import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

import useSignupStore from '@/app/(landing)/signup/_stores/use-signup-store'
import Step from '@/app/(landing)/signup/_ui/step'
import TermsContainer from '@/app/(landing)/signup/terms-of-use/_ui/terms-container'
import classNames from 'classnames/bind'

import { PATH } from '@/shared/constants/path'
import { Button } from '@/shared/ui/button'
import Checkbox from '@/shared/ui/check-box'
import { LinkButton } from '@/shared/ui/link-button'

import InvestorTerms from './_ui/terms/investor-terms'
import PrivacyTerms from './_ui/terms/privacy-terms'
import TraderTerms from './_ui/terms/trader-terms'
import styles from './page.module.scss'

const cx = classNames.bind(styles)

const TermsOfUsePage = () => {
  const router = useRouter()
  const userType = useSignupStore((state) => state.userType)
  const isAgreedTerm = useSignupStore((state) => state.isAgreedTerm)
  const { setIsAgreedTerm } = useSignupStore((state) => state.actions)

  const [isUserTermChecked, setIsUserTermChecked] = useState(isAgreedTerm)
  const [isPrivacyTermChecked, setIsPrivacyTermChecked] = useState(isAgreedTerm)
  const [isAllChecked, setIsAllChecked] = useState(isAgreedTerm)

  useEffect(() => {
    if (!userType) {
      router.push(PATH.SIGN_UP_USER_TYPE)
    }
  }, [userType, router])

  const handleAllCheck = () => {
    setIsAllChecked(!isAllChecked)
    setIsUserTermChecked(!isAllChecked)
    setIsPrivacyTermChecked(!isAllChecked)
  }

  const handleUserTermCheck = () => {
    setIsUserTermChecked(!isUserTermChecked)
    setIsAllChecked(!isUserTermChecked && isPrivacyTermChecked)
  }

  const handlePrivacyTermCheck = () => {
    setIsPrivacyTermChecked(!isPrivacyTermChecked)
    setIsAllChecked(!isPrivacyTermChecked && isUserTermChecked)
  }

  const handleNextClick = () => {
    setIsAgreedTerm(isAllChecked)
    router.push(PATH.SIGN_UP_INFORMATION)
  }

  return (
    <>
      <Step />
      <div className={cx('container')}>
        <div className={cx('all-check-wrapper')}>
          <Checkbox
            label=" 이용약관, 개인정보 취급방침에 모두 동의합니다."
            isChecked={isAllChecked}
            onChange={handleAllCheck}
            textColor="gray800"
            textSize="b2"
          />
        </div>

        <TermsContainer
          title="이용약관"
          isChecked={isPrivacyTermChecked}
          onChange={handlePrivacyTermCheck}
        >
          <PrivacyTerms />
        </TermsContainer>
        <TermsContainer
          title="개인정보 취급방침"
          isChecked={isUserTermChecked}
          onChange={handleUserTermCheck}
        >
          {userType === 'trader' ? <TraderTerms /> : <InvestorTerms />}
        </TermsContainer>

        <div className={cx('button-wrapper')}>
          <LinkButton href={PATH.SIGN_UP_USER_TYPE}>이전</LinkButton>
          <Button onClick={handleNextClick} variant="filled" disabled={!isAllChecked}>
            다음
          </Button>
        </div>
      </div>
    </>
  )
}

export default TermsOfUsePage
