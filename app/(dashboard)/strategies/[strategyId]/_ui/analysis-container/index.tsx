'use client'

import { useState } from 'react'

import classNames from 'classnames/bind'

import Select from '@/shared/ui/select'

import AnalysisChart from './analysis-chart'
import { analysisChartData } from './example'
import styles from './styles.module.scss'
import TabsWithTable from './tabs-width-table'
import { YAXIS_OPTIONS } from './yaxis-options'

const cx = classNames.bind(styles)

type OptionsType = (typeof YAXIS_OPTIONS)[keyof typeof YAXIS_OPTIONS]

interface Props {
  type?: 'default' | 'my'
}

const AnalysisContainer = ({ type = 'default' }: Props) => {
  const [firstValue, setFirstValue] = useState<OptionsType>('잔고')
  const [secondValue, setSecondValue] = useState<OptionsType>('잔고')

  const optionsToArray = Object.entries(YAXIS_OPTIONS)
  const options: { value: string; label: string }[] = []

  for (const [key, value] of optionsToArray) {
    options.push({ value: key, label: value })
  }

  return (
    <div className={cx('container')}>
      <div className={cx('analysis-header')}>
        <p className={cx({ my: type === 'my' })}>분석</p>
        {type === 'default' && (
          <div>
            <Select
              size="large"
              options={options}
              value={firstValue}
              onChange={(newValue) => setFirstValue(newValue as OptionsType)}
            />
            <Select
              size="large"
              options={options}
              value={secondValue}
              onChange={(newValue) => setSecondValue(newValue as OptionsType)}
            />
          </div>
        )}
      </div>
      {type === 'default' && (
        <div className={cx('chart-wrapper')}>
          <AnalysisChart analysisChartData={analysisChartData} />
        </div>
      )}
      <TabsWithTable isEditable={type === 'my' ? true : false} />
    </div>
  )
}

export default AnalysisContainer
