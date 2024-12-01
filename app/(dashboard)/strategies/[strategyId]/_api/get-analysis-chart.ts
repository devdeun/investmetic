import { AnalysisChartOptionsType } from '@/app/(dashboard)/_ui/analysis-container'
import axios from 'axios'

const getAnalysisChart = async (
  strategyId: number,
  firstOption: AnalysisChartOptionsType,
  secondOption: AnalysisChartOptionsType
) => {
  try {
    const response = await axios.get(
      `/api/strategies/${strategyId}/analysis?option1=${firstOption}&option2=${secondOption}`
    )
    return response.data.result
  } catch (err) {
    console.error(err)
  }
}

export default getAnalysisChart
