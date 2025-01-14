import withSuspense from '@/shared/utils/with-suspense'

import ManageTable from '../../../shared/manage-table'
import setAdminTradeManageTableData from '../_api/set-admin-trade-manage-table-data'
import useTradeData from '../_hooks/query/use-trades-data'

const InactiveTradeManageTable = () => {
  const { data } = useTradeData('inactive')
  if (!data) return null

  const tableData = setAdminTradeManageTableData(data, false)

  return <ManageTable data={tableData} domain="매매 유형" />
}

export default InactiveTradeManageTable
