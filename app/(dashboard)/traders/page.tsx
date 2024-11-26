'use client'

import { useState } from 'react'

import styles from '@/app/(dashboard)/traders/page.module.scss'
import classNames from 'classnames/bind'

import { DropdownValueType } from '@/shared/ui/dropdown/types'
import Pagination from '@/shared/ui/pagination'
import { SearchInput } from '@/shared/ui/search-input'
import Select from '@/shared/ui/select'
import Title from '@/shared/ui/title'
import TradersListCard from '@/shared/ui/traders-list-card'

const cx = classNames.bind(styles)

// 임시데이터
const tradersData = [
  {
    nickname: '김트레이더',
    strategyCount: 12,
    subscriberCount: 345,
    traderId: '123456',
  },
  {
    nickname: '박트레이더',
    strategyCount: 8,
    subscriberCount: 120,
    traderId: '234567',
  },
  {
    nickname: '이트레이더',
    strategyCount: 15,
    subscriberCount: 289,
    traderId: '345678',
  },
  {
    nickname: '최트레이더',
    strategyCount: 5,
    subscriberCount: 87,
    traderId: '456789',
  },
  {
    nickname: '정트레이더',
    strategyCount: 20,
    subscriberCount: 512,
    traderId: '567890',
  },
  {
    nickname: '조트레이더',
    strategyCount: 10,
    subscriberCount: 200,
    traderId: '678901',
  },
  {
    nickname: '한트레이더',
    strategyCount: 18,
    subscriberCount: 467,
    traderId: '789012',
  },
  {
    nickname: '장트레이더',
    strategyCount: 7,
    subscriberCount: 134,
    traderId: '890123',
  },
  {
    nickname: '유트레이더',
    strategyCount: 3,
    subscriberCount: 56,
    traderId: '901234',
  },
  {
    nickname: '홍트레이더',
    strategyCount: 22,
    subscriberCount: 600,
    traderId: '012345',
  },
  {
    nickname: '서트레이더',
    strategyCount: 4,
    subscriberCount: 75,
    traderId: '123457',
  },
  {
    nickname: '신트레이더',
    strategyCount: 9,
    subscriberCount: 300,
    traderId: '234568',
  },
]

const TradersPage = () => {
  const initialValue = null
  const [value, setValue] = useState<DropdownValueType>(initialValue)
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
              {
                value: '1+',
                label: '인기순',
              },
              {
                value: '2+',
                label: '추천순',
              },
              {
                value: '3+',
                label: '구독순',
              },
            ]}
          ></Select>
          <SearchInput />
        </div>
        <div className={cx('traders-list-wrapper')}>
          {tradersData.map((trader) => (
            <TradersListCard
              key={trader.traderId}
              nickname={trader.nickname}
              strategyCount={trader.strategyCount}
              subscriberCount={trader.subscriberCount}
              traderId={trader.traderId}
            />
          ))}
        </div>
        {/* TODO: 실제 데이터로 변경 */}
        <div className={cx('pagination-wrapper')}>
          <Pagination currentPage={1} maxPage={10} onPageChange={(page: number) => {}}></Pagination>
        </div>
      </div>
    </>
  )
}

export default TradersPage
