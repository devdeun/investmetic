import { ModalAlertIcon } from '@/public/icons'
import classNames from 'classnames/bind'

import { Button } from '@/shared/ui/button'
import Modal from '@/shared/ui/modal'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  isModalOpen: boolean
  onCloseModal: () => void
  onDelete: () => void
}

const AnswerDeleteModal = ({ isModalOpen, onCloseModal, onDelete }: Props) => {
  return (
    <Modal isOpen={isModalOpen} icon={ModalAlertIcon}>
      <p className={cx('message')}>답변을 삭제하시겠습니까?</p>

      <Button.ButtonGroup>
        <Button onClick={onCloseModal}>취소</Button>
        <Button onClick={onDelete} variant="filled">
          삭제
        </Button>
      </Button.ButtonGroup>
    </Modal>
  )
}

export default AnswerDeleteModal
