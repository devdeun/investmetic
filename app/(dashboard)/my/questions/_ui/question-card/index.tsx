import classNames from 'classnames/bind'

import type { QuestionStatusType } from '@/shared/types/questions'
import Avatar from '@/shared/ui/avatar'
import Label from '@/shared/ui/label'
import { formatDateTime } from '@/shared/utils/format'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  strategyName: string
  title: string
  contents: string
  nickname: string
  profileImage?: string
  createdAt: string
  status: QuestionStatusType
}

const QuestionCard = ({
  strategyName,
  title,
  contents,
  nickname,
  profileImage,
  createdAt,
  status,
}: Props) => {
  return (
    <div className={cx('card-container')}>
      <div className={cx('top-wrapper')}>
        <strong className={cx('strategy-name')}>{strategyName}</strong>
        <span className={cx('created-at')}>{formatDateTime(createdAt)}</span>
      </div>
      <h2 className={cx('title')}>{title}</h2>
      <p className={cx('contents')}>{contents}</p>
      <div className={cx('bottom-wrapper')}>
        <div className={cx('avatar-wrapper')}>
          <Avatar src={profileImage} size="medium" />
          <span>{nickname}</span>
        </div>
        <Label color={status === '답변 완료' ? 'indigo' : 'orange'}>{status}</Label>
      </div>
    </div>
  )
}

export default QuestionCard
