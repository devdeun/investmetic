'use client'

import { styles } from '../styels'

const EmailCheckButton = () => {
  const checkEmail = async (email: string) => {
    const res = await fetch(`/api/users/check/email?email=${email}`)
    if (res.ok) {
      const result = await res.json()
      alert(result.message)
      return console.log(result)
    }

    console.log('not ok')
    return null
  }

  return (
    <button onClick={() => checkEmail('kbhoon@gmail.com')} style={styles}>
      email check (get)
    </button>
  )
}

export default EmailCheckButton
