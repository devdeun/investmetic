// API Request Data
export interface DailyAnalysisModel {
  date: string
  principal: number
  transaction: number
  dailyProfitLoss: number
  dailyProfitLossRate: number
  cumulativeProfitLoss: number
  cumulativeProfitLossRate: number
}

export interface MonthlyAnalysisModel {
  month: string
  monthlyAveragePrincipal: number
  depositsWithdrawals: number
  monthlyProfitLoss: number
  monthlyProfitLossRate: number
  cumulativeProfitLoss: number
  cumulativeProfitLossRate: number
}

export interface ProfitRateChartDataModel {
  xAxis: string[]
  yAxis: number[]
}

export interface StrategiesModel {
  strategyId: string
  strategyName: string
  nickname: string
  traderImage?: string
  stockTypeIconUrl: string[]
  stockTypeNames: string[]
  profitRateChartData: ProfitRateChartDataModel
  tradeTypeIconUrl: string
  tradeTypeName: string
  mdd: string
  smScore: number
  cumulativeProfitLossRate: number
  recentYearProfitLossRate?: number
  subscriptionCnt: number
  isSubscribed: boolean
  averageRating: number
  totalReview: number
}
