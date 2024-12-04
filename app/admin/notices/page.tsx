'use client'

// TODO: ssr
import classNames from 'classnames/bind'

import Pagination from '@/shared/ui/pagination'
import { SearchInput } from '@/shared/ui/search-input'
import VerticalTable from '@/shared/ui/table/vertical'
import Title from '@/shared/ui/title'

import AdminContentsHeader from '../_ui/admin-header'
import styles from './page.module.scss'

const cx = classNames.bind(styles)

const AdminNoticesPage = () => {
  return (
    <>
      {/* TODO: inline css 제거 */}
      <Title label="공지사항" style={{ margin: '80px 0 26px 12.6px' }} />
      <div
        style={{
          padding: '0 45px 37px',
          borderRadius: '8px',
          marginBottom: '42px',
          backgroundColor: 'aliceblue',
        }}
      >
        <AdminContentsHeader
          // TODO: 실제 개수로 바인딩
          Left={
            <span>
              총 <span className={cx('color-primary-500')}>30</span>명
            </span>
          }
          Right={<SearchInput />}
        />
        <VerticalTable
          tableHead={['No.', '제목', '등록일', '작성일', '']}
          tableBody={
            []
            //   TABLE_DATA.map((d) => ({
            //   ...d,
            //   content: (
            //     <Button.ButtonGroup>
            //       {/* TODO: onclick 로직 정의 */}
            //       <Button size="small" onClick={() => {}}>
            //         수정
            //       </Button>
            //       <Button size="small" onClick={() => {}} variant="filled">
            //         삭제
            //       </Button>
            //     </Button.ButtonGroup>
            //   ),
            // }))
          }
          // TODO: 실제 값으로 추가
          countPerPage={10}
          currentPage={1}
        />
        {/* TODO: 실제 값으로 추가 */}
        <Pagination currentPage={1} maxPage={3} onPageChange={() => {}} />
      </div>
    </>
  )
}

export default AdminNoticesPage
