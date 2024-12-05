'use client'

import { Button } from '@/shared/ui/button'

interface Props {
  userId: number
}

const AdminQuestionStateBox = () => {
  return (
    <Button
      variant="filled"
      // onClick={() => mutate()}
      // disabled={isPending}
      size="small"
      style={{ padding: '7px 16px' }}
    >
      강제삭제
    </Button>
  )
}

export default AdminQuestionStateBox
