import axios from 'axios'

import { InformationType } from '../page'

const getDetailsInformation = async (isReady: boolean, strategyId: number) => {
  if (!isReady || !strategyId) return

  try {
    const response = await axios.get(`/api/strategies/${strategyId}`)
    if (!response.data) {
      console.error('전략 상세 데이터 가져오기 실패')
      return
    }
    const data = await response.data
    const detailsSideData: InformationType[] = [
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
    const detailsInformationData = {
      ...data,
    }
    return { detailsSideData, detailsInformationData }
  } catch (err) {
    console.error(err)
  }
}

export default getDetailsInformation
