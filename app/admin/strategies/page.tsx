import usePatchStrategyApproval from './_hooks/query/use-patch-strategy-approval'
import useStrategiesData from './_hooks/query/use-strategies-data'

const AdminStrategyPage = () => {
  const { data } = useStrategiesData()
  const { mutate } = usePatchStrategyApproval(1, false)

  return <></>
}

export default AdminStrategyPage
