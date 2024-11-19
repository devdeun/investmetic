import React from 'react'

import { Meta, StoryObj } from '@storybook/react'
import { ModalAlertIcon } from 'public/icons/index'

import { Button } from '@/shared/ui/button'

import Modal from './index'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
}

export default meta

type StoryType = StoryObj<typeof Modal>

const ModalStory = ({
  contents,
  icon,
  hasTwoButtons,
}: {
  contents?: string
  icon?: React.ReactNode
  hasTwoButtons?: boolean
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

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
      <Modal
        contents={contents}
        icon={icon}
        isOpen={isOpen}
        hasTwoButtons={hasTwoButtons}
        closeModal={() => setIsOpen(false)}
        confirmButton={() => {
          alert('확인')
          setIsOpen(false)
        }}
      />
    </div>
  )
}

export const Default: StoryType = {
  render: () => <ModalStory contents="기본 모달 제목" />,
}

export const TwoButtons: StoryType = {
  render: () => <ModalStory contents="정말 삭제하시겠습니까?" hasTwoButtons={true} />,
}

export const WithIcon: StoryType = {
  render: () => <ModalStory contents="알림이 있습니다." icon={<ModalAlertIcon />} />,
}

export const LongText: StoryType = {
  render: () => (
    <ModalStory contents="이것은 긴 텍스트가 있는 모달입니다. 이것은 긴 텍스트가 있는 모달입니다. 이것은 긴 텍스트가 있는 모달입니다." />
  ),
}

export const FullFeatured: StoryType = {
  render: () => (
    <ModalStory
      contents="모든 기능이 포함된 모달입니다. 확인해주세요."
      icon={<ModalAlertIcon />}
      hasTwoButtons={true}
    />
  ),
}
