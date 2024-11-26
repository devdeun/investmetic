'use client'

import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { SearchIcon } from '@/public/icons'
import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props extends ComponentPropsWithoutRef<'input'> {
  placeholder?: string
  handleSearchIconClick?: () => void
}

export const SearchInput = forwardRef<HTMLInputElement, Props>(
  ({ placeholder = '', handleSearchIconClick, value, onChange, ...props }: Props, ref) => {
    return (
      <div className={cx('search-input-container')}>
        <input
          ref={ref}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={cx('search-input')}
          {...props}
        />
        <SearchIcon className={cx('search-icon')} onClick={handleSearchIconClick} />
      </div>
    )
  }
)

SearchInput.displayName = 'SearchInput'
