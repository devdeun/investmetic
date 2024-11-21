'use client'

import { PATH } from '@/shared/constants/path'
import { LinkButton } from '@/shared/ui/link-button'

import Step from '../_ui/step'

const InformationPage = () => {
  return (
    <>
      <Step />
      <LinkButton href={PATH.SIGN_UP_COMPLETE}>다음</LinkButton>
      <LinkButton href={PATH.SIGN_UP_TERMS_OF_USE}>이전</LinkButton>
    </>
  )
}

export default InformationPage
