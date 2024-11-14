'use client'

import StepItem from '@/app/(landing)/signup/_ui/step/step-item'
import { BarsIcon, CheckIcon, PencilIcon, ProfileIcon } from '@/public/icons'
import classNames from 'classnames/bind'

import { PATH } from '@/shared/constants/path'

import styles from './style.module.scss'

const cx = classNames.bind(styles)

const Step = () => {
  return (
    <div className={cx('step')}>
      <StepItem step={1} pathname={PATH.SIGN_UP_USER_TYPE} icon={ProfileIcon}>
        회원 선택
      </StepItem>
      <div className={cx('bar')}> </div>
      <StepItem step={2} pathname={PATH.SIGN_UP_TERMS_OF_USE} icon={BarsIcon}>
        약관 동의
      </StepItem>
      <div className={cx('bar')}> </div>
      <StepItem step={3} pathname={PATH.SIGN_UP_INFORMATION} icon={PencilIcon}>
        정보 입력
      </StepItem>
      <div className={cx('bar')}> </div>
      <StepItem step={4} pathname={PATH.SIGN_UP_COMPLETE} icon={CheckIcon}>
        가입 완료
      </StepItem>
    </div>
  )
}

export default Step
