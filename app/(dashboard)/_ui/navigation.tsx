'use client'

import {
  FavoriteIcon,
  QuestionIcon,
  StrategyIcon,
  StrategyRankingIcon,
  TradersIcon,
} from '@/public/icons'

import { fetchUser } from '@/shared/api/user'
import { PATH } from '@/shared/constants/path'
import SideNavigation from '@/shared/ui/side-navigation'
import NavLinkItem from '@/shared/ui/side-navigation/nav-link-item'

const DashboardNavigation = () => {
  const user = fetchUser()
  const isTrader = user.role.includes('trader')

  return (
    <SideNavigation>
      <NavLinkItem href={PATH.STRATEGIES} icon={StrategyRankingIcon}>
        전략 랭킹
      </NavLinkItem>
      <NavLinkItem href={PATH.TRADERS} icon={TradersIcon}>
        트레이더 목록
      </NavLinkItem>
      {isTrader && (
        <NavLinkItem href={PATH.MY_STRATEGIES} icon={StrategyIcon}>
          나의 전략
        </NavLinkItem>
      )}
      <NavLinkItem href={PATH.FAVORITES} icon={FavoriteIcon}>
        구독한 전략
      </NavLinkItem>
      <NavLinkItem href={PATH.MY_QUESTIONS} icon={QuestionIcon}>
        문의 내역
      </NavLinkItem>
    </SideNavigation>
  )
}

export default DashboardNavigation
