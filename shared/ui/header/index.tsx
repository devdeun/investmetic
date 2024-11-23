import { CSSProperties, ElementType, ReactNode } from 'react'

import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  Left?: ReactNode
  Right?: ReactNode
  as?: ElementType
  styles?: CSSProperties
}

const Header = ({ Left, Right, as: Component = 'header', styles }: Props) => {
  return (
    <Component className={cx('container')} style={styles}>
      {Left}
      {Right}
    </Component>
  )
}

export default Header
