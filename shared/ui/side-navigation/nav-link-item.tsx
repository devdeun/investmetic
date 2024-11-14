'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  href: string
  icon: React.ElementType
  children: React.ReactNode
  textClassName?: keyof typeof styles
}

const NavLinkItem = ({ href, icon: Icon, textClassName, children }: Props) => {
  const path = usePathname()
  const isActive = path.startsWith(href)

  return (
    <li className={cx('navigation-item')}>
      <Link href={href} className={cx('link', isActive && 'active')}>
        <Icon className={cx('icon')} />
        <span className={cx('text', textClassName)}>{children}</span>
      </Link>
    </li>
  )
}

export default NavLinkItem
