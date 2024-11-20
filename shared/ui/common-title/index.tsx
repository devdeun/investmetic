import { CSSProperties } from 'react'

import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  label: string
  subtitle?: string
  marginLeft?: CSSProperties['marginLeft']
  style?: CSSProperties
}

const CommonTitle = ({ label, subtitle, marginLeft, style }: Props) => {
  return (
    <div className={cx('container')} style={{ ...style, marginLeft }}>
      <h1 className={cx('title')}>{label}</h1>
      {subtitle && <p className={cx('sub-title')}>{subtitle}</p>}
    </div>
  )
}

export default CommonTitle
