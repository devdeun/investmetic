import { ERROR_MESSAGES } from '@/shared/constants/errorMessages'

export const validateInput = (type: string, value: string): string => {
  switch (type) {
    case 'email': {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      return emailPattern.test(value) ? '' : ERROR_MESSAGES.email
    }
    case 'password': {
      const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/
      return passwordPattern.test(value) ? '' : ERROR_MESSAGES.password
    }
    case 'phone': {
      const phonePattern = /^\d{10,11}$/
      return phonePattern.test(value) ? '' : ERROR_MESSAGES.phone
    }
    case 'name':
    case 'nickname':
    case 'verificationCode': {
      return value.trim() === '' ? ERROR_MESSAGES.required : ''
    }
    case 'text': {
      return ''
    }
    default:
      return ''
  }
}
