import axios from 'axios'

import axiosInstance from '@/shared/api/axios'

const postReview = async (
  strategyId: number,
  content: { content: string; starRating: number }
): Promise<boolean | undefined | { isSuccess: boolean; message: string; code: number }> => {
  try {
    const response = await axiosInstance.post(`/api/strategies/${strategyId}/reviews`, content)
    return response.data.isSuccess
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      throw err.response.data
    }
    console.error(err)
  }
}

export default postReview
