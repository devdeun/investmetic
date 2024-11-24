// import { TABLE_DATA } from '@/app/admin/notices/tabledata'
import { ReactNode } from 'react'

import classNames from 'classnames/bind'

import { DailyAnalysisModel, MonthlyAnalysisModel } from '@/shared/types/strategy-details-data'

import useVerticalTable from './hooks/use-vertical-table'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

type TableBodyDataType =
  | DailyAnalysisModel
  | MonthlyAnalysisModel
  | Array<ReactNode | string | number>

export interface VerticalTableProps {
  tableHead: string[]
  tableBody: TableBodyDataType[]
  countPerPage: number
  currentPage: number
}

const VerticalTable = ({ tableHead, tableBody, countPerPage, currentPage }: VerticalTableProps) => {
  const { hasData, croppedTableBody } = useVerticalTable({ tableBody, countPerPage, currentPage })

  return (
    <div className={cx('container')}>
      <table>
        <thead>
          <tr>
            {tableHead.map((head) => (
              <td key={head}>{head}</td>
            ))}
          </tr>
        </thead>
        {hasData && (
          <tbody>
            {croppedTableBody.map((row) => (
              <tr key={Object.values(row)[0]}>
                {Object.values(row).map((data, idx) => (
                  <td key={data + idx}>{data}</td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {!hasData && (
        <div className={cx('no-data')} style={{ height: `calc(40px * ${countPerPage}` }}>
          데이터가 존재하지 않습니다.
        </div>
      )}
    </div>
  )
}

export default VerticalTable
