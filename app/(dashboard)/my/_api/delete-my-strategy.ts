import axiosInstance from '@/shared/api/axios'

export interface DeleteStrategyResponseModel {
  isSuccess: boolean
  message: string
  result: Record<string, never>
  code: number
}

export const deleteMyStrategy = async (
  strategyId: number
): Promise<DeleteStrategyResponseModel> => {
  const { data } = await axiosInstance.delete<DeleteStrategyResponseModel>(
    `/api/my-strategies/${strategyId}`
  )
  return data
}
