'use client'

import {
  CategoryIcon,
  NoticeIcon,
  QuestionIcon,
  StrategyRankingIcon,
  TradersIcon,
} from '@/public/icons'

import { fetchUser } from '@/shared/api/user'
import { PATH } from '@/shared/constants/path'
import SideNavigation from '@/shared/ui/side-navigation'
import LinkItem from '@/shared/ui/side-navigation/link-item'

const AdminNavigation = () => {
  const user = fetchUser()
  const isTrader = user.role.includes('trader')

  return (
    <SideNavigation>
      <LinkItem href={PATH.ADMIN_USERS} icon={TradersIcon}>
        회원 관리
      </LinkItem>
      <LinkItem href={PATH.ADMIN_NOTICES} icon={NoticeIcon}>
        공지사항
      </LinkItem>
      {isTrader && (
        <LinkItem href={PATH.ADMIN_CATEGORY} icon={CategoryIcon}>
          종목 및 매매 유형
        </LinkItem>
      )}
      <LinkItem href={PATH.ADMIN_STRATEGIES} icon={StrategyRankingIcon}>
        전략 관리
      </LinkItem>
      <LinkItem href={PATH.ADMIN_QUESTIONS} icon={QuestionIcon}>
        문의 내역
      </LinkItem>
    </SideNavigation>
  )
}

export default AdminNavigation
