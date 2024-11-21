'use client'

import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  children: React.ReactNode
}

const SideContainer = ({ children }: Props) => {
  return <aside className={cx('side-bar')}>{children}</aside>
}

export default SideContainer
