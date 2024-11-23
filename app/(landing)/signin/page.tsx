'use client'

import { useCallback, useState } from 'react'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

import { AxiosError } from 'axios'
import classNames from 'classnames/bind'

import { useLogin } from '@/shared/api/auth'
import { ERROR_MESSAGES } from '@/shared/constants/error-messages'
import { PATH } from '@/shared/constants/path'
import { useAuthStore } from '@/shared/stores/use-auth-store'
import type { LoginFormDataModel } from '@/shared/types/auth'
import { Button } from '@/shared/ui/button'
import Checkbox from '@/shared/ui/check-box'
import { Input } from '@/shared/ui/input'
import { validate } from '@/shared/utils/validation'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const SignInPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const loginMutation = useLogin()

  const setKeepLoggedIn = useAuthStore((state) => state.setKeepLoggedIn)
  const isKeepLoggedIn = useAuthStore((state) => state.isKeepLoggedIn)

  const [formData, setFormData] = useState<LoginFormDataModel>({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = useCallback(() => {
    const emailError = validate('EMAIL', formData.email)
    if (emailError) {
      setErrors(emailError)
      return false
    }

    const passwordError = validate('PASSWORD', formData.password)
    if (passwordError) {
      setErrors(passwordError)
      return false
    }

    return true
  }, [formData.email, formData.password])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors(null)

    if (!validateForm()) {
      setIsSubmitting(false)
      return
    }

    try {
      const { data } = await loginMutation.mutateAsync(formData)

      if (!data?.accessToken || !data?.refreshToken || !data?.user) {
        setErrors(ERROR_MESSAGES.AUTH.LOGIN_FAILED)
        return
      }

      const returnUrl = searchParams.get('returnUrl')
      if (returnUrl) {
        try {
          const url = new URL(returnUrl, window.location.origin)
          if (url.origin === window.location.origin) {
            router.replace(returnUrl)
            return
          }
        } catch (err) {
          console.error('Invalid return URL:', err)
        }
      }
      router.replace(PATH.STRATEGIES)
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response) {
          setErrors(err.response.data.message)
        } else {
          setErrors(ERROR_MESSAGES.NETWORK.ERROR)
        }
      } else {
        setErrors(ERROR_MESSAGES.AUTH.LOGIN_FAILED)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }, [])

  const handleKeepLoggedInChange = useCallback(
    (checked: boolean) => {
      setKeepLoggedIn(checked)
    },
    [setKeepLoggedIn]
  )

  const isFormDisabled = isSubmitting || loginMutation.isPending

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>로그인</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">이메일</label>
            <Input
              type="email"
              inputSize="large"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="이메일을 입력하세요."
              className={styles.input}
              disabled={isFormDisabled}
              required
              autoComplete="email"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">비밀번호</label>
            <Input
              type="password"
              inputSize="large"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="비밀번호를 입력하세요."
              className={styles.input}
              disabled={isFormDisabled}
              required
              autoComplete="current-password"
            />
          </div>
          <div className={cx('error-container')}>
            <p
              className={cx('error-message', {
                visible: errors,
                hidden: !errors,
              })}
              role="alert"
            >
              {errors}
            </p>
          </div>
          <div className={styles.options}>
            <label className={styles.remember}>
              <Checkbox
                isChecked={isKeepLoggedIn}
                onChange={handleKeepLoggedInChange}
                label="로그인 유지"
                textColor="gray600"
              />
            </label>
            <div className={styles.links}>
              <Link href={PATH.FIND_ID}>아이디 찾기</Link>
              <span className={styles.divider}>|</span>
              <Link href={PATH.FIND_PASSWORD}>비밀번호 찾기</Link>
            </div>
          </div>
          <Button type="submit" size="large" variant="filled" disabled={isFormDisabled}>
            로그인
          </Button>
          <Button
            type="button"
            size="large"
            onClick={() => router.push(PATH.SIGN_UP_USER_TYPE)}
            disabled={isFormDisabled}
          >
            회원가입
          </Button>
        </form>
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(SignInPage), {
  ssr: false,
})
