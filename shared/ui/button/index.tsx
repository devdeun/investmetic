'use client'

import { ComponentProps } from 'react'

import classNames from 'classnames/bind'

import styles from './button.module.scss'

const cx = classNames.bind(styles)

type ButtonSizeType = 'small' | 'medium' | 'large'
type ButtonVariantType = 'outline' | 'filled'

interface ButtonProps extends ComponentProps<'button'> {
  size?: ButtonSizeType
  variant?: ButtonVariantType
}

export const Button = ({
  children,
  size = 'medium',
  variant = 'outline',
  disabled = false,
  className,
  ...props
}: ButtonProps) => (
  <button
    className={cx('button', size, variant, { disabled }, className)}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
)
