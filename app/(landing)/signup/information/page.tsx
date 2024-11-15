import Step from '@/app/(landing)/signup/_ui/step'

import { PATH } from '@/shared/constants/path'
import { LinkButton } from '@/shared/ui/link-button'

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
