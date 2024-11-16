import { Meta, StoryObj } from '@storybook/react'

import { Input } from './index'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    inputSize: 'small',
    variant: 'default',
    placeholder: 'Enter text',
    type: 'text',
  },
  argTypes: {
    inputSize: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['default', 'error'],
    },
    type: {
      control: { type: 'select' },
      options: [
        'name',
        'nickname',
        'email',
        'verificationCode',
        'password',
        'confirmPassword',
        'phone',
        'text',
      ],
    },
  },
}

export default meta
type StoryType = StoryObj<typeof Input>

export const Default: StoryType = {}

export const Error: StoryType = {
  args: {
    variant: 'error',
    value: 'Invalid Input',
    placeholder: 'Invalid value',
  },
}

export const Small: StoryType = {
  args: {
    inputSize: 'small',
    placeholder: 'Small input',
  },
}

export const Medium: StoryType = {
  args: {
    inputSize: 'medium',
    placeholder: 'Medium input',
  },
}

export const Large: StoryType = {
  args: {
    inputSize: 'large',
    placeholder: 'Large input',
  },
}

export const WithValidation: StoryType = {
  args: {
    type: 'email',
    placeholder: 'Enter a valid email',
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input') as HTMLInputElement
    input.value = 'invalid email'
    input.dispatchEvent(new Event('input', { bubbles: true }))
  },
}
