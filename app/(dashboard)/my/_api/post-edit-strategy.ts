import { AxiosError } from 'axios'

import axiosInstance from '@/shared/api/axios'

export interface ContentModel {
  strategyName: string
  description: string
  proposalFile?: {
    proposalFileName: string
    proposalFileSize: number
  }
  proposalModified: boolean
}

export interface EditStrategyResponseModel {
  isSuccess: boolean
  message: string
  result: {
    presignedUrl?: string
  }
  code: number
}

const postEditStrategy = async (
  strategyId: number,
  information: ContentModel
): Promise<EditStrategyResponseModel> => {
  try {
    const response = await axiosInstance.post(
      `/api/my-strategies/modify/${strategyId}`,
      information
    )
    return response.data
  } catch (err) {
    throw new Error('전략 정보 수정 실패', err as AxiosError)
  }
}

export default postEditStrategy
