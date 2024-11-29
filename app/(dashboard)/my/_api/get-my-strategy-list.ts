import axiosInstance from '@/shared/api/axios'
import { StrategiesModel } from '@/shared/types/strategy-data'

// 실제 api 나오면 수정 필요함
// totalElements 사용해서 hasmore값 계산해야될 것 같음

interface StrategiesResponseModel {
  result: {
    strategies: StrategiesModel[]
    hasMore: boolean
  }
}

export const getMyStrategyList = async ({ page = 1, size = 4 }: { page: number; size: number }) => {
  const response = await axiosInstance.get<StrategiesResponseModel>(
    `/api/my-strategies?page=${page}&size=${size}`
  )
  return response.data.result
}
