import { Button } from '@/shared/ui/button'

import styles from './styles.module.scss'

interface Props {
  isMyStrategy?: boolean
  subscribers: number
  onClick?: () => void
}

const SubscriberItem = ({ isMyStrategy = false, subscribers, onClick }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.contents}>구독 | {subscribers}</div>
        {!isMyStrategy ? (
          <Button size="small" variant="filled" onClick={onClick}>
            구독하기{' '}
          </Button>
        ) : null}
      </div>
    </div>
  )
}

export default SubscriberItem
