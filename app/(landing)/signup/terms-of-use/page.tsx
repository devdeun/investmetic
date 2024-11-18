import Step from '@/app/(landing)/signup/_ui/step'

import { PATH } from '@/shared/constants/path'
import { LinkButton } from '@/shared/ui/link-button'

const TermsOfUsePage = () => {
  return (
    <>
      <Step />
      <LinkButton href={PATH.SIGN_UP_INFORMATION}>다음</LinkButton>
      <LinkButton href={PATH.SIGN_UP_USER_TYPE}>이전</LinkButton>
    </>
  )
}

export default TermsOfUsePage
