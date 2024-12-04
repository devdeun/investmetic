import { useRef, useState } from 'react'

import classNames from 'classnames/bind'

import useModal from '@/shared/hooks/custom/use-modal'
import Avatar from '@/shared/ui/avatar'
import { Button } from '@/shared/ui/button'
import AddQuestionModal from '@/shared/ui/modal/add-question-modal'
import QuestionGuideModal from '@/shared/ui/modal/question-guide-modal'
import { formatNumber } from '@/shared/utils/format'

import { TitleType } from '.'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  title: Omit<TitleType, '트레이더' | '최소 투자 금액' | '투자 원금'>
  data: number | string
  profileImage?: string
  isMyStrategy?: boolean
  strategyName?: string
}

const SideItem = ({ title, data, profileImage, isMyStrategy = false, strategyName }: Props) => {
  const [isEmpty, setIsEmpty] = useState(false)
  const {
    isModalOpen: isAddQuestionModalOpen,
    openModal: questionOpenModal,
    closeModal: questionCloseModal,
  } = useModal()
  const {
    isModalOpen: isQuestionGuideModalOpen,
    openModal: guideOpenModal,
    closeModal: guideCloseModal,
  } = useModal()
  const titleRef = useRef<HTMLInputElement | null>(null)
  const contentRef = useRef<HTMLTextAreaElement | null>(null)

  const handleAddQuestion = () => {
    if (titleRef.current && contentRef.current) {
      const title = titleRef.current.value.trim()
      const content = contentRef.current.value.trim()
      if (title !== '' && content !== '') {
        // TODO: 문의 추가 api 연결
        questionCloseModal()
        guideOpenModal()
      } else {
        setIsEmpty(true)
      }
    }
  }

  return (
    <div className={cx('side-item')}>
      <div className={cx('title')}>{title}</div>
      <div className={cx('data')}>
        {title === '트레이더' ? (
          <>
            <div className={cx('avatar')}>
              <Avatar src={profileImage} />
              <p>{data}</p>
            </div>
            {!isMyStrategy && (
              <Button onClick={questionOpenModal} size="small" style={{ height: '30px' }}>
                문의하기
              </Button>
            )}
          </>
        ) : (
          <p>{formatNumber(data)}</p>
        )}
      </div>
      {strategyName && (
        <AddQuestionModal
          strategyName={strategyName}
          isModalOpen={isAddQuestionModalOpen}
          titleRef={titleRef}
          contentRef={contentRef}
          closeModal={questionCloseModal}
          onChange={handleAddQuestion}
          isEmpty={isEmpty}
        />
      )}
      <QuestionGuideModal isModalOpen={isQuestionGuideModalOpen} closeModal={guideCloseModal} />
    </div>
  )
}

export default SideItem
