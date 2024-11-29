import axios from 'axios'

import { OptionsType } from '../_ui/analysis-container'

const getAnalysisChart = async (
  strategyId: number,
  firstOption: OptionsType,
  secondOption: OptionsType
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
