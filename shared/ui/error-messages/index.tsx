import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  errorMessages?: string | null
}
export const ErrorMessages = ({ errorMessages }: Props) => {
  return <div>{errorMessages && <p className={cx('error-messages')}>{errorMessages}</p>}</div>
}
