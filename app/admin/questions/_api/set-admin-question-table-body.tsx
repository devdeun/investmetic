import { AdminQuestionsResponeseModel } from '../types'

const setAdminQuestionTableBody = (data: AdminQuestionsResponeseModel['result']['content']) =>
  data.map((data, idx) => {
    return [
      idx + 1,
      data.title,
      data.strategyName,
      data.nickname, // 질문 받은 사람으로 수정
      data.nickname,
      data.stateCondition,
      data.questionId,
    ]
  })

export default setAdminQuestionTableBody
