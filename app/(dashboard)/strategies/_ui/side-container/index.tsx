import classNames from 'classnames/bind'

import { Button } from '@/shared/ui/button'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  children: React.ReactNode
  hasButton?: boolean
}

const SideContainer = ({ children, hasButton = false }: Props) => {
  return (
    <aside className={cx('side-bar', { 'has-button': hasButton })}>
      {hasButton && (
        <Button size="small" variant="filled" className={cx('edit-button')}>
          정보 수정하기
        </Button>
      )}
      {children}
    </aside>
  )
}

export default SideContainer
