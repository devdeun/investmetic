import axiosInstance from '@/shared/api/axios'
import { UserType } from '@/shared/types/auth'
import {
  QuestionModel,
  QuestionSearchConditionType,
  QuestionSearchOptionsModel,
  QuestionStateTapType,
} from '@/shared/types/questions'

interface Props {
  userType: UserType
  page?: number
  size?: number
  keyword?: string
  searchCondition?: QuestionSearchConditionType
  stateCondition: QuestionStateTapType
}

const getMyQuestionList = async ({
  userType,
  page = 1,
  size = 3,
  keyword,
  searchCondition,
  stateCondition,
}: Props): Promise<QuestionModel[]> => {
  try {
    const data: QuestionSearchOptionsModel = {
      keyword: undefined,
      searchCondition: undefined,
      stateCondition: stateCondition,
    }
    if (keyword) data.keyword = keyword
    if (searchCondition) data.searchCondition = searchCondition

    const response = await axiosInstance.post(
      `/api/${userType.toLowerCase()}/questions?page=${page}&size=${size}`,
      data
    )

    return response.data.data
  } catch (err) {
    console.error(err)
    throw new Error('문의 목록 조회에 실패했습니다.')
  }
}

export default getMyQuestionList
