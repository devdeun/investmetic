import { useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'

import { STEPS } from '@/app/(landing)/signup/_ui/step'
import classNames from 'classnames/bind'

import { PATH } from '@/shared/constants/path'
import useStepHistoryStore from '@/shared/stores/use-step-history-store'

import styles from './styles.module.scss'

/* eslint-disable react-hooks/exhaustive-deps */

const cx = classNames.bind(styles)

interface Props {
  children: React.ReactNode
  step: number
  pathname: string
  icon: React.ElementType
  prevStep: number
}

const StepItem = ({ children, step, pathname, icon: Icon, prevStep }: Props) => {
  const stepHistory = useStepHistoryStore((state) => state.stepHistory)
  const [isNextStep, setIsNextStep] = useState(false)
  const [isPrevStep, setIsPrev] = useState(false)
  const [isFix, setIsFix] = useState(false)
  const currentPath = usePathname()

  useEffect(() => {
    if (currentPathIdx - (prevStep - 1) > 0) {
      handleNextStep()
    } else if (stepHistory.length !== 0) {
      handlePrevStep()
    }
  }, [currentPath])

  const currentPathIdx = STEPS.findIndex((step) => step.path === currentPath)
  const stepIdx = step - 1

  const handleNextStep = () => {
    if (currentPathIdx > stepIdx) {
      setIsNextStep(true)
      if (currentPathIdx - step > 0) {
        setIsFix(true)
      }
    }
  }

  const handlePrevStep = () => {
    if (currentPathIdx === stepIdx) {
      setIsPrev(true)
    }
    if (currentPathIdx - stepIdx > 0) {
      setIsNextStep(true)
      setIsFix(true)
    }
  }

  const isCurrentStep = currentPath === pathname

  const stepCondition = {
    current: isCurrentStep,
    next: isNextStep,
    prev: isPrevStep,
    fix: isFix,
  }

  return (
    <>
      <div className={cx('step-item')}>
        <div className={cx('circle', stepCondition)}>
          {isCurrentStep || isNextStep ? <Icon className={cx('icon')} /> : step}
        </div>
        <p className={cx(stepCondition)}>{children}</p>
      </div>
      {pathname !== PATH.SIGN_UP_COMPLETE && <div className={cx('bar', stepCondition)}> </div>}
    </>
  )
}

export default StepItem
