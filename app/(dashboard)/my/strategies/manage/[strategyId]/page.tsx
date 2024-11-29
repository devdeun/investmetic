'use client'

import DetailsInformation from '@/app/(dashboard)/_ui/details-information'
import DetailsSideItem, {
  InformationModel,
  TitleType,
} from '@/app/(dashboard)/_ui/details-side-item'
import useGetDetailsInformationData from '@/app/(dashboard)/strategies/[strategyId]/_hooks/query/use-get-details-information-data'
import AnalysisContainer from '@/app/(dashboard)/strategies/[strategyId]/_ui/analysis-container'
import SubscriberItem from '@/app/(dashboard)/strategies/[strategyId]/_ui/subscriber-item'
import SideContainer from '@/app/(dashboard)/strategies/_ui/side-container'
import classNames from 'classnames/bind'

import { useMSWStore } from '@/shared/stores/msw'
import BackHeader from '@/shared/ui/header/back-header'
import Title from '@/shared/ui/title'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

export type InformationType = { title: TitleType; data: string | number } | InformationModel[]

const StrategyManagePage = ({ params }: { params: { strategyId: string } }) => {
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
    <>
      <BackHeader label={'나의 전략으로 돌아가기'} />
      <Title label={'나의 전략 관리'} />
      <div className={cx('container')}>
        {detailsInformationData && (
          <DetailsInformation information={detailsInformationData} type="my" />
        )}
        <AnalysisContainer type="my" />
        <SideContainer hasButton={true} isFixed={true}>
          <SubscriberItem subscribers={99} />
          {hasDetailsSideData?.[0] &&
            detailsSideData?.map((data, idx) => (
              <div key={`${data}_${idx}`}>
                <DetailsSideItem information={data} />
              </div>
            ))}
        </SideContainer>
      </div>
    </>
  )
}
export default StrategyManagePage
