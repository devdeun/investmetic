import axiosInstance from '@/shared/api/axios'

import { NoticeFormModel, PostNoticeResopnseModel } from '../types'

const postNotice = async (formData: NoticeFormModel) => {
  const data = {
    title: formData.title,
    content: formData.content,
    fileUrls: formData.files,
  }

  try {
    const res = await axiosInstance.post<PostNoticeResopnseModel>('/api/admin/notices', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!res.data.isSuccess) throw new Error('Error : ' + res.data.message)

    alert('공지 등록이 완료되었습니다.')
  } catch (err) {
    console.error(err)
    throw err
  }
}

export default postNotice
