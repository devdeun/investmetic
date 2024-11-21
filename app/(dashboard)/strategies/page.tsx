import { Suspense } from 'react'

import SideContainer from '@/app/(dashboard)/strategies/_ui/side-container'
import StrategyList from '@/app/(dashboard)/strategies/_ui/strategy-list'
import classNames from 'classnames/bind'

import Title from '@/shared/ui/title'

import styles from './page.module.scss'

const cx = classNames.bind(styles)

const StrategiesPage = () => {
  return (
    <div className={cx('container')}>
      <Title label={'전략 랭킹 모음'} />
      <Suspense fallback={<div>Loading...</div>}>
        <StrategyList />
      </Suspense>
      <SideContainer>
        <p className={cx('search-bar')}>Search-Bar</p>
      </SideContainer>
    </div>
  )
}

export default StrategiesPage
