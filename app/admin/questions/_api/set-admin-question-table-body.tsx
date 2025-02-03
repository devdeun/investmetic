import { PATH } from '@/shared/constants/path'
import { LinkButton } from '@/shared/ui/link-button'

import AdminQuestionDeleteButton from '../_ui/admin-question-delete-button'
import AdminQuestionStateBox from '../_ui/admin-question-state-box'
import { AdminQuestionsResponseModel } from '../types'

const setAdminQuestionTableBody = (data: AdminQuestionsResponseModel['result']['content']) =>
  data.map((data, idx) => {
    return [
      idx + 1,
      data.title,
      data.strategy.name,
      data.trader.userName,
      data.investor.userName,
      <AdminQuestionStateBox questionState={data.stateCondition} key={data.questionId} />,
      <div style={{ display: 'flex', gap: '24px' }} key={data.questionId}>
        <LinkButton
          href={`${PATH.MY_QUESTIONS}/${data.questionId}`}
          size="small"
          style={{
            width: 'fit-content',
            height: '30px',
            padding: '7px 16px',
            borderRadius: '16px',
          }}
        >
          상세보기
        </LinkButton>
        <AdminQuestionDeleteButton questionId={data.questionId} strategyId={data.strategy.id} />
      </div>,
    ]
  })

export default setAdminQuestionTableBody
