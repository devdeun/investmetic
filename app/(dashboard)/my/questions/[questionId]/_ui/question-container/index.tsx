'use client'

import { useState } from 'react'

import { useParams } from 'next/navigation'

import classNames from 'classnames/bind'

import { useAuthStore } from '@/shared/stores/use-auth-store'
import { Button } from '@/shared/ui/button'
import { Textarea } from '@/shared/ui/textarea'

import useGetQuestionDetails from '../../../_hooks/query/use-get-question-details'
import QuestionDetailCard from '../question-detail-card'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const QuestionContainer = () => {
  const [isActiveAnswer, setIsActiveAnswer] = useState(false)
  const { questionId } = useParams()

  const user = useAuthStore((state) => state.user)
  const isTrader = user?.role.includes('TRADER') || false

  const { data: questionDetails } = useGetQuestionDetails({
    questionId: parseInt(questionId as string),
  })

  const handleQuestionAdd = () => {}

  const handleAnswerAdd = () => {
    setIsActiveAnswer((prevState) => !prevState)
  }

  if (!questionDetails) {
    return
  }

  return (
    <>
      <div className={cx('container')}>
        <QuestionDetailCard
          isAuthor={!isTrader}
          strategyName={questionDetails.strategyName}
          title={questionDetails.title}
          contents={questionDetails.questionContent}
          nickname={questionDetails.nickname}
          createdAt={questionDetails.questionCreatedAt}
          status={questionDetails.state === 'WAITING' ? '답변 대기' : '답변 완료'}
        />
        {questionDetails.answer ? (
          <QuestionDetailCard
            type="answer"
            isAuthor={isTrader}
            contents={questionDetails.answer.content}
            nickname={questionDetails.answer.nickname}
            createdAt={questionDetails.answer.createdAt}
          />
        ) : (
          <>{!isActiveAnswer && <p className={cx('empty-message')}>아직 답변이 없습니다</p>}</>
        )}
        {isActiveAnswer ? (
          <div className={cx('answer-input-wrapper')}>
            <div className={cx('title-wrapper')}>
              <h2 className={cx('title')}>답변</h2>
              <Button size="small">등록하기</Button>
            </div>
            <Textarea placeholder="내용을 입력하세요." />
          </div>
        ) : (
          <Button
            variant="filled"
            className={cx('button')}
            onClick={isTrader ? handleAnswerAdd : handleQuestionAdd}
          >
            {isTrader ? '답변하기' : '추가 질문하기'}
          </Button>
        )}
      </div>
    </>
  )
}

export default QuestionContainer
