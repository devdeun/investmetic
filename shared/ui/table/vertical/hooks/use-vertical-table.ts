import { VerticalTableProps } from '..'

type ArgsType = Pick<VerticalTableProps, 'tableBody' | 'countPerPage' | 'currentPage'>

const useVerticalTable = ({ tableBody, countPerPage, currentPage }: ArgsType) => {
  const hasData = tableBody.length > 0

  const croppedTableBody = tableBody.slice(
    countPerPage * (currentPage - 1),
    countPerPage * (currentPage - 1) + countPerPage
  )

  return {
    hasData,
    croppedTableBody,
  }
}

export default useVerticalTable
