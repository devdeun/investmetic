// 서버 컴포넌트

const { API_HOST } = process.env

const Title = async () => {
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

  const post = await fetchPost()
  return <h1>{post.title}</h1>
}

export default Title
