'use client'

// TODO: ssr
import { useState } from 'react'

import classNames from 'classnames/bind'

import Avatar from '@/shared/ui/avatar'
import Pagination from '@/shared/ui/pagination'
import { SearchInput } from '@/shared/ui/search-input'
import Select from '@/shared/ui/select'
import VerticalTable from '@/shared/ui/table/vertical'
import Tabs, { TabItemModel } from '@/shared/ui/tabs'
import Title from '@/shared/ui/title'

import AdminContentsHeader from '../_ui/admin-header'
import useAdminUsers from './_hooks/query/use-admin-users'
import useUserSearch from './_hooks/use-user-search'
import styles from './page.module.scss'

const cx = classNames.bind(styles)
const tabs: Array<TabItemModel> = [
  { label: '모든 회원', id: 'ALL' },
  { label: '일반', id: 'INVESTOR' },
  { label: '트레이더', id: 'TRADER' },
  { label: '관리자', id: 'ADMIN' },
]

const AdminUsersPage = () => {
  const { searchOptions } = useUserSearch()
  const [select, setSelect] = useState(searchOptions[0].value)
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const [keyword, setKeyword] = useState('')
  const { isLoading, data } = useAdminUsers({ role: activeTab, condition: select, keyword })

  if (isLoading || !data) return null

  console.log('data', data)

  const tableBody = data.content.map((data, idx) => [
    idx + 1,
    <Avatar src={data?.imageUrl ?? undefined} key={data.userId} />,
    data.userName,
    data.nickname,
    data.email,
    data.phone,
    data.role,
    <button key={data.userId}>123</button>,
  ])

  return (
    <>
      <Title label="회원 관리" className={cx('title')} />
      <section className={cx('container')}>
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <AdminContentsHeader
          // TODO: 실제 개수로 바인딩
          Left={
            <span>
              총 <span className={cx('color-primary-500')}>{data?.totalElements}</span>명
            </span>
          }
          Right={
            <div style={{ display: 'flex', gap: '24px' }}>
              <Select
                size="small"
                options={searchOptions.map((option) => ({
                  label: option.label,
                  value: option.value,
                }))}
                value={select}
                onChange={(v) => {
                  setSelect(v as string)
                }}
              />
              <SearchInput value={keyword} onChange={(e) => setKeyword(e.target.value)} />
            </div>
          }
        />
        <VerticalTable
          tableHead={['No.', '프로필', '이름', '닉네임', '이메일', '전화번호', '회원분류', '탈퇴']}
          tableBody={data?.content ? tableBody : []}
          countPerPage={10}
          currentPage={1}
        />
        {/* TODO: 실제 값으로 추가 */}
        <Pagination currentPage={1} maxPage={data?.totalPages} onPageChange={() => {}} />
      </section>
    </>
  )
}

export default AdminUsersPage
