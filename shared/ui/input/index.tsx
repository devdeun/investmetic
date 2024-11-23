'use client'

import { ComponentProps } from 'react'

import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

export type InputSizeType = 'small' | 'medium' | 'large' | 'full'

interface Props extends ComponentProps<'input'> {
  inputSize?: InputSizeType
  errorMessage?: string | null
}

export const Input = ({ inputSize = 'medium', errorMessage, className, ...props }: Props) => {
  return (
    <div>
      <input
        className={cx('input', inputSize, className, {
          error: !!errorMessage,
        })}
        {...props}
      />
      {errorMessage && <p className={cx('error-message')}>{errorMessage}</p>}
    </div>
  )
}
