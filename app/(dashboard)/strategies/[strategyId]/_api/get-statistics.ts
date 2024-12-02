import axios from 'axios'

const getStatistics = async (strategyId: number) => {
  try {
    const response = await axios.get(`/api/strategies/${strategyId}/statistics`)
    return response.data.result
  } catch (err) {
    console.error(err)
  }
}

export default getStatistics
