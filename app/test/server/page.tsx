// 서버 컴포넌트 test
import EmailCheckButton from '../ui/email-check-button'
import SignupButton from '../ui/signup-button'
import WithdrawButton from '../ui/withdraw-button'

const { API_HOST } = process.env

const Home = async () => {
  const fetchPost = async () => {
    try {
      const res = await fetch(`${API_HOST}/api/posts`)
      if (res.ok) {
        return res.json()
      }
      return []
    } catch (e) {
      console.log('error', e)
    }
  }

  const user = await fetchPost()

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

export default Home
