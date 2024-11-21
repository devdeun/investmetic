'use client'

import DetailsSideItem, {
  InformationModel,
  TitleType,
} from '@/app/(dashboard)/strategies/[strategyId]/_ui/details-side-item'
import useGetDetailsInformationData from '@/app/(dashboard)/strategies/_hooks/_query/use-get-details-information-data'
import SideContainer from '@/app/(dashboard)/strategies/_ui/side-container'

import { useMSWStore } from '@/shared/stores/msw'
import BackHeader from '@/shared/ui/header/back-header'
import Title from '@/shared/ui/title'

export type InformationType = { title: TitleType; data: string | number } | InformationModel[]

const StrategyDetailPage = ({ params }: { params: { strategyId: string } }) => {
  const isReady = useMSWStore((state) => state.isReady)
  const { data: detailsSideData } = useGetDetailsInformationData({
    isReady,
    strategyId: params.strategyId,
  })

  const hasDetailsSideData = detailsSideData?.map((data) => {
    if (!Array.isArray(data)) return data.data !== undefined
  })

  return (
    <div>
      <BackHeader label={'목록으로 돌아가기'} />
      <Title label={'전략 상세보기'} />
      <SideContainer>
        {hasDetailsSideData?.[0] &&
          detailsSideData?.map((data, idx) => (
            <div key={idx}>
              <DetailsSideItem information={data} />
            </div>
          ))}
      </SideContainer>
    </div>
  )
}
export default StrategyDetailPage
