'use client'

import { usePathname } from 'next/navigation'

import { ChangeIcon, ProfileIcon, SignOutIcon } from '@/public/icons'
import classNames from 'classnames/bind'

import { fetchUser } from '@/shared/api/user'
import { PATH } from '@/shared/constants/path'
import ButtonItem from '@/shared/ui/side-navigation/button-item'
import LinkItem from '@/shared/ui/side-navigation/link-item'

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
        <LinkItem href={PATH.PROFILE} icon={ProfileIcon} textClassName="user">
          <span className={cx('nickname')}>{user.nickname}</span>
          <span className={cx('email')}>{user.email}</span>
        </LinkItem>

        {isAdmin && (
          <LinkItem href={isAdminPage ? PATH.STRATEGIES : PATH.ADMIN_USERS} icon={ChangeIcon}>
            {isAdminPage ? '메인 대시보드' : '관리자 대시보드'}
          </LinkItem>
        )}

        <ButtonItem icon={SignOutIcon} onClick={() => {}}>
          로그아웃
        </ButtonItem>
      </ul>
    </nav>
  )
}

export default UserNavigation
