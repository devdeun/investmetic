import Link from 'next/link'

import Step from '@/app/(landing)/signup/_ui/step'

import { PATH } from '@/shared/constants/path'

const InformationPage = () => {
  return (
    <>
      <Step />
      <Link href={PATH.SIGN_UP_COMPLETE}>다음</Link>
      <Link href={PATH.SIGN_UP_TERMS_OF_USE}>이전</Link>
    </>
  )
}

export default InformationPage
