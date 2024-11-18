import type { Meta, StoryObj } from '@storybook/react'

import BackHeader from '.'

const meta = {
  title: 'Components/Header/BackHeader',
  component: BackHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof BackHeader>
export default meta
type StoryType = StoryObj<typeof BackHeader>

export const Default: StoryType = {
  render: () => <BackHeader />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
}
