'use client'

import { useEffect, useState } from 'react'

import { useMSWStore } from '@/shared/stores/msw'

import EmailCheckButton from '../ui/email-check-button'
import SignupButton from '../ui/signup-button'
import WithdrawButton from '../ui/withdraw-button'

const Sub = () => {
  const [user, setUser] = useState<{ title: string }>()
  const isReady = useMSWStore((state) => state.isReady)

  useEffect(() => {
    const fetchUsers = async () => {
      if (!isReady) return

      try {
        const res = await fetch('/api/posts')
        if (res.ok) {
          const data = await res.json()
          setUser(data)
        }
      } catch (err) {
        console.error('Fetch error:', err)
      }
    }

    fetchUsers()
  }, [isReady])

  if (!isReady) {
    return <div>로딩 중..</div>
  }

  return (
    <div>
      Title : {user?.title}
      <br />
      <EmailCheckButton />
      <SignupButton />
      <WithdrawButton />
    </div>
  )
}

export default Sub
