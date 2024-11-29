'use client'

import { useMSWStore } from '@/shared/stores/msw'
import BackHeader from '@/shared/ui/header/back-header'
import Title from '@/shared/ui/title'

import DetailsInformation from '../../_ui/details-information'
import DetailsSideItem, { InformationModel, TitleType } from '../../_ui/details-side-item'
import SideContainer from '../_ui/side-container'
import useGetDetailsInformationData from './_hooks/query/use-get-details-information-data'
import AnalysisContainer from './_ui/analysis-container'
import ReviewContainer from './_ui/review-container'
import SubscriberItem from './_ui/subscriber-item'

export type InformationType = { title: TitleType; data: string | number } | InformationModel[]

const StrategyDetailPage = ({ params }: { params: { strategyId: string } }) => {
  const isReady = useMSWStore((state) => state.isReady)
  const { data } = useGetDetailsInformationData({
    isReady,
    strategyId: params.strategyId,
  })

  const { detailsSideData, detailsInformationData } = data || {}

  const hasDetailsSideData = detailsSideData?.map((data) => {
    if (!Array.isArray(data)) return data.data !== undefined
  })

  return (
    <div>
      <BackHeader label={'목록으로 돌아가기'} />
      <Title label={'전략 상세보기'} />
      {detailsInformationData && <DetailsInformation information={detailsInformationData} />}
      <AnalysisContainer />
      <ReviewContainer strategyId={params.strategyId} />
      <SideContainer isFixed={true}>
        <SubscriberItem subscribers={99} />
        {hasDetailsSideData?.[0] &&
          detailsSideData?.map((data, idx) => (
            <div key={`${data}_${idx}`}>
              <DetailsSideItem information={data} />
            </div>
          ))}
      </SideContainer>
    </div>
  )
}
export default StrategyDetailPage
