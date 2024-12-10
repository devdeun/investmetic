'use client'

import classNames from 'classnames/bind'

import { Button } from '@/shared/ui/button'

import useDeleteNotice from '../../_hook/query/use-delete-notice'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  noticeId: number
}

const NoticeDeleteButton = ({ noticeId }: Props) => {
  const { mutate, isPending } = useDeleteNotice(noticeId)

  const onClick = () => {
    mutate()
  }

  return (
    <Button
      size="small"
      onClick={onClick}
      disabled={isPending}
      variant="filled"
      className={cx('button')}
    >
      삭제
    </Button>
  )
}

export default NoticeDeleteButton
