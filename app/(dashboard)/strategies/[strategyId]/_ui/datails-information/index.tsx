import classNames from 'classnames/bind'

import { StrategyDetailsInformationModel } from '@/shared/types/strategy-details-data'

import StrategyIntroduction from '../introduction/index'
import InvestInformation from './invest-information'
import Percentage from './percentage'
import StrategyNameBox from './strategy-name-box'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  information: StrategyDetailsInformationModel
}

const DetailsInformation = ({ information }: Props) => {
  const percentageToArray = [
    { percent: information.cumulativeProfitRate, label: '누적 수익률' },
    { percent: information.maxDrawdownRate, label: '최대 자본 인하율' },
    { percent: information.averageProfitLossRate, label: '평균 손익률' },
    { percent: information.profitFactor, label: 'Profit Factor' },
    { percent: information.winRate, label: '승률' },
  ]

  return (
    <>
      <div className={cx('information-top')}>
        <StrategyNameBox
          iconUrl={[information.tradeTypeIconURL, ...information.stockTypeIconURLs]}
          name={information.strategyName}
        />
        <InvestInformation
          stock={information.stockTypeNames}
          trade={information.tradeTypeName}
          cycle={information.operationCycle}
        />
      </div>
      <StrategyIntroduction content={information.strategyDescription} />
      <div className={cx('percentage-container')}>
        {percentageToArray.map((data) => (
          <Percentage key={data.label} percent={data.percent} label={data.label} />
        ))}
      </div>
    </>
  )
}

export default DetailsInformation
