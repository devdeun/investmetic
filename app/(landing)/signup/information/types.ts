import { DropdownValueType } from '@/shared/ui/dropdown/types'

import { SIGNUP_ERROR_MESSAGES } from '../_constants/signup'

export type SignupErrorMessageType =
  (typeof SIGNUP_ERROR_MESSAGES)[keyof typeof SIGNUP_ERROR_MESSAGES]

export interface SignupFormDataModel {
  name: string
  nickname: string
  email: string
  emailDomain: string
  verificationCode: string
  password: string
  passwordConfirm: string
  phone: string
  birthYear: string
  birthMonth: string
  birthDay: string
  isMarketingAgreed: boolean
}

export interface SignupFormErrorsModel {
  name?: SignupErrorMessageType | null
  nickname?: SignupErrorMessageType | null
  email?: SignupErrorMessageType | null
  password?: SignupErrorMessageType | null
  passwordConfirm?: SignupErrorMessageType | null
  phone?: SignupErrorMessageType | null
}

export interface SelectOptionModel {
  value: string
  label: string
}

export interface SignupFormStateModel {
  isEmailVerified: boolean
  isNicknameVerified: boolean
  isEmailSent: boolean
  isPhoneVerified: boolean
}

export type SelectChangeHandlerType = (value: DropdownValueType) => void
