import type { Meta, StoryObj } from '@storybook/react'

import BackHeader from '.'

const meta = {
  title: 'Components/Header/BackHeader',
  component: BackHeader,
  decorators: [
    (Story) => (
      <div
        style={{
          height: '400px',
          overflow: 'auto',
          border: '1px solid #ddd',
        }}
      >
        <Story />
        <div style={{ marginTop: '80px' }}>
          {Array.from({ length: 5 }, (_, idx) => (
            <div key={idx} style={{ height: '100px', marginBottom: '10px', background: '#f4f4f4' }}>
              Scrollable Content {idx + 1}
            </div>
          ))}
        </div>
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof BackHeader>
export default meta
type StoryType = StoryObj<typeof BackHeader>

export const Default: StoryType = {
  render: () => <BackHeader label="목록으로 돌아가기" />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
}
