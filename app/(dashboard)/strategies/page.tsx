import { Suspense } from 'react'

import SideContainer from '@/app/(dashboard)/strategies/_ui/side-container'
import StrategyList from '@/app/(dashboard)/strategies/_ui/strategy-list'
import classNames from 'classnames/bind'

import Title from '@/shared/ui/title'

import styles from './page.module.scss'

const cx = classNames.bind(styles)

const StrategiesPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={cx('container')}>
        <Title label={'전략 랭킹 모음'} />
        <StrategyList />
        <SideContainer>
          <p className={cx('search-bar')}>Search-Bar</p>
        </SideContainer>
      </div>
    </Suspense>
  )
}

export default StrategiesPage
