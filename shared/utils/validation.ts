import { ERROR_MESSAGES } from '@/shared/constants/error-messages'

const PATTERNS = {
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
  PHONE: /^\d{10,11}$/,
} as const

const isValidEmail = (email: string): boolean => {
  return PATTERNS.EMAIL.test(email)
}

const isValidPassword = (password: string): boolean => {
  return PATTERNS.PASSWORD.test(password)
}

const isValidPhone = (phone: string): boolean => {
  return PATTERNS.PHONE.test(phone)
}

const validators = {
  EMAIL: isValidEmail,
  PASSWORD: isValidPassword,
  PHONE: isValidPhone,
} as const

export const validate = (name: keyof typeof validators, value: string): string | null => {
  if (!value.trim()) {
    return ERROR_MESSAGES.FORM.REQUIRED_FIELDS
  }

  if (!validators[name](value)) {
    return ERROR_MESSAGES.FORM[name]
  }

  return null
}
