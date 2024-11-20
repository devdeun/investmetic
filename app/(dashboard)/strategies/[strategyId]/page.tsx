import DetailsSideItem, {
  TitleType,
} from '@/app/(dashboard)/strategies/[strategyId]/_ui/details-side-item'

const StrategyDetailPage = () => {
  const arr1: { title: TitleType; data: string | number }[] = [
    { title: '최종손익입력일자', data: '2016.04.30' },
    { title: '등록일', data: '2016.02.30' },
  ]
  const arr2: { title: TitleType; data: string | number }[] = [
    { title: '최종손익입력일자', data: '2016.04.30' },
    { title: '등록일', data: '2016.02.30' },
  ]
  const trader: { title: TitleType; data: string | number } = { title: '트레이더', data: '수밍' }
  const arr = [trader, arr1, arr2]
  return (
    <>
      {arr.map((i, idx) => (
        <div key={idx}>
          <DetailsSideItem information={i} />
        </div>
      ))}
    </>
  )
}

export default StrategyDetailPage
