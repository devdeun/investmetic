'use client'

import { useRef, useState } from 'react'

import classNames from 'classnames/bind'

import { Button } from '@/shared/ui/button'
import { Textarea } from '@/shared/ui/textarea'

import StarRating from '../star-rating/index'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const AddReview = () => {
  const [starRatingValue, setStarRatingValue] = useState(0)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleStarRating = (idx: number) => setStarRatingValue(idx + 1)

  const handleAddReview = () => {}

  return (
    <div className={cx('add-review-wrapper')}>
      <div className={cx('textarea-wrapper')}>
        <Textarea rows={5} placeholder="리뷰를 작성해주세요." ref={textareaRef} />
      </div>
      <div className={cx('add-button-wrapper')}>
        <p>전략이 어땠나요?</p>
        <StarRating starRatingValue={starRatingValue} onRatingChange={handleStarRating} />
        <Button
          variant="filled"
          size="small"
          className={cx('review-button')}
          onClick={handleAddReview}
        >
          리뷰 등록하기
        </Button>
      </div>
    </div>
  )
}

export default AddReview
