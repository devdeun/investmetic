'use client'

import { ChangeEvent, useState } from 'react'

import { useRouter } from 'next/navigation'

import classNames from 'classnames/bind'

import { PATH } from '@/shared/constants/path'
import { Button } from '@/shared/ui/button'
import Checkbox from '@/shared/ui/check-box'
import { Input } from '@/shared/ui/input'
import { LinkButton } from '@/shared/ui/link-button'
import Select from '@/shared/ui/select'

import Step from '../_ui/step'
import styles from './page.module.scss'
import { SignupFormDataModel, SignupFormErrorsModel, SignupFormStateModel } from './types'
import {
  generateDayOptions,
  generateMonthOptions,
  generateYearOptions,
  validateSignupForm,
} from './utils'

const cx = classNames.bind(styles)

const initialForm: SignupFormDataModel = {
  name: '',
  nickname: '',
  email: '',
  emailDomain: '',
  verificationCode: '',
  password: '',
  passwordConfirm: '',
  phone: '',
  birthYear: '',
  birthMonth: '',
  birthDay: '',
  isMarketingAgreed: false,
}

const initialFormState: SignupFormStateModel = {
  isEmailVerified: false,
  isNicknameVerified: false,
  isEmailSent: false,
}

const emailDomainOptions = [
  { value: '', label: '직접 입력' },
  { value: 'gmail.com', label: 'gmail.com' },
  { value: 'naver.com', label: 'naver.com' },
  { value: 'daum.net', label: 'daum.net' },
]

const yearOptions = generateYearOptions()
const monthOptions = generateMonthOptions()
const dayOptions = generateDayOptions()

const selectStyle = {
  backgroundColor: 'transparent',
  height: '48px',
}

const InformationPage = () => {
  const router = useRouter()
  const [form, setForm] = useState<SignupFormDataModel>(initialForm)
  const [errors, setErrors] = useState<SignupFormErrorsModel>({})
  const [formState, setFormState] = useState<SignupFormStateModel>(initialFormState)
  const [isValidated, setIsValidated] = useState(false)
  const [selectedDomain, setSelectedDomain] = useState<string>('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))

    if (isValidated) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }))
    }

    if (name === 'emailDomain') {
      setSelectedDomain('')
    }

    if (name === 'email' || name === 'emailDomain') {
      setFormState((prev) => ({
        ...prev,
        isEmailVerified: false,
        isEmailSent: false,
      }))
    }

    if (name === 'nickname') {
      setFormState((prev) => ({
        ...prev,
        isNicknameVerified: false,
      }))
    }
  }

  const handleDomainSelect = (value: string | string[]) => {
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

  const handleNicknameCheck = async () => {
    try {
      // TODO: 닉네임 중복 확인 API 호출
      setFormState((prev) => ({ ...prev, isNicknameVerified: true }))

      if (errors.nickname) {
        setErrors((prev) => ({ ...prev, nickname: null }))
      }
    } catch (error) {
      console.error('닉네임 중복 확인 실패:', error)
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

  const handleMarketingAgree = (checked: boolean) => {
    setForm((prev) => ({ ...prev, isMarketingAgreed: checked }))
  }

  const handleFormSubmit = () => {
    const formErrors = validateSignupForm(
      form,
      formState.isEmailVerified,
      formState.isNicknameVerified
    )
    setIsValidated(true)

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    // TODO: 회원가입 API 호출
    console.log('폼 제출', form)
    router.push(PATH.SIGN_UP_COMPLETE)
  }

  return (
    <>
      <Step />

      <form className={cx('form-container')}>
        <div className={cx('input-group')}>
          <label htmlFor="name">이름</label>
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            placeholder="이름을 입력하세요"
            className={cx('input')}
            errorMessage={errors.name}
          />
        </div>

        <div className={cx('input-group')}>
          <label htmlFor="nickname">닉네임</label>
          <div>
            <div className={cx('wrapper')}>
              <Input
                id="nickname"
                name="nickname"
                value={form.nickname}
                onChange={handleInputChange}
                placeholder="닉네임을 입력하세요"
                className={cx('input')}
                errorMessage={errors.nickname}
              />
              <Button onClick={handleNicknameCheck} type="button" className={cx('button')}>
                중복확인
              </Button>
            </div>
            <small>* 사이트 이용 시 사용할 닉네임을 입력해주세요.</small>
          </div>
        </div>

        <div className={cx('input-group')}>
          <label>이메일 인증</label>
          <div>
            <div>
              <div className={cx('wrapper')}>
                <Input
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  placeholder="이메일 주소를 입력하세요"
                  className={cx('input')}
                  errorMessage={errors.email}
                />
                <span className={cx('symbol')}>@</span>
                <Input
                  id="emailDomain"
                  name="emailDomain"
                  value={form.emailDomain}
                  onChange={handleInputChange}
                  inputSize="small"
                  className={cx('input')}
                  disabled={selectedDomain !== ''}
                />
                <Select
                  options={emailDomainOptions}
                  isMultiple={false}
                  value={selectedDomain}
                  size="large"
                  onChange={(value) => handleDomainSelect(String(value))}
                  titleStyle={selectStyle}
                />
                <Button
                  onClick={handleEmailVerification}
                  type="button"
                  variant="filled"
                  className={cx('button')}
                >
                  인증
                </Button>
              </div>
              <small>* 사이트 이용 시 아이디로 사용됩니다.</small>
            </div>
            {formState.isEmailSent && (
              <div className={cx('wrapper', 'verification')}>
                <Input
                  id="verificationCode"
                  name="verificationCode"
                  value={form.verificationCode}
                  onChange={handleInputChange}
                  placeholder="인증번호"
                  className={cx('input')}
                />
                <Button
                  onClick={handleVerificationCodeCheck}
                  type="button"
                  className={cx('button')}
                >
                  인증번호 확인
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className={cx('input-group')}>
          <label htmlFor="password">비밀번호</label>
          <div>
            <Input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleInputChange}
              placeholder="비밀번호를 입력하세요"
              className={cx('input')}
              errorMessage={errors.password}
            />
            <small>* 비밀번호는 문자, 숫자 포함 6~20자로 구성되어야 합니다.</small>
          </div>
        </div>

        <div className={cx('input-group')}>
          <label htmlFor="passwordConfirm">비밀번호 확인</label>
          <Input
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            value={form.passwordConfirm}
            onChange={handleInputChange}
            placeholder="한 번 더 입력하세요"
            className={cx('input')}
            errorMessage={errors.passwordConfirm}
          />
        </div>

        <div className={cx('input-group')}>
          <label htmlFor="phone">휴대전화</label>
          <Input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleInputChange}
            placeholder="전화번호를 입력하세요."
            className={cx('input')}
            errorMessage={errors.phone}
          />
        </div>

        <div className={cx('select-group')}>
          <label htmlFor="birthday">생년월일</label>
          <div className={cx('select-wrapper')}>
            <Select
              options={yearOptions}
              value={form.birthYear}
              onChange={(value) => setForm((prev) => ({ ...prev, birthYear: String(value) }))}
              size="small"
              placeholder="년"
              titleStyle={selectStyle}
            />
            <Select
              options={monthOptions}
              value={form.birthMonth}
              onChange={(value) => setForm((prev) => ({ ...prev, birthMonth: String(value) }))}
              size="small"
              placeholder="월"
              titleStyle={selectStyle}
            />
            <Select
              options={dayOptions}
              value={form.birthDay}
              onChange={(value) => setForm((prev) => ({ ...prev, birthDay: String(value) }))}
              size="small"
              placeholder="일"
              titleStyle={selectStyle}
            />
          </div>
        </div>

        <div className={cx('terms-wrapper')}>
          <label>정보수신동의</label>
          <div className={cx('checkbox-wrapper')}>
            <Checkbox
              label="정보성 마케팅 정보 알림에 수신 동의합니다."
              isChecked={form.isMarketingAgreed}
              onChange={handleMarketingAgree}
              textColor="gray800"
              textSize="b2"
            />
          </div>
        </div>
      </form>

      <div className={cx('button-wrapper')}>
        <LinkButton href={PATH.SIGN_UP_TERMS_OF_USE}>이전</LinkButton>
        <Button variant="filled" onClick={handleFormSubmit}>
          다음
        </Button>
      </div>
    </>
  )
}

export default InformationPage
