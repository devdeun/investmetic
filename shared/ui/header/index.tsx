import { CSSProperties, ReactNode } from 'react'

import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  Left?: ReactNode
  Right?: ReactNode
  styles?: CSSProperties
}

const Header = ({ Left, Right, styles }: Props) => {
  return (
    <header className={cx('container')} style={styles}>
      {Left}
      {Right}
    </header>
  )
}

export default Header
