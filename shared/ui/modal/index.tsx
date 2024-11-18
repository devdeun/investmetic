'use client'

import { ReactNode } from 'react'

import classNames from 'classnames/bind'
import { createPortal } from 'react-dom'

import { Button } from '../button'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  title?: string
  icon?: ReactNode
  isModalOpen: boolean
  hasTwoButtons?: boolean
  confirmModal?: () => void
  closeModal: () => void
}

const Modal = ({
  title,
  icon,
  isModalOpen,
  hasTwoButtons = false,
  // confirmModal,
  closeModal,
}: Props) => {
  if (!isModalOpen) return null

  const modalRoot = document.getElementById('modal-root')

  if (!modalRoot) return null

  return createPortal(
    <>
      <div className={cx('overlay')}>오버레이</div>
      <div className={cx('modal')}>
        {/* <div onClick={closeModal}>X</div> */}
        <div className={cx('icon')}>{icon}</div>
        <p className={cx('title')}>{title}</p>

        {hasTwoButtons ? (
          <div className={cx('two-buttons')}>
            {/* <Button onClick={confirmModal}>예 </Button> */}
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
