import Step from '@/app/(landing)/signup/_ui/step'

import { PATH } from '@/shared/constants/path'
import { LinkButton } from '@/shared/ui/link-button'

const UserTypePage = () => {
  return (
    <>
      <Step />
      <LinkButton href={PATH.SIGN_UP_TERMS_OF_USE}>다음</LinkButton>
    </>
  )
}

export default UserTypePage
