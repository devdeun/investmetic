import React from 'react'

import { Meta, StoryObj } from '@storybook/react'
import {
  ModalAlertIcon,
  ModalCheckIcon,
  ModalSubscribeIcon,
  RegisterIcon,
} from 'public/icons/index'

import { Button } from '@/shared/ui/button'

import Modal from './index'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
}

export default meta

type StoryType = StoryObj<typeof Modal>

const ModalStory = ({ contents, icon }: { contents?: string; icon?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(true)

  React.useEffect(() => {
    if (typeof window !== 'undefined' && !document.getElementById('modal-root')) {
      const modalRoot = document.createElement('div')
      modalRoot.id = 'modal-root'
      document.body.appendChild(modalRoot)
    }
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <Button onClick={() => setIsOpen(true)}>모달 열기</Button>
      <Modal contents={contents} icon={icon} isOpen={isOpen} />
    </div>
  )
}

export const Default: StoryType = {
  render: () => <ModalStory contents="기본모달" icon={<ModalAlertIcon />} />,
}

export const AlertIcon: StoryType = {
  render: () => <ModalStory contents="이것은 알림아이콘 모달입니다." icon={<ModalAlertIcon />} />,
}

export const CheckIcon: StoryType = {
  render: () => <ModalStory contents="이것은 체크아이콘 모달입니다." icon={<ModalCheckIcon />} />,
}

export const SubscribeIcon: StoryType = {
  render: () => (
    <ModalStory contents="이것은 구독아이콘 모달입니다." icon={<ModalSubscribeIcon />} />
  ),
}

export const PlusIcon: StoryType = {
  render: () => <ModalStory contents="이것은 등록아이콘 모달입니다." icon={<RegisterIcon />} />,
}
