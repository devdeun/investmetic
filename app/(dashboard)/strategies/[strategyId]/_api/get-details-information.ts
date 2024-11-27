import axios from 'axios'

import { InformationType } from '../page'

const getDetailsInformation = async (isReady: boolean, strategyId: string) => {
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
      strategyId: data.strategyId,
      strategyName: data.strategyName,
      stockTypeIconUrls: data.stockTypeIconUrls,
      tradeTypeIconUrl: data.tradeTypeIconUrl,
      stockTypeNames: data.stockTypeNames,
      tradeTypeName: data.tradeTypeName,
      operationCycle: data.operationCycle,
      strategyDescription: data.strategyDescription,
      cumulativeProfitRate: data.cumulativeProfitRate,
      maxDrawdownRate: data.maxDrawdownRate,
      averageProfitLossRate: data.averageProfitLossRate,
      profitFactor: data.profitFactor,
      winRate: data.winRate,
      subscriptionCount: data.subscriptionCount,
      traderImgUrl: data.traderImgUrl,
      subscribed: data.subscribed,
    }
    return { detailsSideData, detailsInformationData }
  } catch (err) {
    console.error(err)
  }
}

export default getDetailsInformation
