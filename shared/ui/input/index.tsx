'use client'

import { ComponentProps, useEffect, useState } from 'react'

import classNames from 'classnames/bind'

import { validateInput } from '@/shared/utils/validation'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

export type InputSizeType = 'small' | 'medium' | 'large'
export type InputVariantType = 'default' | 'error'
export type InputType =
  | 'name'
  | 'nickname'
  | 'email'
  | 'verificationCode'
  | 'password'
  | 'confirmPassword'
  | 'phone'
  | 'text'

interface Props extends ComponentProps<'input'> {
  inputSize?: InputSizeType
  variant?: InputVariantType
  type?: InputType
  setIsInvalid?: (isValid: boolean) => void
}

export const Input = ({
  inputSize = 'small',
  variant = 'default',
  type = 'text',
  setIsInvalid,
  ...props
}: Props) => {
  const [value, setValue] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  useEffect(() => {
    if (setIsInvalid) {
      setIsInvalid(!!errorMessage)
    }
  }, [errorMessage, setIsInvalid])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setValue(newValue)

    if (variant === 'error') {
      const message = validateInput(type, newValue)
      setErrorMessage(message)
    }
  }

  return (
    <div>
      <input
        value={value}
        onChange={handleInputChange}
        className={cx('input', inputSize, {
          error: !!errorMessage,
        })}
        {...props}
      />
      {errorMessage && <p className={cx('error-message')}>{errorMessage}</p>}
    </div>
  )
}
