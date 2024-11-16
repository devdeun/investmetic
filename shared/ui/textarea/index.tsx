'use client'

import { ComponentProps, useEffect, useState } from 'react'

import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props extends ComponentProps<'textarea'> {
  rows?: number
}

export const Textarea = ({ rows = 5, className, ...props }: Props) => {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    if (value.length === 0) {
      setIsFocused(false)
    }
  }, [value])

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  return (
    <div>
      <textarea
        value={value}
        onChange={handleInputChange}
        rows={rows}
        onFocus={handleFocus}
        className={cx('textarea', { focused: isFocused })}
        {...props}
      />
    </div>
  )
}
