import { DropdownValueType } from '@/shared/ui/dropdown/types'

import { SIGNUP_ERROR_MESSAGES } from '../_constants/signup'

export type SignupErrorMessageType =
  (typeof SIGNUP_ERROR_MESSAGES)[keyof typeof SIGNUP_ERROR_MESSAGES]

export interface SignupFormDataModel {
  name: string
  password: string
  emailId: string
  emailDomain: string
  phone: string
  birthYear: string
  birthMonth: string
  birthDay: string
}

export interface SignupFormErrorsModel {
  name?: SignupErrorMessageType
  password?: SignupErrorMessageType
  emailId?: SignupErrorMessageType
  phone?: SignupErrorMessageType
}

export interface SelectOptionModel {
  value: string
  label: string
}

export type SelectChangeHandlerType = (value: DropdownValueType) => void
