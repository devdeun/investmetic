'use client'

import { useEffect } from 'react'

import { useRouter, useSearchParams } from 'next/navigation'

import ListHeader from '@/app/(dashboard)/_ui/list-header'
import StrategiesItem from '@/app/(dashboard)/_ui/strategies-item'
import classNames from 'classnames/bind'

import { useMSWStore } from '@/shared/stores/msw'
import Pagination from '@/shared/ui/pagination'

import useGetStrategiesData from '../../_hooks/query/use-get-strategies-data'
import styles from './styles.module.scss'

/* eslint-disable react-hooks/exhaustive-deps */

const cx = classNames.bind(styles)

const COUNT_PER_PAGE = 8

const StrategyList = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const isReady = useMSWStore((state) => state.isReady)
  const page = parseInt(searchParams?.get('page') || '1')

  const { data } = useGetStrategiesData({ isReady, page, size: COUNT_PER_PAGE })

  useEffect(() => {
    if (!searchParams.size) {
      router.push(`/strategies?page=1&size=${COUNT_PER_PAGE}`)
    }
  }, [searchParams])

  const strategiesData = data?.strategiesData || []
  const totalCount = data?.totalCount || null

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
