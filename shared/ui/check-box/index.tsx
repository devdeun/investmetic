'use client'

import { CheckedCircleIcon, CircleIcon } from '@/public/icons'
import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  label?: string
  isChecked: boolean
  onChange: (checked: boolean) => void
  className?: string
  textColor?: 'gray500' | 'gray600' | 'gray800'
}

const Checkbox = ({ label, isChecked, onChange, className = '', textColor = 'gray500' }: Props) => {
  const handleClick = () => {
    onChange(!isChecked)
  }

  return (
    <div className={cx('checkboxContainer', className)} onClick={handleClick}>
      <div
        className={cx('checkbox', {
          isChecked,
          [`checked${textColor}`]: isChecked,
        })}
      >
        {isChecked ? <CheckedCircleIcon /> : <CircleIcon />}
      </div>
      {label && <span className={cx('label', textColor)}>{label}</span>}
    </div>
  )
}

export default Checkbox
