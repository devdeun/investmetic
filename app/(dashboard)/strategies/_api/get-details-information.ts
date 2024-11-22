import { InformationType } from '@/app/(dashboard)/strategies/[strategyId]/page'
import axios from 'axios'

const getDetailsInformation = async (isReady: boolean, strategyId: string) => {
  if (!isReady || !strategyId) return

  try {
    const response = await axios.get(`/api/strategies/${strategyId}`)

    const data = await response.data
    const newDetailsData: InformationType[] = [
      { title: '트레이더', data: data.nickname },
      { title: '최소 투자 금액', data: data.minimumInvestmentAmount },
      { title: '투자 원금', data: data.initialInvestment },

      [
        { title: 'KP Ratio', data: data.kpRatio },
        { title: 'SM SCORE', data: data.smScore },
      ],

      [
        { title: '최종손익입력일자', data: data.finalProfitLossDate },
        { title: '등록일', data: data.createdAt },
      ],
    ]
    return newDetailsData
  } catch (err) {
    console.error(err)
  }
}

export default getDetailsInformation
