import Link from 'next/link'

import Step from '@/app/(landing)/signup/_ui/step'

import { PATH } from '@/shared/constants/path'

const TermsOfUsePage = () => {
  return (
    <>
      <Step />
      <Link href={PATH.SIGN_UP_INFORMATION}>다음</Link>
      <Link href={PATH.SIGN_UP_USER_TYPE}>이전</Link>
    </>
  )
}

export default TermsOfUsePage
