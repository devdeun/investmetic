'use client'

// 클라이언트 컴포넌트 test
import { useEffect, useState } from 'react'

import EmailCheckButton from '../ui/email-check-button'
import SignupButton from '../ui/signup-button'
import Title from '../ui/title'
import WithdrawButton from '../ui/withdraw-button'

const Sub = () => {
  const [user, setUser] = useState<{ title: string }>()

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('/api/posts')
      if (res.ok) {
        return res.json()
      }
      return null
    }

    fetchUsers().then((user) => setUser(user))
  }, [])

  return (
    <div>
      Title : {user?.title}
      {/* 서버 컴포넌트 in 클라이언트 주석 풀면 콘솔 난리남 */}
      {/* <Title /> */}
      <br />
      <EmailCheckButton />
      <SignupButton />
      <WithdrawButton />
    </div>
  )
}

export default Sub
