'use client'

import { styles } from '../styels'

const SignupButton = () => {
  const signup = async (userName: string, password: string) => {
    const res = await fetch(`/api/users/signup`, {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
    })

    if (res.ok) {
      const result = await res.json()
      alert(result.message)
      return console.log(result)
    }

    console.log('not ok')
    return null
  }

  return (
    <button onClick={() => signup('name', 'pw')} style={styles}>
      signup (post)
    </button>
  )
}

export default SignupButton
