import axiosInstance from '@/shared/api/axios'

export interface TraderModel {
  userId: number
  nickname: string
  userName: string
  imageUrl: string
  strategyCount: number
  totalSubCount: number
}

interface TradersResponseModel {
  isSuccess: boolean
  message: string
  result: {
    result: string
    content: TraderModel[]
    page: number
    size: number
    totalElements: number
    totalPages: number
    first: boolean
    last: boolean
  }
}

export interface TradersParamsModel {
  page: number
  size: number
  keyword: string
  orderBy: 'STRATEGY_TOTAL' | 'SUBSCRIBE_TOTAL'
}

export const getTraders = async (
  params: TradersParamsModel
): Promise<TradersResponseModel['result']> => {
  try {
    const response = await axiosInstance.get<TradersResponseModel>('/api/users/traders', {
      params,
    })

    if (response.data.isSuccess) {
      return response.data.result
    } else {
      throw new Error(response.data.message || '요청 실패')
    }
  } catch (err) {
    console.error(err)
    throw new Error('트레이더 목록 조회에 실패하였습니다.')
  }
}
