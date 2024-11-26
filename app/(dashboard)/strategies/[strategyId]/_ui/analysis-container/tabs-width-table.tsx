'use client'

import { useEffect, useState } from 'react'
import React from 'react'

import { DailyGraphIcon, MoneyIcon, MonthlyGraphIcon, StatisticsIcon } from '@/public/icons'
import classNames from 'classnames/bind'

import { Button } from '@/shared/ui/button'
import Pagination from '@/shared/ui/pagination'
import StatisticsTable from '@/shared/ui/table/statistics'
import VerticalTable from '@/shared/ui/table/vertical'
import Tabs from '@/shared/ui/tabs'

import AccountImages from './account-images'
import { statisticsData, tableBody } from './example'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const DAILY_TABLE_HEADER = [
  '날짜',
  '원금',
  '입출금',
  '일 손익',
  '일 손익률',
  '누적 손익',
  '누적 수익률',
]

const MONTHLY_TABLE_HEADER = [
  '날짜',
  '원금',
  '입출금',
  '월 손익',
  '월 손익률',
  '누적 손익',
  '누적 수익률',
]

const TabsWithTable = () => {
  const [activeTab, setActiveTab] = useState('statistics')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setCurrentPage(1)
  }, [activeTab])

  const handlePageChange = (page: number) => setCurrentPage(page)

  const statisticsDataToArray = Object.entries(statisticsData)

  const TABS = [
    {
      id: 'statistics',
      label: '통계',
      icon: StatisticsIcon,
      content: (
        <div className={cx('table-wrapper')}>
          {statisticsDataToArray.map((statistics) => (
            <StatisticsTable
              key={statistics[0]}
              title={statistics[0]}
              statisticsData={statistics[1]}
            />
          ))}
        </div>
      ),
    },
    {
      id: 'daily-analysis',
      label: '일간분석',
      icon: DailyGraphIcon,
      content: (
        <div className={cx('table-wrapper', 'analysis')}>
          <Button size="small" className={cx('excel-button')} variant="filled">
            엑셀 다운받기
          </Button>
          <VerticalTable
            tableHead={DAILY_TABLE_HEADER}
            tableBody={tableBody}
            currentPage={currentPage}
            countPerPage={5}
          />
          <Pagination
            currentPage={currentPage}
            maxPage={Math.ceil(tableBody.length / 5)}
            onPageChange={handlePageChange}
          />
        </div>
      ),
    },
    {
      id: 'monthly-analysis',
      label: '월간분석',
      icon: MonthlyGraphIcon,
      content: (
        <div className={cx('table-wrapper', 'analysis')}>
          <Button size="small" className={cx('excel-button')} variant="filled">
            엑셀 다운받기
          </Button>
          <VerticalTable
            tableHead={MONTHLY_TABLE_HEADER}
            tableBody={tableBody}
            currentPage={currentPage}
            countPerPage={5}
          />
          <Pagination
            currentPage={currentPage}
            maxPage={Math.ceil(tableBody.length / 5)}
            onPageChange={handlePageChange}
          />
        </div>
      ),
    },
    {
      id: 'account-images',
      label: '실거래계좌',
      icon: MoneyIcon,
      content: (
        <div className={cx('table-wrapper')}>
          <AccountImages imagesData={[]} currentPage={currentPage} />
        </div>
      ),
    },
  ]

  return <Tabs tabs={TABS} activeTab={activeTab} onTabChange={(id) => setActiveTab(id)} />
}

export default TabsWithTable
