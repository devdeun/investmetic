'use client'

import { StarIcon } from '@/public/icons'
import classNames from 'classnames/bind'

import { SizeType } from '@/shared/ui/total-star'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  size?: SizeType
}

const Star = ({ size }: Props) => {
  return (
    <div className={cx('icon-wrapper', size)}>
      <StarIcon />
    </div>
  )
}

export default Star
