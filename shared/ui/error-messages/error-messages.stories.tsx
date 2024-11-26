import { Meta, StoryObj } from '@storybook/react'

import { ErrorMessages } from './index'

const meta: Meta<typeof ErrorMessages> = {
  title: 'Components/ErrorMessages',
  component: ErrorMessages,
  args: {
    errorMessages: '에러메세지를 입력하세요.',
  },
  argTypes: {
    errorMessages: {
      control: 'text',
      description: 'The error message to display.',
      table: {
        type: { summary: 'string | null' },
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

type StoryType = StoryObj<typeof ErrorMessages>

export const Default: StoryType = {}

export const EmptyMessage: StoryType = {
  args: {
    errorMessages: null,
  },
}
