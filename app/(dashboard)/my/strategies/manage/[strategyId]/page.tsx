'use client'

import { useState } from 'react'

import AnalysisContainer from '@/app/(dashboard)/_ui/analysis-container'
import DetailsInformation from '@/app/(dashboard)/_ui/details-information'
import DetailsSideItem, {
  InformationModel,
  TitleType,
} from '@/app/(dashboard)/_ui/details-side-item'
import SubscriberItem from '@/app/(dashboard)/_ui/subscriber-item'
import useGetDetailsInformationData from '@/app/(dashboard)/strategies/[strategyId]/_hooks/query/use-get-details-information-data'
import SideContainer from '@/app/(dashboard)/strategies/_ui/side-container'
import classNames from 'classnames/bind'

import { Button } from '@/shared/ui/button'
import BackHeader from '@/shared/ui/header/back-header'
import Title from '@/shared/ui/title'

import usePostEditStrategy from '../../../_hooks/query/use-post-edit-strategy'
import useEditInformationStore from './_store/use-edit-information-store'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

export type InformationType = { title: TitleType; data: string | number } | InformationModel[]

const StrategyManagePage = ({ params }: { params: { strategyId: string } }) => {
  const [isEditable, setIsEditable] = useState(false)
  const strategyNumber = parseInt(params.strategyId)
  const { data: detailsInfoData, refetch } = useGetDetailsInformationData({
    strategyId: strategyNumber,
  })
  const { data: subscribeData } = useGetDetailsInformationData({
    strategyId: strategyNumber,
  })
  const { mutate } = usePostEditStrategy()

  const { detailsSideData, detailsInformationData } = detailsInfoData || {}
  const { detailsInformationData: subscribeInfo } = subscribeData || {}
  const hasDetailsSideData = detailsSideData?.map((data) => {
    if (!Array.isArray(data)) return data.data !== undefined
  })

  const handleUpdateInformation = () => {
    const editedInformation = useEditInformationStore.getState().information
    if (editedInformation.strategyName && editedInformation.description) {
      const information = {
        strategyName: editedInformation.strategyName,
        description: editedInformation.description,
        proposalModified: false,
      }
      mutate(
        { strategyId: strategyNumber, information },
        {
          onSuccess: () => {
            setIsEditable(false)
            refetch()
          },
        }
      )
    }
  }

  return (
    <div className={cx('container')}>
      <BackHeader label={'나의 전략으로 돌아가기'} />
      <div className={cx('header')}>
        <Title label={'나의 전략 관리'} />
        {isEditable ? (
          <Button
            onClick={handleUpdateInformation}
            size="small"
            variant="filled"
            className={cx('edit-button')}
          >
            저장하기
          </Button>
        ) : (
          <Button
            onClick={() => setIsEditable(!isEditable)}
            size="small"
            variant="filled"
            className={cx('edit-button')}
          >
            정보 수정하기
          </Button>
        )}
      </div>
      <div className={cx('strategy-container')}>
        {detailsInformationData && (
          <DetailsInformation
            information={detailsInformationData}
            strategyId={strategyNumber}
            isEditable={isEditable}
            type="my"
          />
        )}
        <AnalysisContainer type="my" strategyId={strategyNumber} />
        <SideContainer hasButton={true}>
          {subscribeInfo && (
            <SubscriberItem
              subscribers={subscribeInfo?.subscriptionCount}
              isEditable={isEditable}
              isMyStrategy={true}
            />
          )}
          {hasDetailsSideData?.[0] &&
            detailsSideData?.map((data, idx) => (
              <div key={`${data}_${idx}`}>
                <DetailsSideItem
                  information={data}
                  isEditable={isEditable}
                  strategyId={strategyNumber}
                />
              </div>
            ))}
        </SideContainer>
      </div>
    </div>
  )
}

export default StrategyManagePage
