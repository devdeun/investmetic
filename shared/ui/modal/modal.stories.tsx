import { Meta, StoryObj } from '@storybook/react'
import { ModalAlertIcon } from 'public/icons/index'

import Modal from './index'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  args: {
    title: '기본 모달 제목',
    icon: <ModalAlertIcon />,
    isModalOpen: true,
    hasTwoButtons: false,
    confirmButton: () => alert('확인 버튼 클릭'),
    closeModal: () => alert('닫기 버튼 클릭'),
  },
  argTypes: {
    title: { control: 'text' },
    isModalOpen: { control: 'boolean' },
    hasTwoButtons: { control: 'boolean' },
    confirmButton: { action: 'confirmButton' },
    closeModal: { action: 'closeModal' },
  },
  tags: ['autodocs'],
}

type StoryType = StoryObj<typeof Modal>

export const Default: StoryType = {}

export const TwoButtons: StoryType = {
  args: {
    hasTwoButtons: true,
  },
}

export const WithCustomIcon: StoryType = {
  args: {
    icon: <ModalAlertIcon />,
  },
}

export default meta
