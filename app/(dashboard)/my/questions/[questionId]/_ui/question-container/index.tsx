'use client'

import { useRef, useState } from 'react'

import { useParams } from 'next/navigation'

import classNames from 'classnames/bind'

import { useAuthStore } from '@/shared/stores/use-auth-store'
import { Button } from '@/shared/ui/button'
import { ErrorMessage } from '@/shared/ui/error-message'
import { Textarea } from '@/shared/ui/textarea'

import useGetQuestionDetails from '../../../_hooks/query/use-get-question-details'
import usePostAnswer from '../../../_hooks/query/use-post-answer'
import QuestionDetailCard from '../question-detail-card'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const QuestionContainer = () => {
  const [isActiveAnswer, setIsActiveAnswer] = useState(false)
  const [answerErrorMessage, setAnswerErrorMessage] = useState<string | null>(null)
  const { questionId } = useParams()

  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const { mutate: submitAnswer } = usePostAnswer(parseInt(questionId as string))
  const { data: questionDetails } = useGetQuestionDetails({
    questionId: parseInt(questionId as string),
  })

  const user = useAuthStore((state) => state.user)

  if (!user) {
    return null
  }

  const isTrader = user.role.includes('TRADER')
  const isInvestor = user.role.includes('INVESTOR')

  const handleQuestionAdd = () => {}

  const handleAnswerAdd = () => {
    setIsActiveAnswer((prevState) => !prevState)
  }

  const handleAnswerSubmit = () => {
    const content = textareaRef.current?.value

    if (!content) {
      setAnswerErrorMessage('답변을 입력해주세요.')
      return
    }

    setAnswerErrorMessage(null)

    submitAnswer(content, {
      onSuccess: () => {
        if (textareaRef.current) {
          textareaRef.current.value = ''
        }
        setIsActiveAnswer(false)
      },
      onError: () => {
        setAnswerErrorMessage('답변 등록에 실패했습니다.')
      },
    })
  }

  if (!questionDetails) {
    return
  }

  return (
    <>
      <div className={cx('container')}>
        <QuestionDetailCard
          isAuthor={isInvestor}
          strategyName={questionDetails.strategyName}
          title={questionDetails.title}
          contents={questionDetails.content}
          nickname={questionDetails.nickname}
          createdAt={questionDetails.createdAt}
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
              <Button size="small" onClick={handleAnswerSubmit}>
                등록하기
              </Button>
            </div>
            <Textarea placeholder="내용을 입력하세요." ref={textareaRef} />
            <ErrorMessage errorMessage={answerErrorMessage} />
          </div>
        ) : (
          ((isTrader && !questionDetails.answer) || isInvestor) && (
            <Button
              variant="filled"
              className={cx('button')}
              onClick={isTrader ? handleAnswerAdd : handleQuestionAdd}
            >
              {isTrader ? '답변하기' : '추가 질문하기'}
            </Button>
          )
        )}
      </div>
    </>
  )
}

export default QuestionContainer
