import Step from '@/app/(landing)/signup/_ui/step'

import { PATH } from '@/shared/constants/path'
import { LinkButton } from '@/shared/ui/link-button'

const CompletePage = () => {
  return (
    <>
      <Step />
      <LinkButton href={PATH.SIGN_UP_INFORMATION}>이전</LinkButton>
    </>
  )
}

export default CompletePage
