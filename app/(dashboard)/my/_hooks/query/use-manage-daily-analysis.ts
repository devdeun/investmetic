import { useMutation, useQueryClient } from '@tanstack/react-query'

import {
  EditAnalysisPayloadModel,
  deleteAllAnalysis,
  deleteAnalysis,
  editAnalysis,
} from '../../_api/manage-daily-analysis'

export const useMyAnalysisMutation = (strategyId: number, page: number, size: number) => {
  const queryClient = useQueryClient()
  const queryKey = ['myDailyAnalysis', strategyId, page, size]

  const { mutate: editAnalysisData } = useMutation({
    mutationFn: ({ payload }: { payload: EditAnalysisPayloadModel }) => {
      if (!strategyId) {
        throw new Error('Strategy ID is required')
      }
      return editAnalysis(strategyId, payload)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
    },
    onError: (error: Error) => {
      console.error('Edit error:', error)
      throw error
    },
  })

  const { mutate: deleteAnalysisData } = useMutation({
    mutationFn: (analysisId: number) => {
      if (!strategyId) {
        throw new Error('Strategy ID is required')
      }
      return deleteAnalysis(strategyId, analysisId)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
    },
    onError: (error: Error) => {
      console.error('Delete error:', error)
      throw error
    },
  })

  const { mutate: deleteAllAnalysisData } = useMutation({
    mutationFn: () => {
      if (!strategyId) {
        throw new Error('Strategy ID is required')
      }
      return deleteAllAnalysis(strategyId)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
    },
    onError: (error: Error) => {
      console.error('Delete all error:', error)
      throw error
    },
  })

  return {
    editAnalysisData,
    deleteAnalysisData,
    deleteAllAnalysisData,
  }
}
