import { AnalysisTabType } from '@/app/(dashboard)/_ui/analysis-container/tabs-width-table'
import axios from 'axios'

const getAnalysis = async (
  strategyId: number,
  type: AnalysisTabType,
  page: number,
  size: number
) => {
  if (type !== 'daily' && type !== 'monthly') return null
  try {
    const response = await axios.get(
      `/api/strategies/${strategyId}/${type}-analysis?page=${page}&size=${size}`
    )
    return response.data.result
  } catch (err) {
    console.error(err, `${type} 분석 조회 실패`)
  }
}

export default getAnalysis
