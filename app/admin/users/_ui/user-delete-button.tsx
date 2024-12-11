'use client'

import { Button } from '@/shared/ui/button'

interface Props {
  onClick: () => void
}

const UserDeleteButton = ({ onClick }: Props) => {
  return (
    <Button variant="filled" onClick={onClick} size="small" style={{ padding: '7px 16px' }}>
      강제탈퇴
    </Button>
  )
}

export default UserDeleteButton
