import { Meta, StoryObj } from '@storybook/react'

import { Input } from './index'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    inputSize: 'medium',
    errorMessage: null,
    placeholder: 'Enter text',
    type: 'text',
  },
  argTypes: {
    inputSize: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large', 'full'],
    },
    type: {
      control: { type: 'select' },
      options: ['email', 'password', 'tel', 'text'],
    },
    errorMessage: {
      control: { type: 'select' },
      options: [
        null,
        '비밀번호는 8자리 이상, 문자와 숫자를 포함해야 합니다.',
        '이메일 형식이 잘못되었습니다.',
        '전화번호는 10자리 이상이어야 합니다.',
        '필수 입력란입니다.',
      ],
    },
  },
  tags: ['autodocs'],
}

type StoryType = StoryObj<typeof Input>

export const Default: StoryType = {}

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

export const Full: StoryType = {
  args: {
    inputSize: 'full',
    placeholder: 'full input',
  },
}

export default meta
