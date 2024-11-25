import axios from 'axios'

import { StrategiesModel } from '@/shared/types/strategy-details-data'

const getStrategiesData = async (
  isReady: boolean,
  page: number,
  size: number
): Promise<{ strategiesData: StrategiesModel[]; totalCount: number } | undefined> => {
  if (!isReady) return { strategiesData: [], totalCount: 0 }

  try {
    const response = await axios.get(`/api/strategies?page=${page}&size=${size}`)
    if (!response.data) {
      console.error('전략 목록 데이터 가져오기 실패')
      return { strategiesData: [], totalCount: 0 }
    }
    const {
      strategiesData,
      totalCount,
    }: { strategiesData: StrategiesModel[]; totalCount: number } = await response.data

    return { strategiesData, totalCount }
  } catch (err) {
    console.error(err)
  }
}

export default getStrategiesData
