import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  errorMessages: string | null
  isErr?: boolean
}
export const ErrorMessages = ({ errorMessages, isErr = true }: Props) => {
  return <>{isErr && <p className={cx('error-messages')}>{errorMessages}</p>}</>
}
