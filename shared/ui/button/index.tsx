'use client'

import { ComponentProps } from 'react'

import classNames from 'classnames/bind'

import styles from './button.module.scss'

const cx = classNames.bind(styles)

export type ButtonSizeType = 'small' | 'medium' | 'large'
export type ButtonVariantType = 'outline' | 'filled'

interface Props extends ComponentProps<'button'> {
  size?: ButtonSizeType
  variant?: ButtonVariantType
  onClick: () => void
}

export const Button = ({
  children,
  size = 'medium',
  variant = 'outline',
  disabled = false,
  onClick,
  className,
  ...props
}: Props) => (
  <button
    className={cx('button', size, variant, { disabled }, className)}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
)
