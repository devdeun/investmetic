import classNames from 'classnames/bind'

import { DailyAnalysisModel, MonthlyAnalysisModel } from '@/shared/types/strategy-details-data'
import { Button } from '@/shared/ui/button'
import Pagination from '@/shared/ui/pagination'
import VerticalTable from '@/shared/ui/table/vertical'

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

const COUNT_PER_PAGE = 5

interface AnalysisContentProps {
  type: 'daily' | 'monthly'
  analysisData: DailyAnalysisModel[] | MonthlyAnalysisModel[]
  currentPage: number
  onPageChange: (page: number) => void
}

const AnalysisContent = ({
  type,
  analysisData,
  currentPage,
  onPageChange,
}: AnalysisContentProps) => {
  const tableHeader = type === 'daily' ? DAILY_TABLE_HEADER : MONTHLY_TABLE_HEADER

  return (
    <div className={cx('table-wrapper', 'analysis')}>
      <Button size="small" className={cx('excel-button')} variant="filled">
        엑셀 다운받기
      </Button>
      <VerticalTable
        tableHead={tableHeader}
        tableBody={analysisData}
        currentPage={currentPage}
        countPerPage={COUNT_PER_PAGE}
      />
      <Pagination
        currentPage={currentPage}
        maxPage={Math.ceil(analysisData.length / 5)}
        onPageChange={onPageChange}
      />
    </div>
  )
}

export default AnalysisContent
