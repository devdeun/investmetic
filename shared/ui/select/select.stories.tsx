import type { Meta, StoryObj } from '@storybook/react'

import Select from '.'

const meta = {
  title: 'Components/Select',
  component: Select,
  decorators: [
    (Story) => (
      <div style={{ width: '256px', height: '200px', margin: '60px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type StoryType = StoryObj<typeof Select>

const options = [
  {
    value: '1-',
    label: '1년이하',
  },
  {
    value: '1+',
    label: '1년~2년',
  },
  {
    value: '2+',
    label: '2년~3년',
  },
  {
    value: '3+',
    label: '3년이상',
  },
]

export const Default: StoryType = {
  args: {
    title: '수익률',
    isRounded: false,
    isMultiple: false,
    hasCheck: false,
    onChange: () => {},
    options,
  },
}

export const Rounded: StoryType = {
  args: {
    ...Default.args,
    isRounded: true,
  },
}

export const Muliple: StoryType = {
  args: {
    ...Default.args,
    isMultiple: true,
  },
}

export const WithCheck: StoryType = {
  args: {
    ...Default.args,
    hasCheck: true,
  },
}
