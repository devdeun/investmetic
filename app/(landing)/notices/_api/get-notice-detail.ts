import axiosInstance from '@/shared/api/axios'

interface NoticeResponseModel {
  isSuccess: true
  message: string
  data: {
    noticeId: string
    user: {
      id: number
      nickname: string
    }
    title: string
    content: string
    createdAt: string
  }
}

export const getNoticeDetail = async (noticeId: string): Promise<NoticeResponseModel['data']> => {
  try {
    const response = await axiosInstance.get<NoticeResponseModel>(`/api/notices/${noticeId}`)

    if (response.data.isSuccess) {
      return response.data.data
    } else {
      throw new Error(response.data.message || '요청 실패')
    }
  } catch (err) {
    console.error(err)
    throw new Error('해당 회원의 정보를 찾을 수 없습니다.')
  }
}
