import type { Meta, StoryObj } from '@storybook/react'

import LogoHeader from '.'

const meta = {
  title: 'Components/Header/LogoHeader',
  component: LogoHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof LogoHeader>
export default meta
type StoryType = StoryObj<typeof LogoHeader>

export const Default: StoryType = {
  args: {
    hasLinks: true,
    hasText: false,
  },
}

export const WithoutLogoText: StoryType = {
  args: {
    ...Default.args,
    hasText: false,
  },
}

export const WithoutLinks: StoryType = {
  args: {
    ...Default.args,
    hasLinks: false,
  },
}
