'use client'

import classNames from 'classnames/bind'

import Pagination from '@/shared/ui/pagination'
import { SearchInput } from '@/shared/ui/search-input'
import VerticalTable from '@/shared/ui/table/vertical'
import Tabs from '@/shared/ui/tabs'
import Title from '@/shared/ui/title'

import AdminContentsHeader from '../_ui/admin-header'
import AdminPostButton from '../_ui/admin-post-button'
import usePatchStrategyApproval from './_hooks/query/use-patch-strategy-approval'
import useStrategiesData from './_hooks/query/use-strategies-data'
import useAdminStrategiesPage from './_hooks/use-admin-strategies-page'
import styles from './page.module.scss'

const cx = classNames.bind(styles)

const AdminStrategyPage = () => {
  const { tabs, activeTab, setActiveTab, inputValue, setInputValue } = useAdminStrategiesPage()

  const { data } = useStrategiesData()
  const { mutate } = usePatchStrategyApproval(1, false)

  return (
    <>
      <Title label="전략 관리" className={cx('title')} />
      <section className={cx('container')}>
        <AdminPostButton label="전략 등록하기" pathname="strategies" />
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <AdminContentsHeader
          Left={
            <span>
              총 <span className={cx('color-primary-500')}>{3}</span>명
            </span>
          }
          Right={
            <div>
              <SearchInput
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                // onSearchIconClick={setInputValue}
              />
            </div>
          }
          className={cx('header')}
        />
        <VerticalTable
          tableHead={['No.', '날짜', '전략명', '닉네임', '공개여부', '승인여부', '']}
          tableBody={
            // data?.content ? setTableBody(data.content) :
            [[1, '2024.09.15', 'wjsfiraud', 'nkick', true, true, 'buttons']]
          }
          countPerPage={10}
          currentPage={1}
        />
        <Pagination currentPage={1} maxPage={3} onPageChange={() => {}} />
      </section>
    </>
  )
}

export default AdminStrategyPage
