import { APIResponseBaseModel } from '@/shared/types/response'

export interface StrategiesResponseModel extends APIResponseBaseModel<boolean> {
  data: {
    subscriptionCount: number // 구독 수
    minimumInvestmentAmount: number // 최소 투자 금액
    initialInvestment: number // 투자 원금
    kpRatio: number
    smScore: number
    lastProfitDate: string // 최종 손익 입력 일자
    strategyRegisteredDate: string // 전략 등록일
    // [
    // {
    //   "stockGroupId": 1,
    //   "stockTypeId" : 12312,
    //   "stockIconUrl": "https://~~", // 종목 아이콘 이미지 경로
    // },
    // {
    //   "stockGroupId": 1,
    //   "stockTypeId" : 12312,
    //   "stockIconUrl": "https://~~", // 종목 아이콘 이미지 경로
    // }
    // ]
    tradeIconUrl: string // 매매 유형 이미지 경로
    strategyName: string // 전략명
    averageRating: number // 평균별점
    cumulativeProfitRate: number // 누적 수익률
    maxDrawdownRate: number // 최대 자본 인하율
    averageProfitRate: number // 평균 손익률
    profitFactor: number
    winRate: number // 승률 (%)
  }
}

// eslint-disable-next-line
export interface StrategiesPatchResponseModel extends APIResponseBaseModel<boolean> {}
