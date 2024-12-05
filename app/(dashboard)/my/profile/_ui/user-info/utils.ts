import { SIGNUP_ERROR_MESSAGES } from '@/app/(landing)/signup/_constants/signup'

import { isValidNickname, isValidPassword, isValidPhone } from '@/shared/utils/validation'

import { ProfileErrorMessageType, ProfileFormModel } from './types'

type ValidationFieldType = keyof typeof SIGNUP_ERROR_MESSAGES

const validateField = (field: string, value: string): ProfileErrorMessageType | null => {
  if (!value.trim()) {
    return SIGNUP_ERROR_MESSAGES[`${field}_REQUIRED` as ValidationFieldType] || null
  }

  switch (field) {
    case 'NICKNAME':
      return isValidNickname(value) ? null : SIGNUP_ERROR_MESSAGES.NICKNAME_LENGTH
    case 'PASSWORD':
      return isValidPassword(value) ? null : SIGNUP_ERROR_MESSAGES.PASSWORD_INVALID
    case 'PHONE':
      return isValidPhone(value) ? null : SIGNUP_ERROR_MESSAGES.PHONE_INVALID
    default:
      return null
  }
}

export const validateProfileForm = (
  form: ProfileFormModel,
  isNicknameVerified: boolean,
  isPhoneVerified: boolean
): Record<string, ProfileErrorMessageType> => {
  const errors: Record<string, ProfileErrorMessageType> = {}

  const nicknameError = validateField('NICKNAME', form.nickname)
  if (nicknameError) errors.nickname = nicknameError
  else if (!isNicknameVerified) errors.nickname = SIGNUP_ERROR_MESSAGES.NICKNAME_CHECK_REQUIRED

  const passwordError = validateField('PASSWORD', form.password)
  if (passwordError) errors.password = passwordError
  // 비밀번호 입력할때 빈값이면 아무것도 안되도록 하는 로직 넣어야하는데 어케함...
  // const handlePasswordChange = () => {
  // const payload = password.trim() === '' ? null : password;

  const passwordMatchError = validatePasswordMatch(form.password, form.passwordConfirm)
  if (passwordMatchError) errors.passwordConfirm = passwordMatchError

  const phoneError = validateField('PHONE', form.phone)
  if (phoneError) errors.phone = phoneError
  if (!isPhoneVerified) errors.phone = SIGNUP_ERROR_MESSAGES.PHONE_CHECK_REQUIRED

  return errors
}

export const validatePasswordMatch = (
  password: string,
  confirmPassword: string
): ProfileErrorMessageType | null => {
  if (!confirmPassword.trim()) {
    return SIGNUP_ERROR_MESSAGES.PASSWORD_REQUIRED
  }
  return password === confirmPassword ? null : SIGNUP_ERROR_MESSAGES.PASSWORD_MISMATCH
}
