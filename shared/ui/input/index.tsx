'use client'

import { ComponentPropsWithoutRef, forwardRef } from 'react'

import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

export type InputSizeType = 'small' | 'medium' | 'large' | 'full'

interface Props extends ComponentPropsWithoutRef<'input'> {
  inputSize?: InputSizeType
  error?: boolean
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ inputSize = 'medium', className, value, error = false, onChange, ...props }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          value={value}
          onChange={onChange}
          className={cx('input', inputSize, { error }, className)}
          {...props}
        />
      </div>
    )
  }
)

Input.displayName = 'Input'
