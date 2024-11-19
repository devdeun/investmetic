import type { Meta, StoryObj } from '@storybook/react'

import TradersListCard from './index'

const meta = {
  title: 'Components/TradersListCard',
  component: TradersListCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#222222',
        },
      ],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TradersListCard>

export default meta
type StoryType = StoryObj<typeof meta>

export const Default: StoryType = {
  args: {
    name: '고양이',
    profileImage: 'https://lh3.googleusercontent.com/a/your-image-id',
    strategy: 10,
    subscribe: 10,
    traderId: '1234',
  },
}
