'use client'

import { useState } from 'react'

import styles from '@/app/(dashboard)/traders/page.module.scss'
import { COUNT_PER_PAGE } from '@/app/admin/category/_ui/shared/manage-table/constant'
import classNames from 'classnames/bind'

import { PATH } from '@/shared/constants/path'
import { usePagination } from '@/shared/hooks/custom/use-pagination'
import { DropdownValueType } from '@/shared/ui/dropdown/types'
import Pagination from '@/shared/ui/pagination'
import { SearchInput } from '@/shared/ui/search-input'
import Select from '@/shared/ui/select'
import Title from '@/shared/ui/title'
import TradersListCard from '@/shared/ui/traders-list-card'

import useGetTraders from './_hooks/use-get-traders'

const cx = classNames.bind(styles)

const TradersPage = () => {
  const initialValue = null
  const [value, setValue] = useState<DropdownValueType>(initialValue)
  const { page, handlePageChange } = usePagination({
    basePath: PATH.TRADERS,
    pageSize: COUNT_PER_PAGE,
  })

  const { data: traders } = useGetTraders({
    page: 1,
    size: 12,
    keyword: '영웅',
    orderBy: 'STRATEGY_TOTAL',
  })

  if (!traders) {
    return null
  }

  return (
    <>
      <div className={cx('page-container')}>
        <div className={cx('title')}>
          <Title label={'트레이더 목록'} marginLeft={'13px'}></Title>
        </div>
        <div className={cx('search-wrapper')}>
          <Select
            size="small"
            value={value}
            placeholder="구독순"
            onChange={(newValue) => setValue(newValue)}
            options={[
              { value: 'STRATEGY_TOTAL', label: '전략순' },
              { value: 'SUBSCRIBE_TOTAL', label: '구독순' },
            ]}
          ></Select>
          <SearchInput />
        </div>
        <div className={cx('traders-list-wrapper')}>
          {/* {traders?.result?.content?.map((trader) => (
            <TradersListCard
              key={trader?.userId}
              imageUrl={trader?.imageUrl}
              nickname={trader?.nickname}
              strategyCount={trader?.strategyCount}
              subscriberCount={trader?.totalSubCount}
              userId={trader?.userId}
            />
          ))} */}
        </div>

        <div className={cx('pagination-wrapper')}>
          <Pagination
            currentPage={page}
            maxPage={traders.totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  )
}

export default TradersPage
