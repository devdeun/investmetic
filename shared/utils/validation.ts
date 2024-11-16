export const isValidateEmail = (email: string): boolean => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailPattern.test(email)
}

export const isValidatePassword = (password: string): boolean => {
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/
  return passwordPattern.test(password)
}

export const isValidatePhone = (phone: string): boolean => {
  const phonePattern = /^\d{10,11}$/
  return phonePattern.test(phone)
}

export const isRequired = (value: string): boolean => {
  return value.trim() !== ''
}
