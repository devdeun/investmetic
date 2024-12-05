import { useState } from 'react'

import axios from 'axios'

import { useFindCredentials } from '@/shared/hooks/query/use-find-credentials'

interface UseResetPasswordProps {
  onSuccess: () => void
  onError: (message: string) => void
}

export const useResetPassword = ({ onSuccess, onError }: UseResetPasswordProps) => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    code: '',
    password: '',
    passwordConfirm: '',
  })

  const { authenticateMutation, resetPasswordMutation } = useFindCredentials()

  const handleVerifyEmail = async (e?: React.FormEvent) => {
    e?.preventDefault()
    try {
      const response = await authenticateMutation.mutateAsync({
        email: formData.email,
        code: formData.code,
      })
      if (response.isSuccess) {
        setStep(2)
        onError('')
      } else {
        onError(response.message || '인증에 실패했습니다.')
      }
    } catch {
      onError('인증에 실패했습니다.')
    }
  }

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.passwordConfirm) {
      onError('비밀번호가 일치하지 않습니다.')
      return
    }
    try {
      const response = await resetPasswordMutation.mutateAsync({
        email: formData.email,
        password: formData.password,
      })
      if (response.isSuccess) {
        onSuccess()
      } else {
        onError(response.message || '비밀번호 재설정에 실패했습니다.')
      }
    } catch {
      onError('비밀번호 재설정에 실패했습니다.')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRequestCode = async () => {
    try {
      const response = await axios.get(`/api/users/authenticate?email=${formData.email}`)
      if (response.data.isSuccess) {
        onError('')
      } else {
        onError(response.data.message || '인증코드 발송에 실패했습니다.')
      }
    } catch {
      onError('인증코드 발송에 실패했습니다.')
    }
  }

  const isPending = authenticateMutation.isPending || resetPasswordMutation.isPending

  const resetForm = () => {
    setFormData({
      email: '',
      code: '',
      password: '',
      passwordConfirm: '',
    })
  }

  return {
    formData,
    step,
    isPending,
    handleInputChange,
    handleRequestCode,
    handleVerifyEmail,
    handlePasswordReset,
    setStep,
    resetForm,
  }
}
