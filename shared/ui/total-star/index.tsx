import classNames from 'classnames/bind'

import Star from '@/shared/ui/total-star/star-icon'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

export type SizeType = 'small' | 'medium'
export type ColorType = 'black' | 'gray'

interface Props {
  averageRating: number
  totalElements: number
  size?: SizeType
  color?: ColorType
}
const TotalStar = ({ averageRating, totalElements, size = 'small', color = 'gray' }: Props) => {
  return (
    <div className={cx('container', size, color)}>
      <div className={cx('icon')}>
        <Star size={size} />
      </div>
      <p>{averageRating}</p>
      <p>({totalElements})</p>
    </div>
  )
}

export default TotalStar
