'use client'

import { styles } from '../styels'

const WithdrawButton = () => {
  const 탈퇴 = async (userId: string) => {
    const res = await fetch(`/api/users/${userId}`, {
      method: 'DELETE',
    })

    if (res.ok) {
      const result = await res.json()
      alert(result.message)
      return console.log(result)
    }

    console.log('not ok')
  }

  return (
    <button onClick={() => 탈퇴('James')} style={styles}>
      회원 탈퇴 (delete)
    </button>
  )
}

export default WithdrawButton
