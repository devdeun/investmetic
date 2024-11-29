import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  isFixed?: boolean
  children: React.ReactNode
}

const SideContainer = ({ isFixed = false, children }: Props) => {
  return <aside className={cx('side-bar', { fixed: isFixed })}>{children}</aside>
}

export default SideContainer
