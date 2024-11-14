/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'

import classNames from 'classnames/bind'

import { PATH } from '@/shared/constants/path'

import styles from './style.module.scss'

const cx = classNames.bind(styles)

const STEP_HISTORY = [
  PATH.SIGN_UP_USER_TYPE,
  PATH.SIGN_UP_TERMS_OF_USE,
  PATH.SIGN_UP_INFORMATION,
  PATH.SIGN_UP_COMPLETE,
]

interface Props {
  children: React.ReactNode
  step: number
  pathname: string
  icon: React.ElementType
}

const StepItem = ({ children, step, pathname, icon: Icon }: Props) => {
  const [isDone, setIsDone] = useState(false)
  const currentPath = usePathname()

  useEffect(() => {
    validateIsDoneStatus()
  }, [currentPath])

  const validateIsDoneStatus = () => {
    const currentPathIdx = STEP_HISTORY.findIndex((path) => path === currentPath)
    if (currentPathIdx > step - 1) {
      setIsDone(true)
    }
  }

  const isCurrentStep = currentPath === pathname

  const stepCondition = {
    current: isCurrentStep,
    done: isDone,
  }

  return (
    <div className={cx('step-item')}>
      <div className={cx('circle', stepCondition)}>
        {isCurrentStep || isDone ? <Icon className={cx('icon')} /> : step}
      </div>
      <p className={cx(stepCondition)}>{children}</p>
    </div>
  )
}

export default StepItem
