import { Dispatch, SetStateAction, useState } from 'react'

import {
  SignupFormErrorsModel,
  SignupFormModel,
  SignupFormStateModel,
} from './../../information/types'

interface Props {
  errors: SignupFormErrorsModel
  isValidated: boolean
  setForm: Dispatch<SetStateAction<SignupFormModel>>
  setErrors: Dispatch<SetStateAction<SignupFormErrorsModel>>
  setFormState: Dispatch<SetStateAction<SignupFormStateModel>>
}

const useSignupEmail = ({ errors, isValidated, setForm, setErrors, setFormState }: Props) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('')

  const handleEmailChange = (name: string) => {
    if (name === 'emailDomain') {
      setSelectedDomain('')
    }

    setFormState((prev) => ({
      ...prev,
      isEmailVerified: false,
      isEmailSent: false,
    }))
  }

  const handleDomainSelect = (value: string) => {
    if (typeof value === 'string') {
      setSelectedDomain(value)
      setForm((prev) => ({ ...prev, emailDomain: value !== '' ? value : '' }))

      if (isValidated) {
        setErrors((prev) => ({ ...prev, email: null }))
      }

      setFormState((prev) => ({
        ...prev,
        isEmailVerified: false,
        isEmailSent: false,
      }))
    }
  }

  const handleEmailVerification = async () => {
    try {
      // TODO: 이메일 인증 API 호출
      setFormState((prev) => ({ ...prev, isEmailSent: true }))
    } catch (error) {
      console.error('이메일 인증 발송 실패:', error)
    }
  }

  const handleVerificationCodeCheck = async () => {
    try {
      // TODO: 인증번호 확인 API 호출
      setFormState((prev) => ({ ...prev, isEmailVerified: true }))

      if (errors.email) {
        setErrors((prev) => ({ ...prev, email: null }))
      }
    } catch (error) {
      console.error('인증번호 확인 실패:', error)
    }
  }

  return {
    selectedDomain,
    handleEmailChange,
    handleDomainSelect,
    handleEmailVerification,
    handleVerificationCodeCheck,
  }
}

export default useSignupEmail
