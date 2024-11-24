'use client'

// TODO: ssr
import { useState } from 'react'

import classNames from 'classnames/bind'

import Pagination from '@/shared/ui/pagination'
import { SearchInput } from '@/shared/ui/search-input'
import Select from '@/shared/ui/select'
import VerticalTable from '@/shared/ui/table/vertical'
import Tabs from '@/shared/ui/tabs'
import Title from '@/shared/ui/title'

import AdminContentsHeader from '../_ui/admin-header'
import styles from './page.module.scss'

const cx = classNames.bind(styles)

const tabs = ['모든 회원', '일반', '트레이더', '관리자']

const AdminUsersPage = () => {
  const [select, setSelect] = useState(tabs[0])
  return (
    <>
      {/* TODO: inline css 제거 */}
      <Title label="회원 관리" style={{ margin: '80px 0 26px 12.6px' }} />
      <div
        style={{
          padding: '0 45px 37px',
          borderRadius: '8px',
          marginBottom: '42px',
          backgroundColor: 'aliceblue',
        }}
      >
        <Tabs
          tabs={tabs.map((tab) => ({
            id: tab,
            label: tab,
          }))}
          activeTab={tabs[0]}
          onTabChange={(id) => alert(id)}
        />
        <AdminContentsHeader
          // TODO: 실제 개수로 바인딩
          Left={
            <span>
              총 <span className={cx('color-primary-500')}>30</span>명
            </span>
          }
          Right={
            <div style={{ display: 'flex', gap: '24px' }}>
              <Select
                size="small"
                options={tabs.map((tab) => ({
                  label: tab,
                  value: tab,
                }))}
                value={select}
                onChange={(v) => {
                  setSelect(v as string)
                }}
              />
              <SearchInput />
            </div>
          }
        />
        <VerticalTable
          tableHead={['No.', '프로필', '이름', '닉네임', '이메일', '전화번호', '회원분류', '탈퇴']}
          tableBody={[]}
          countPerPage={10}
          currentPage={1}
        />
        {/* TODO: 실제 값으로 추가 */}
        <Pagination currentPage={1} maxPage={3} onPageChange={() => {}} />
      </div>
    </>
  )
}

export default AdminUsersPage
