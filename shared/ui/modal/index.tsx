'use client'

import classNames from 'classnames/bind'
import { createPortal } from 'react-dom'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  icon?: React.ReactNode
  message?: string
  children?: React.ReactNode
  isOpen: boolean
  className?: string
}

const Modal = ({ icon, message, children, isOpen = false, className }: Props) => {
  if (!isOpen) return null

  const modalRoot = document.getElementById('modal-root')

  if (!isOpen || !modalRoot) return null

  return createPortal(
    <>
      <div className={cx('overlay')}></div>
      <div className={cx('modal', className)}>
        <div className={cx('icon')}>{icon}</div>
        <p className={cx('message')}>{message}</p>
        {children}
      </div>
    </>,
    modalRoot
  )
}

export default Modal
