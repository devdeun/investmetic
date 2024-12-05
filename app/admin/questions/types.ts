import { QuestionStateConditionType } from '@/shared/types/questions'
import { APIResponseBaseModel } from '@/shared/types/response'

export interface AdminQuestionsResponeseModel extends APIResponseBaseModel<boolean> {
  result: {
    content: Array<{
      questionId: number
      title: string
      questionContent: string
      strategyName: string
      profileImageUrl: string
      nickname: string
      stateCondition: QuestionStateConditionType
      createdAt: string
    }>
    page: number
    size: number
    totalElements: number
    totalPages: number
    first: boolean
    last: boolean
  }
}
