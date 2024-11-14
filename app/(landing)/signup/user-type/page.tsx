import Link from 'next/link'

import Step from '@/app/(landing)/signup/_ui/step'

import { PATH } from '@/shared/constants/path'

const UserTypePage = () => {
  return (
    <>
      <Step />
      <Link href={PATH.SIGN_UP_TERMS_OF_USE}>다음</Link>
    </>
  )
}

export default UserTypePage
