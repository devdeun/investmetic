import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const LIST_HEADER = ['전략', '분석', 'MDD', 'SM SCORE', '수익률', '구독']

const ListHeader = () => {
  return (
    <div className={cx('container')}>
      {LIST_HEADER.map((category) => (
        <div key={category} className={cx('category')}>
          {category}
        </div>
      ))}
    </div>
  )
}

export default ListHeader
