'use client'

import { useState } from 'react'

import classNames from 'classnames/bind'

import useModal from '@/shared/hooks/custom/use-modal'
import Avatar from '@/shared/ui/avatar'

import useDeleteReview from '../../_hooks/query/use-delete-review'
import StarRating from '../star-rating/index'
import AddReview from './add-review'
import ReviewGuideModal from './review-guide-modal'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  reviewId: number
  strategyId: number
  nickname: string
  content: string
  profileImage?: string
  createdAt: string
  starRating: number
  isReviewer: boolean
  isAdmin: boolean
}

const ReviewItem = ({
  reviewId,
  strategyId,
  nickname,
  profileImage,
  createdAt,
  starRating,
  content,
  isReviewer,
  isAdmin,
}: Props) => {
  const [isEdit, setIsEdit] = useState(false)
  const { isModalOpen, openModal, closeModal } = useModal()
  const { mutate } = useDeleteReview(strategyId)

  const handleDelete = () => {
    mutate(
      { strategyId, reviewId },
      {
        onSuccess: () => {
          closeModal()
        },
      }
    )
  }

  const editedCreatedAt = createdAt.slice(0, -3)

  return (
    <li className={cx('review-item')}>
      <div className={cx('information-wrapper')}>
        <div className={cx('reviewer')}>
          <Avatar src={profileImage} />
          <p className={cx('nickname')}>{nickname}</p>
          <span>|</span>
          <span>{editedCreatedAt}</span>
          {!isEdit && <StarRating starRating={starRating} />}
        </div>
        <div className={cx('button-wrapper')}>
          {isReviewer && !isEdit && (
            <>
              <button onClick={() => setIsEdit(true)}>수정</button>
              <button onClick={openModal}>삭제</button>
            </>
          )}
          {!isReviewer && isAdmin && <button>삭제</button>}
        </div>
      </div>
      {isEdit ? (
        <AddReview
          strategyId={strategyId}
          reviewId={reviewId}
          isEdit={isEdit}
          content={content}
          starRating={starRating}
          onCancel={() => setIsEdit(false)}
        />
      ) : (
        <div className={cx('content')}>{content}</div>
      )}
      {isModalOpen && (
        <ReviewGuideModal
          isModalOpen={isModalOpen}
          isErr={false}
          closeModal={closeModal}
          onChange={handleDelete}
        />
      )}
    </li>
  )
}

export default ReviewItem
