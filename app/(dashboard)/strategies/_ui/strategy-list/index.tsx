'use client'

import { useRouter, useSearchParams } from 'next/navigation'

import classNames from 'classnames/bind'

import { useMSWStore } from '@/shared/stores/msw'
import Pagination from '@/shared/ui/pagination'

import StrategiesItem from '../../../../(dashboard)/_ui/strategies-item'
import useGetStrategiesData from '../../_hooks/query/use-get-strategies-data'
import ListHeader from '../list-header'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const COUNT_PER_PAGE = 8

const StrategyList = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const isReady = useMSWStore((state) => state.isReady)
  const page = parseInt(searchParams?.get('page') || '1')

  const { data } = useGetStrategiesData({ isReady, page, size: COUNT_PER_PAGE })

  const strategiesData = data?.strategiesData || []
  const totalCount = data?.totalCount || 0

  const handlePageChange = (page: number) => {
    router.push(`/strategies?page=${page}&size=${COUNT_PER_PAGE}`)
  }
  return (
    <>
      <ListHeader />
      {strategiesData?.map((strategy) => (
        <StrategiesItem key={strategy.strategyId} strategiesData={strategy} />
      ))}
      <div className={cx('pagination')}>
        {totalCount && (
          <Pagination
            currentPage={page}
            maxPage={Math.ceil(totalCount / COUNT_PER_PAGE)}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </>
  )
}

export default StrategyList
