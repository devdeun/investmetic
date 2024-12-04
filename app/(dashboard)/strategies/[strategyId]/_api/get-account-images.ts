import axiosInstance from '@/shared/api/axios'

const getAccountImages = async (strategyId: number) => {
  try {
    const response = await axiosInstance.get(`/api/strategies/${strategyId}/account-images`)
    return response.data.result
  } catch (err) {
    console.error(err)
  }
}

export default getAccountImages
