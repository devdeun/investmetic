'use client'

import { useMSWStore } from '@/shared/stores/msw'
import BackHeader from '@/shared/ui/header/back-header'
import Title from '@/shared/ui/title'

import useGetDetailsInformationData from '../_hooks/query/use-get-details-information-data'
import SideContainer from '../_ui/side-container'
import DetailsSideItem, { InformationModel, TitleType } from './_ui/details-side-item'

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
          detailsSideData?.map((data) => (
            <div key={data.toString()}>
              <DetailsSideItem information={data} />
            </div>
          ))}
      </SideContainer>
    </div>
  )
}
export default StrategyDetailPage
