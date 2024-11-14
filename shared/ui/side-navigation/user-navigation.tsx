'use client'

import { usePathname } from 'next/navigation'

import { ChangeIcon, ProfileIcon, SignOutIcon } from '@/public/icons'
import classNames from 'classnames/bind'

import { fetchUser } from '@/shared/api/user'
import { PATH } from '@/shared/constants/path'
import NavButtonItem from '@/shared/ui/side-navigation/nav-button-item'
import NavLinkItem from '@/shared/ui/side-navigation/nav-link-item'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const UserNavigation = () => {
  const path = usePathname()
  const isAdminPage = path.startsWith(PATH.ADMIN)

  const user = fetchUser()
  const isAdmin = user.role.includes('admin')

  return (
    <nav className={cx('user-navigation')} aria-label="사용자 메뉴">
      <ul>
        <NavLinkItem href={PATH.PROFILE} icon={ProfileIcon} textClassName="user">
          <span className={cx('nickname')}>{user.nickname}</span>
          <span className={cx('email')}>{user.email}</span>
        </NavLinkItem>

        {isAdmin && (
          <NavLinkItem href={isAdminPage ? PATH.STRATEGIES : PATH.ADMIN_USERS} icon={ChangeIcon}>
            {isAdminPage ? '메인 대시보드' : '관리자 대시보드'}
          </NavLinkItem>
        )}

        <NavButtonItem icon={SignOutIcon} onClick={() => {}}>
          로그아웃
        </NavButtonItem>
      </ul>
    </nav>
  )
}

export default UserNavigation
