'use client'

import { useEffect } from 'react'

import { usePathname } from 'next/navigation'

import StepItem from '@/app/(landing)/signup/_ui/step/step-item'
import { BarsIcon, CheckIcon, PencilIcon, ProfileIcon } from '@/public/icons'
import classNames from 'classnames/bind'

import { PATH } from '@/shared/constants/path'
import useStepHistoryStore from '@/shared/stores/use-step-history-store'

import styles from './style.module.scss'

/* eslint-disable react-hooks/exhaustive-deps */

const cx = classNames.bind(styles)

export const STEP_OF_PATH: { [key: string]: number } = {
  [PATH.SIGN_UP_USER_TYPE]: 1,
  [PATH.SIGN_UP_TERMS_OF_USE]: 2,
  [PATH.SIGN_UP_INFORMATION]: 3,
  [PATH.SIGN_UP_COMPLETE]: 4,
}
const Step = () => {
  const stepHistory = useStepHistoryStore((state) => state.stepHistory)
  const addStep = useStepHistoryStore((state) => state.addStep)
  const removeStep = useStepHistoryStore((state) => state.removeStep)
  const currentPath = usePathname()

  useEffect(() => {
    handleStepHistoryControl()
  }, [])

  const handleStepHistoryControl = () => {
    addStep(currentPath)
    if (stepHistory.length > 1) {
      removeStep()
    }
  }

  let prevStep = STEP_OF_PATH[stepHistory[0]]
  const currentStep = STEP_OF_PATH[stepHistory[1]]
  if (currentStep === 1) {
    prevStep = 0
  }

  return (
    <div className={cx('step')}>
      <StepItem step={1} pathname={PATH.SIGN_UP_USER_TYPE} icon={ProfileIcon} prevStep={prevStep}>
        회원 선택
      </StepItem>
      <StepItem step={2} pathname={PATH.SIGN_UP_TERMS_OF_USE} icon={BarsIcon} prevStep={prevStep}>
        약관 동의
      </StepItem>
      <StepItem step={3} pathname={PATH.SIGN_UP_INFORMATION} icon={PencilIcon} prevStep={prevStep}>
        정보 입력
      </StepItem>
      <StepItem step={4} pathname={PATH.SIGN_UP_COMPLETE} icon={CheckIcon} prevStep={prevStep}>
        가입 완료
      </StepItem>
    </div>
  )
}

export default Step
