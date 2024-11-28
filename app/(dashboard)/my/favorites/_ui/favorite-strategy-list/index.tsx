'use client'

import { useEffect } from 'react'

import { useRouter, useSearchParams } from 'next/navigation'

import ListHeader from '@/app/(dashboard)/_ui/list-header'
import StrategiesItem from '@/app/(dashboard)/_ui/strategies-item'
import classNames from 'classnames/bind'

import { PATH } from '@/shared/constants/path'
import Pagination from '@/shared/ui/pagination'

import useGetFavoriteStrategyList from '../../../_hooks/query/use-get-favorite-strategy-list'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const COUNT_PER_PAGE = 6

const FavoriteStrategyList = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const page = parseInt(searchParams?.get('page') || '1')

  const { data } = useGetFavoriteStrategyList({ page, size: COUNT_PER_PAGE })

  useEffect(() => {
    if (!searchParams.size) {
      router.push(`${PATH.FAVORITES}?page=1&size=${COUNT_PER_PAGE}`)
    }
  }, [searchParams])

  const strategiesData = data?.strategiesData || []
  const totalPages = data?.totalPages || null

  const handlePageChange = (page: number) => {
    router.push(`${PATH.FAVORITES}?page=${page}&size=${COUNT_PER_PAGE}`)
  }

  return (
    <>
      <ListHeader />
      <div className={cx('pagination')}>
        {strategiesData?.map((strategy) => (
          <StrategiesItem key={strategy.strategyId} strategiesData={strategy} />
        ))}
        {totalPages && (
          <Pagination currentPage={page} maxPage={totalPages} onPageChange={handlePageChange} />
        )}
      </div>
    </>
  )
}

export default FavoriteStrategyList
