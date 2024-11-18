import classNames from 'classnames/bind'

import Logo from '../logo'
import HeaderLinks from './_ui/header-links'
import styles from './header.module.scss'

const cx = classNames.bind(styles)

interface Props {
  hasLinks?: boolean
}

const Header = ({ hasLinks = false }: Props) => {
  return (
    <header className={cx('container')}>
      <Logo hasText />
      {hasLinks && <HeaderLinks />}
    </header>
  )
}

export default Header
