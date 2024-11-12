// 서버 컴포넌트
const Title = async () => {
  const fetchPost = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/posts')
      if (!res.ok) throw new Error('Fetch 요청 실패~')
      return res.json()
    } catch (e) {
      console.error(e)
      return { title: '잘못된 제목입니다' }
    }
  }

  const post = await fetchPost()
  return <h1>{post.title}</h1>
}

export default Title
