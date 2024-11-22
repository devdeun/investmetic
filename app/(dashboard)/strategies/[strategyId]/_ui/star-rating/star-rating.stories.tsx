import StarRating from '@/app/(dashboard)/strategies/[strategyId]/_ui/star-rating'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta = {
  title: 'components/StarRating',
  component: StarRating,
  tags: ['autodocs'],
}

const starRating: StoryFn<{ starRating: number | undefined }> = ({ starRating }) => (
  <StarRating starRating={starRating} />
)

export const Rated = starRating.bind({})
Rated.args = {
  starRating: 5,
}

export const Rating = starRating.bind({})
Rating.args = {
  starRating: undefined,
}

export default meta
