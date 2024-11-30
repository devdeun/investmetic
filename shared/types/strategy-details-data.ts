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
  dates: string[]
  profitRates: number[]
}

export interface StrategiesModel {
  strategyId: number
  strategyName: string
  traderImgUrl?: string
  nickname: string
  stockTypeInfo: {
    stockTypeIconUrls: string[]
    stockTypeNames: string[]
  }
  tradeTypeIconUrl: string
  tradeTypeName: string
  profitRateChartData: ProfitRateChartDataModel
  mdd: number
  smScore: number
  cumulativeProfitRate: number
  recentYearProfitLossRate?: number
  subscriptionCount: number
  averageRating: number
  totalReviews: number
  isSubscribed: boolean
  isPublic?: string
}

export interface StrategyDetailsInformationModel {
  strategyId: string
  strategyName: string
  stockTypeIconUrls: string[]
  tradeTypeIconUrl: string
  stockTypeNames: string[]
  tradeTypeName: string
  operationCycle: string
  strategyDescription: string
  cumulativeProfitRate: number
  maxDrawdownRate: number
  averageProfitLossRate: number
  profitFactor: number
  winRate: number
  subscriptionCount: number
  traderImgUrl: string
  subscribed: boolean
}
