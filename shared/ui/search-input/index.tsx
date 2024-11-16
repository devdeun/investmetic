'use client'

import { ComponentProps } from 'react'

import { SearchIcon } from '@/public/icons'
import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props extends ComponentProps<'input'> {
  placeholder?: string
}

export const SearchInput = ({ placeholder, ...props }: Props) => {
  return (
    <div className={cx('search-input-wrapper')}>
      <input className={cx('search-input')} placeholder={placeholder} {...props} />
      <SearchIcon className={cx('search-icon')} />
    </div>
  )
}
