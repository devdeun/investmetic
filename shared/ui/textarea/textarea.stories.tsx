import { Meta, StoryObj } from '@storybook/react'

import { Textarea } from './index'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  args: {
    rows: 5,
    placeholder: 'Enter text...',
  },
  argTypes: {
    rows: {
      control: { type: 'number' },
      defaultValue: 5,
    },
  },
}

type StoryType = StoryObj<typeof Textarea>

export const Default: StoryType = {}

export const Focused: StoryType = {
  args: {
    placeholder: 'Focused textarea',
  },
  play: async ({ canvasElement }) => {
    const textarea = canvasElement.querySelector('textarea') as HTMLTextAreaElement
    textarea.focus()
  },
}

export const CustomClass: StoryType = {
  args: {
    className: 'custom-textarea',
    placeholder: 'Textarea with custom class',
  },
}

export const Disabled: StoryType = {
  args: {
    disabled: true,
    placeholder: 'Disabled textarea',
  },
}

export const WithLongText: StoryType = {
  args: {
    value: 'Hello \n\n Banana \n\n Banana',
    placeholder: 'Textarea with long text',
  },
}

export default meta
