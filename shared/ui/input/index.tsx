'use client'

import { ComponentProps } from 'react'

import classNames from 'classnames/bind'

import { ErrorMessageType } from '@/shared/types/error-message'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

export type InputSizeType = 'small' | 'medium' | 'large' | 'full'

interface Props extends ComponentProps<'input'> {
  inputSize?: InputSizeType
  errorMessage?: ErrorMessageType | null
}

export const Input = ({
  inputSize = 'medium',
  errorMessage,
  className,
  value,
  onChange,
  ...props
}: Props) => {
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        className={cx('input', inputSize, className, {
          error: !!errorMessage,
        })}
        {...props}
      />
      {errorMessage && <p className={cx('error-message')}>{errorMessage}</p>}
    </div>
  )
}
