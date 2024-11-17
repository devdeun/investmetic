'use client'

import Logo from '@/public/images/logo.svg'
import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const SignupCompleteMessage = () => {
  return (
    <section className={cx('container')}>
      <p>홍길동의 회원가입이 완료되었습니다.</p>
      <p>
        지금 바로 인베스트메틱
        <Logo />
        에서 <br />
        다양한 투자 전략들을 찾아보세요!
      </p>
    </section>
  )
}

export default SignupCompleteMessage
