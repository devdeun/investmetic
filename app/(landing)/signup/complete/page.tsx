import Link from 'next/link'

import Step from '@/app/(landing)/signup/_ui/step'

import { PATH } from '@/shared/constants/path'

const CompletePage = () => {
  return (
    <>
      <Step />
      <Link href={PATH.SIGN_UP_INFORMATION}>이전</Link>
    </>
  )
}

export default CompletePage
