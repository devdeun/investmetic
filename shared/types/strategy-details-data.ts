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
