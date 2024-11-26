import axios from 'axios'

import { SignupFormDataModel } from '../information/types'

export const signup = async (formData: SignupFormDataModel) => {
  const data = {
    username: formData.name,
    nickname: formData.nickname,
    phone: formData.phone,
    birthdate: `${formData.birthYear}-${formData.birthMonth}-${formData.birthDay}`,
    password: formData.password,
    email: `${formData.email}@${formData.emailDomain}`,
    role: formData.role,
    infoAgreement: formData.infoAgreement,
    imageMetadata: {
      imageName: '',
      extension: '',
      size: 0,
    },
  }

  try {
    const response = await axios.post('/api/users/signup', data)
    return response.data
  } catch (error) {
    console.error('회원가입 실패:', error)
    throw new Error('회원가입에 실패했습니다.')
  }
}
