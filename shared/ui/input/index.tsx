'use client'

import { ComponentProps } from 'react'

import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

export type InputSizeType = 'small' | 'medium' | 'large'
export type InputVariantType = 'default' | 'error'

interface Props extends ComponentProps<'input'> {
  inputSize?: InputSizeType
  variant?: InputVariantType
  errorMessage?: string
}

export const Input = ({
  inputSize = 'small',
  variant = 'default',
  errorMessage,
  className,
  ...props
}: Props) => {
  return (
    <div>
      <input
        className={cx('input', inputSize, className, {
          error: variant === 'error' && !!errorMessage,
        })}
        {...props}
      />
      {errorMessage && <p className={cx('error-message')}>{errorMessage}</p>}
    </div>
  )
}
