// 서버 컴포넌트 test
import '@/mocks/server'

import EmailCheckButton from '../ui/email-check-button'
import SignupButton from '../ui/signup-button'
import Title from '../ui/title'
import WithdrawButton from '../ui/withdraw-button'

const Home = async () => {
  const fetchPost = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/posts`)
      if (!res.ok) {
        throw new Error('Failed to fetch post')
      }
      return res.json()
    } catch (e) {
      console.log('error', e)
      return { title: '잘못된 제목이라니까' }
    }
  }

  const user = await fetchPost()
  return (
    <div>
      Title : {user.title}
      <Title />
      <br />
      <EmailCheckButton />
      <SignupButton />
      <WithdrawButton />
    </div>
  )
}

export default Home
