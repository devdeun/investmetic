'use client'

import { ReactNode } from 'react'

import { CloseIcon } from '@/public/icons'
import classNames from 'classnames/bind'
import { createPortal } from 'react-dom'

import { Button } from '../button'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  title?: string
  icon?: ReactNode
  isOpen: boolean
  hasTwoButtons?: boolean
  confirmButton: () => void
  closeModal: () => void
}

const Modal = ({
  title,
  icon,
  isOpen,
  hasTwoButtons = false,
  confirmButton,
  closeModal,
}: Props) => {
  if (!isOpen) return null

  const modalRoot = document.getElementById('modal-root')

  if (!modalRoot) return null

  return createPortal(
    <>
      <div className={cx('overlay')}></div>
      <div className={cx('modal', { 'has-two-buttons': hasTwoButtons })}>
        <CloseIcon className={cx('close-icon')} onClick={closeModal}></CloseIcon>
        <div className={cx('icon')}>{icon}</div>
        <p className={cx('title')}>{title}</p>

        {hasTwoButtons ? (
          <div className={cx('two-buttons')}>
            <Button className={cx('confirm-button')} onClick={confirmButton}>
              예
            </Button>
            <Button onClick={closeModal}>아니오</Button>
          </div>
        ) : (
          <Button className={cx('close-button')} onClick={closeModal}>
            닫기
          </Button>
        )}
      </div>
    </>,
    modalRoot
  )
}

export default Modal
