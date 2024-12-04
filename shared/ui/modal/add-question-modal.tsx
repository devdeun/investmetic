'use client'

import React from 'react'

import { RegisterIcon } from '@/public/icons'
import classNames from 'classnames/bind'

import Modal from '.'
import { Button } from '../button'
import { ErrorMessage } from '../error-message'
import { Input } from '../input'
import { Textarea } from '../textarea'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  isModalOpen: boolean
  isEmpty: boolean
  strategyName: string
  title?: string
  content?: string
  titleRef?: React.RefObject<HTMLInputElement>
  contentRef?: React.RefObject<HTMLTextAreaElement>
  closeModal: () => void
  onChange?: () => void
}

const AddQuestionModal = ({
  isModalOpen,
  isEmpty = false,
  strategyName,
  title,
  content,
  titleRef,
  contentRef,
  closeModal,
  onChange,
}: Props) => {
  return (
    <Modal
      isOpen={isModalOpen}
      message={title ? '추가 문의하기' : '문의하기'}
      icon={RegisterIcon}
      className="question"
    >
      <span className={cx('message', 'strategy-name')}>{strategyName}</span>
      <div className={cx('question-title')}>
        <p>제목</p>
        <div>
          <Input
            ref={titleRef}
            value={title && title}
            inputSize="full"
            placeholder="제목을 입력하세요"
          />
        </div>
      </div>
      <div className={cx('question-content')}>
        <p>내용</p>
        <Textarea ref={contentRef} value={content && content} placeholder="내용을 입력하세요." />
      </div>
      {isEmpty && <ErrorMessage errorMessage="제목 또는 내용을 모두 입력해주세요." />}
      <div className={cx('two-button', 'question')}>
        <Button onClick={closeModal}>취소</Button>
        <Button onClick={onChange} variant="filled" className={cx('button')}>
          문의
        </Button>
      </div>
    </Modal>
  )
}

export default AddQuestionModal
