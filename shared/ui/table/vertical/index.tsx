'use client'

import { ReactNode, useState } from 'react'

import { useMyAnalysisMutation } from '@/app/(dashboard)/my/_hooks/query/use-manage-daily-analysis'
import { NoticeListContentModel } from '@/app/(landing)/notices/_ui/notice-table'
import classNames from 'classnames/bind'

import useModal from '@/shared/hooks/custom/use-modal'
import {
  DailyAnalysisModel,
  MonthlyAnalysisModel,
  MyDailyAnalysisModel,
} from '@/shared/types/strategy-data'
import { Button } from '@/shared/ui/button'
import { formatNumber } from '@/shared/utils/format'
import sliceArray from '@/shared/utils/slice-array'

import EditAnalysisModal from '../../modal/edit-daily-analysis-modal.ts'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

type TableBodyDataType =
  | DailyAnalysisModel
  | MyDailyAnalysisModel
  | MonthlyAnalysisModel
  | NoticeListContentModel
  | Array<ReactNode | string | number>

export interface VerticalTableProps {
  tableHead: string[]
  tableBody: TableBodyDataType[]
  countPerPage: number
  currentPage: number
  isEditable?: boolean
  className?: string
  strategyId?: number
}

const isMyAnalysisData = (data: TableBodyDataType): data is MyDailyAnalysisModel => {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return false

  return (
    'dailyAnalysisId' in data &&
    'dailyDate' in data &&
    'transaction' in data &&
    'dailyProfitLoss' in data &&
    'principal' in data
  )
}

const VerticalTable = ({
  tableHead,
  tableBody,
  countPerPage,
  currentPage,
  isEditable = false,
  className,
  strategyId,
}: VerticalTableProps) => {
  const hasData = tableBody.length > 0
  const slicedTableBody = sliceArray(tableBody, countPerPage, currentPage)
  const { isModalOpen, openModal, closeModal } = useModal()
  const [selectedAnalysis, setSelectedAnalysis] = useState<MyDailyAnalysisModel | null>(null)

  const { deleteAnalysisData } = useMyAnalysisMutation(strategyId ?? 0, currentPage, countPerPage)

  const handleDelete = async (dailyAnalysisId: number) => {
    if (!strategyId) return
    if (window.confirm('해당 데이터를 삭제하시겠습니까?')) {
      try {
        await deleteAnalysisData(dailyAnalysisId)
      } catch (error) {
        console.error('Delete failed:', error)
        alert('삭제 중 오류가 발생했습니다.')
      }
    }
  }

  const handleEditClick = (row: TableBodyDataType) => {
    if (!isMyAnalysisData(row)) {
      return
    }
    setSelectedAnalysis(row)
    openModal()
  }

  const handleCloseModal = () => {
    closeModal()
    setSelectedAnalysis(null)
  }

  return (
    <>
      <div className={cx('container', className)}>
        <table>
          <thead>
            <tr>
              {tableHead.map((head) => (
                <td key={head}>{head}</td>
              ))}
              {isEditable && <td></td>}
            </tr>
          </thead>
          {hasData && (
            <tbody>
              {slicedTableBody.map((row) => (
                <tr key={Object.values(row)[0]}>
                  {Object.values(row)
                    .slice(isEditable ? 1 : 0)
                    .map((data, idx) => (
                      <td key={data + idx}>{formatNumber(data)}</td>
                    ))}
                  {isEditable && (
                    <td className={cx('button-container')}>
                      <Button
                        size="small"
                        variant="outline"
                        className={cx('edit-button')}
                        onClick={() => handleEditClick(row)}
                      >
                        수정
                      </Button>
                      <Button
                        size="small"
                        variant="filled"
                        className={cx('delete-button')}
                        onClick={() => {
                          if (!isMyAnalysisData(row)) return
                          handleDelete(row.dailyAnalysisId)
                        }}
                      >
                        삭제
                      </Button>
                    </td>
                  )}
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

      {selectedAnalysis && (
        <EditAnalysisModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          strategyId={strategyId ?? 0}
          analysisId={selectedAnalysis.dailyAnalysisId}
          initialData={{
            date: selectedAnalysis.dailyDate,
            transaction: selectedAnalysis.transaction,
            dailyProfitLoss: selectedAnalysis.dailyProfitLoss,
          }}
          page={currentPage}
          size={countPerPage}
        />
      )}
    </>
  )
}

const Skeleton = ({ tableHead, countPerPage, isEditable = false }: Partial<VerticalTableProps>) => {
  return (
    <div className={cx('container')}>
      <table>
        <thead>
          <tr>
            {tableHead?.map((head) => <td key={head}>{head}</td>)}
            {isEditable && <td>관리</td>}
          </tr>
        </thead>
      </table>
      <div className={cx('no-data')} style={{ height: `calc(40px * ${countPerPage}` }} />
    </div>
  )
}

VerticalTable.Skeleton = Skeleton

export default VerticalTable
