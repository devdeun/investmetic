import { Suspense } from 'react'

import classNames from 'classnames/bind'

import Title from '@/shared/ui/title'

import ListHeader from '../../_ui/list-header'
import MyStrategyList from './_ui/my-strategy-list'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const MyStrategiesPage = () => {
  return (
    <div className={cx('container')}>
      <Title label={'나의 전략'} />
      <ListHeader type="my" />
      <Suspense fallback={<div>Loading...</div>}>
        <MyStrategyList />
      </Suspense>
    </div>
  )
}

export default MyStrategiesPage
