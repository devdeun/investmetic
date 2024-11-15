import type { Meta, StoryFn } from '@storybook/react'

import TotalStar, { ColorType, SizeType } from './index'

const meta: Meta<typeof TotalStar> = {
  title: 'components/TotalStar',
  component: TotalStar,
  tags: ['autodocs'],
}

const star: StoryFn<{ size: SizeType; color: ColorType }> = (args) => (
  <TotalStar averageRating={4.9} totalElements={62} {...args} />
)

export const Primary = star.bind({})
Primary.args = {
  size: 'small',
  color: 'gray',
}

export const ForStrategiesPage = star.bind({})
Primary.args = {
  size: 'small',
  color: 'black',
}

export const ForReviewPage = star.bind({})
ForReviewPage.args = {
  size: 'medium',
  color: 'gray',
}

export default meta
