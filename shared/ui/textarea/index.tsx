'use client'

import { ComponentProps } from 'react'

import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props extends ComponentProps<'textarea'> {
  rows?: number
}

export const Textarea = ({ rows = 5, className, ...props }: Props) => {
  return (
    <div>
      <textarea rows={rows} className={cx('textarea', className)} {...props} />
    </div>
  )
}
