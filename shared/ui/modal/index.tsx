'use client'

import { ReactNode } from 'react'

import classNames from 'classnames/bind'
import { createPortal } from 'react-dom'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  icon?: ReactNode
  message?: string
  children?: React.ReactNode
  isOpen: boolean
}

const Modal = ({ icon, message, children, isOpen = false }: Props) => {
  if (!isOpen) return null

  const modalRoot = document.getElementById('modal-root')

  if (!modalRoot) return null

  return createPortal(
    <>
      <div className={cx('overlay')}></div>
      <div className={cx('modal')}>
        <div className={cx('icon')}>{icon}</div>
        <p className={cx('contents')}>{message}</p>
        {children}
      </div>
    </>,
    modalRoot
  )
}

export default Modal
