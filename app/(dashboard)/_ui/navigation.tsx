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
import LinkItem from '@/shared/ui/side-navigation/link-item'

const DashboardNavigation = () => {
  const user = fetchUser()
  const isTrader = user.role.includes('trader')

  return (
    <SideNavigation>
      <LinkItem href={PATH.STRATEGIES} icon={StrategyRankingIcon}>
        전략 랭킹
      </LinkItem>
      <LinkItem href={PATH.TRADERS} icon={TradersIcon}>
        트레이더 목록
      </LinkItem>
      {isTrader && (
        <LinkItem href={PATH.MY_STRATEGIES} icon={StrategyIcon}>
          나의 전략
        </LinkItem>
      )}
      <LinkItem href={PATH.FAVORITES} icon={FavoriteIcon}>
        구독한 전략
      </LinkItem>
      <LinkItem href={PATH.MY_QUESTIONS} icon={QuestionIcon}>
        문의 내역
      </LinkItem>
    </SideNavigation>
  )
}

export default DashboardNavigation
