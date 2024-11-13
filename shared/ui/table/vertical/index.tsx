import classNames from 'classnames/bind'

import { DailyAnalysisModel, MonthlyAnalysisModel } from '@/shared/types/strategy-details-data'

import styles from './vertical.module.scss'

const cx = classNames.bind(styles)

type TableBodyDataType = DailyAnalysisModel | MonthlyAnalysisModel

interface Props {
  tableHead: string[]
  tableBody: TableBodyDataType[]
  countPerPage: number
  currentPage: number
}

const VerticalTable = ({ tableHead, tableBody, countPerPage, currentPage }: Props) => {
  const croppedTableBody = tableBody.slice(
    countPerPage * (currentPage - 1),
    countPerPage * (currentPage - 1) + countPerPage
  )

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
        <tbody>
          {croppedTableBody.map((row) => (
            <tr key={Object.values(row)[0]}>
              {Object.entries(row).map((rowData, idx) => (
                <td key={idx}>{rowData[1]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default VerticalTable
