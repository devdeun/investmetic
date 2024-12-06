import axiosInstance from '@/shared/api/axios'

// interface TraderReturnModel {
//   // 수민님이 만들어두신 모델 찾아와서 넣으면될듯.. reuslt content에..
// }

interface Props {
  traderId: number
}

const getTraderDetails = async ({ traderId }: Props) => {
  try {
    const response = await axiosInstance.get(`/api/strategies/search/trader/${traderId}`)
    return response.data.result
  } catch (err) {
    console.error(err)
    throw new Error('트레이더 상세 조회에 실패했습니다.')
  }
}

export default getTraderDetails
