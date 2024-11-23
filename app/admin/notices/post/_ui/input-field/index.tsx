'use client'

import classNames from 'classnames/bind'

import { Input } from '@/shared/ui/input'
import { Textarea } from '@/shared/ui/textarea'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  label: string
  inputType: JSX.IntrinsicElements['input']['type'] | 'textArea'
  placeholder?: string
}

const InputField = ({ label, inputType, placeholder }: Props) => {
  return (
    <label className={cx('container')}>
      <span className={cx('label')}>{label}</span>
      <div className={cx('input')}>
        {inputType !== 'textArea' ? (
          <Input type={inputType} inputSize="full" placeholder={placeholder} />
        ) : (
          <Textarea rows={26} placeholder={placeholder} />
        )}
      </div>
    </label>
  )
}

export default InputField
