import classNames from 'classnames/bind'

import { PATH } from '@/shared/constants/path'
import Avatar from '@/shared/ui/avatar'
import { LinkButton } from '@/shared/ui/link-button'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

export type TitleType =
  | '트레이더'
  | '최소 투자 금액'
  | '투자 원금'
  | 'KP Ratio'
  | 'SM SCORE'
  | '최종손익입력일자'
  | '등록일'

interface Props {
  title: TitleType
  data: string | number
  profileImage?: string
  hasGap?: boolean
}

const DetailsSideItem = ({ title, data, profileImage, hasGap = true }: Props) => {
  return (
    <div className={cx('side-item', hasGap && 'gap')}>
      <div className={cx('title')}>{title}</div>
      <div className={cx('data')}>
        {title === '트레이더' ? (
          <>
            <div className={cx('avatar')}>
              <Avatar src={profileImage} />
              <p>{data}</p>
            </div>
            <LinkButton href={PATH.MY_QUESTIONS} size="small" style={{ height: '30px' }}>
              문의하기
            </LinkButton>
          </>
        ) : (
          <p>{data}</p>
        )}
      </div>
    </div>
  )
}

export default DetailsSideItem
