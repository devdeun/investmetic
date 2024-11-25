'use client'

import classNames from 'classnames/bind'

import { PATH } from '@/shared/constants/path'
import { Button } from '@/shared/ui/button'
import Checkbox from '@/shared/ui/check-box'
import { Input } from '@/shared/ui/input'
import { LinkButton } from '@/shared/ui/link-button'
import Select from '@/shared/ui/select'

import Step from '../_ui/step'
import styles from './page.module.scss'
import { SelectOptionModel } from './types'
import { generateDayOptions, generateMonthOptions, generateYearOptions } from './utils'

const cx = classNames.bind(styles)

const emailDomainOptions: SelectOptionModel[] = [
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
  return (
    <>
      <Step />

      <form className={cx('form-container')}>
        <div className={cx('input-group')}>
          <label htmlFor="name">이름</label>
          <Input id="name" placeholder="이름을 입력하세요" className={cx('input')} />
        </div>

        <div className={cx('input-group')}>
          <label htmlFor="nickname">닉네임</label>
          <div>
            <div className={cx('wrapper')}>
              <Input id="nickname" placeholder="닉네임을 입력하세요" className={cx('input')} />
              <Button onClick={() => {}} type="button" className={cx('button')}>
                중복확인
              </Button>
            </div>
            <small>* 사이트 이용 시 사용할 닉네임을 입력해주세요.</small>
          </div>
        </div>

        <div className={cx('input-group')}>
          <label htmlFor="nickname">이메일 인증</label>
          <div>
            <div>
              <div className={cx('wrapper')}>
                <Input id="email" placeholder="이메일 주소를 입력하세요" className={cx('input')} />
                <span className={cx('symbol')}>@</span>
                <Input id="domain" inputSize="small" className={cx('input')} />
                <Select
                  options={emailDomainOptions}
                  isMultiple={false}
                  value={emailDomainOptions[0].label}
                  size="large"
                  onChange={() => {}}
                  titleStyle={selectStyle}
                />
                <Button onClick={() => {}} type="button" variant="filled" className={cx('button')}>
                  인증
                </Button>
              </div>
              <small>* 사이트 이용 시 아이디로 사용됩니다.</small>
            </div>
            <div className={cx('wrapper', 'verification')}>
              <Input id="verification" placeholder="인증번호" className={cx('input')} />
              <Button onClick={() => {}} type="button" className={cx('button')}>
                인증번호 확인
              </Button>
            </div>
          </div>
        </div>

        <div className={cx('input-group')}>
          <label htmlFor="password">비밀번호</label>
          <div>
            <Input
              id="password"
              placeholder="비밀번호를 입력하세요"
              className={cx('input')}
              type="password"
            />
            <small>* 비밀번호는 문자, 숫자 포함 6~20자로 구성되어야 합니다.</small>
          </div>
        </div>

        <div className={cx('input-group')}>
          <label htmlFor="password-check">비밀번호 확인</label>
          <Input
            id="password-check"
            placeholder="한 번 더 입력하세요"
            className={cx('input')}
            type="password"
          />
        </div>

        <div className={cx('input-group')}>
          <label htmlFor="phone">휴대전화</label>
          <Input id="phone" placeholder="전화번호를 입력하세요." className={cx('input')} />
        </div>

        <div className={cx('select-group')}>
          <label htmlFor="birthday">생년월일</label>
          <div className={cx('select-wrapper')}>
            <Select
              options={yearOptions}
              value={'임시'}
              size="small"
              onChange={() => {}}
              placeholder="년"
              titleStyle={selectStyle}
            />
            <Select
              options={monthOptions}
              value={'임시'}
              size="small"
              onChange={() => {}}
              placeholder="월"
              titleStyle={selectStyle}
            />
            <Select
              options={dayOptions}
              value={'임시'}
              size="small"
              onChange={() => {}}
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
              isChecked={true}
              onChange={(isChecked) => console.log(isChecked)}
              textColor="gray800"
              textSize="b2"
            />
          </div>
        </div>
      </form>

      <div className={cx('button-wrapper')}>
        <LinkButton href={PATH.SIGN_UP_TERMS_OF_USE}>이전</LinkButton>
        <Button variant="filled" onClick={() => {}}>
          다음
        </Button>
      </div>
    </>
  )
}

export default InformationPage
