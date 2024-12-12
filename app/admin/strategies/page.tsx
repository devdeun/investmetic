'use client'

import classNames from 'classnames/bind'

import Pagination from '@/shared/ui/pagination'
import SearchInput from '@/shared/ui/search-input'
import VerticalTable from '@/shared/ui/table/vertical'
import Tabs from '@/shared/ui/tabs'
import Title from '@/shared/ui/title'

import AdminContentsHeader from '../_ui/admin-header'
import setAdminStrategiesTableBody from './_api/set-admin-strategies-table-body'
import useStrategiesData from './_hooks/query/use-strategies-data'
import useAdminStrategiesPage from './_hooks/use-admin-strategies-page'
import AdminStrategyPostButton from './_ui/admin-strategies-post-button'
import styles from './page.module.scss'

const cx = classNames.bind(styles)

const AdminStrategyPage = () => {
  const {
    tabs,
    activeTab,
    keyword,
    setKeyword,
    searchParams,
    searchWithKeyword,
    onTabChange,
    setCurrentPage,
  } = useAdminStrategiesPage()

  const { data, isLoading } = useStrategiesData({
    ...searchParams,
    isApproved: activeTab === 'ALL' ? undefined : 'PENDING',
  })

  if (!data || isLoading) return null

  return (
    <>
      <Title label="전략 관리" className={cx('title')} />
      <section className={cx('container')}>
        <AdminStrategyPostButton />
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
        <AdminContentsHeader
          Left={
            <span>
              총 <span className={cx('color-primary-500')}>{data.totalElements}</span>명
            </span>
          }
          Right={
            <div>
              <SearchInput
                value={keyword}
                placeholder="전략명을 입력하세요."
                onChange={(e) => setKeyword(e.target.value)}
                onSearchIconClick={searchWithKeyword}
              />
            </div>
          }
          className={cx('header')}
        />
        <VerticalTable
          tableHead={['No.', '날짜', '전략명', '닉네임', '공개여부', '승인여부', '']}
          tableBody={setAdminStrategiesTableBody(data.content)}
          countPerPage={data.size}
          currentPage={1}
        />
        <Pagination
          currentPage={data.page}
          maxPage={data.totalPages}
          onPageChange={setCurrentPage}
        />
      </section>
    </>
  )
}

export default AdminStrategyPage
