import type { Meta, StoryObj } from '@storybook/react'

import ScoreCard from './index'

const meta = {
  title: 'Components/ScoreCard',
  component: ScoreCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#000000',
        },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'large'],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ScoreCard>

export default meta
type StoryType = StoryObj<typeof meta>

const mockChartData = [8, 15, 10, 17, 15, 19, 25, 20]

export const Default: StoryType = {
  args: {
    name: '내 이름은 김다은',
    title: '내 전략은 엄청나',
    score: 60.63,
    percentageChange: 37,
    chartData: mockChartData,
    ranking: 1,
    size: 'small',
    profileImage: 'https://lh3.googleusercontent.com/a/your-image-id',
  },
}

export const LargeCard: StoryType = {
  args: {
    ...Default.args,
    size: 'large',
  },
}

export const NegativeChange: StoryType = {
  args: {
    name: '나 김다은 아니다',
    title: '내 전략은 엄청나ㅋ',
    score: 50.63,
    percentageChange: -12,
    chartData: [20, 19, 17, 18, 15, 13, 11, 8],
    ranking: 4,
    profileImage: 'https://lh3.googleusercontent.com/a/your-image-id',
  },
}

export const LayoutExample: StoryType = {
  args: {
    name: '내 이름은 김다은',
    title: '내 전략은 엄청나',
    score: 60.63,
    percentageChange: 37,
    chartData: [8, 15, 10, 17, 15, 19, 25, 20],
    ranking: 1,
    size: 'large',
    profileImage: 'https://lh3.googleusercontent.com/a/your-image-id',
  },
  decorators: [
    () => (
      <div style={{ width: '900px' }}>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            width: '100%',
          }}
        >
          <div style={{ flex: '0 0 300px' }}>
            <ScoreCard
              name="내 이름은 김다은"
              title="내 전략은 엄청나"
              score={60.63}
              percentageChange={37}
              chartData={[8, 15, 10, 17, 15, 19, 25, 20]}
              ranking={1}
              size="large"
              profileImage="https://lh3.googleusercontent.com/a/your-image-id"
            />
          </div>
          <div
            style={{
              flex: 1,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
            }}
          >
            {[2, 3, 4, 5].map((ranking) => (
              <ScoreCard
                key={ranking}
                name="엄청난 트레이더"
                title="내 전략은 엄청나"
                score={60.63}
                percentageChange={37}
                chartData={[10, 12, 15, 14, 16, 18, 20, 18]}
                ranking={ranking}
                profileImage="https://lh3.googleusercontent.com/a/your-image-id"
              />
            ))}
          </div>
        </div>
      </div>
    ),
  ],
}
