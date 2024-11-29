import classNames from 'classnames/bind'

import { DailyAnalysisModel, MonthlyAnalysisModel } from '@/shared/types/strategy-details-data'
import { Button } from '@/shared/ui/button'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

type TableBodyDataType = DailyAnalysisModel | MonthlyAnalysisModel

interface Props {
  tableHead: string[]
  tableBody: TableBodyDataType[]
  countPerPage: number
  currentPage: number
  isEditable?: boolean
}

const VerticalTable = ({
  tableHead,
  tableBody,
  countPerPage,
  currentPage,
  isEditable = false,
}: Props) => {
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
            {isEditable && <td></td>}
          </tr>
        </thead>
        <tbody>
          {croppedTableBody.map((row) => (
            <tr key={Object.values(row)[0]}>
              {Object.entries(row).map((rowData, idx) => (
                <td key={idx}>{rowData[1]}</td>
              ))}
              {isEditable && (
                <td className={cx('button-container')}>
                  <Button size="small" variant="outline" className={cx('edit-button')}>
                    수정
                  </Button>
                  <Button size="small" variant="filled" className={cx('delete-button')}>
                    삭제
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default VerticalTable
