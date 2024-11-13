import Link from 'next/link'

import Logo from '@/public/images/logo.svg'
import TextLogo from '@/public/images/text-logo.svg'
import classNames from 'classnames/bind'

import { PATH } from '@/shared/constants/path'
import UserNavigation from '@/shared/ui/side-navigation/user-navigation'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  children: React.ReactNode
}

const SideNavigation = ({ children }: Props) => {
  return (
    <aside className={cx('aside')}>
      <header>
        <h1>
          <Link href={PATH.HOME} className={cx('logo')}>
            <Logo />
            <TextLogo className={cx('text')} aria-label="인베스트메틱" />
          </Link>
        </h1>
      </header>

      <nav className={cx('main-navigation')} aria-label="메인 메뉴">
        <ul>{children}</ul>
      </nav>

      <UserNavigation />
    </aside>
  )
}

export default SideNavigation
