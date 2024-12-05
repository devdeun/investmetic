import { Button } from '@/shared/ui/button'

import AdminQuestionStateBox from '../_ui/admin-question-state-box'
import { AdminQuestionsResponeseModel } from '../types'

const setAdminQuestionTableBody = (data: AdminQuestionsResponeseModel['result']['content']) =>
  data.map((data, idx) => {
    return [
      idx + 1,
      data.title,
      data.strategyName,
      data.questionId, // 질문 받은 사람으로 수정
      data.nickname,
      <AdminQuestionStateBox
        questionState={data.stateCondition}
        key={data.createdAt + data.nickname}
      />,
      <Button.ButtonGroup gap="24px" key={data.createdAt + data.nickname}>
        <Button
          size="small"
          style={{
            width: 'fit-content',
            height: '30px',
            padding: '7px 16px',
            borderRadius: '16px',
          }}
        >
          상세보기
        </Button>
        <Button
          variant="filled"
          size="small"
          style={{
            width: 'fit-content',
            height: '30px',
            padding: '7px 16px',
            borderRadius: '16px',
          }}
        >
          삭제
        </Button>
      </Button.ButtonGroup>,
    ]
  })

export default setAdminQuestionTableBody
