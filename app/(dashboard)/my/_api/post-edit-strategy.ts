import { AxiosError } from 'axios'

import axiosInstance from '@/shared/api/axios'

export interface ContentModel {
  strategyName: string
  description: string
  proposalModified: boolean
}

const postEditStrategy = async (
  strategyId: number,
  information: ContentModel
): Promise<boolean | null> => {
  try {
    const response = await axiosInstance.post(
      `/api/my-strategies/modify/${strategyId}`,
      information
    )
    return response.data.isSuccess
  } catch (err) {
    throw new Error('전략 정보 수정 실패', err as AxiosError)
  }
}

export default postEditStrategy
