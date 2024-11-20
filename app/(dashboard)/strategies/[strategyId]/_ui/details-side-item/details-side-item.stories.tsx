import DetailsSideItem, {
  InformationModel,
} from '@/app/(dashboard)/strategies/[strategyId]/_ui/details-side-item'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof DetailsSideItem> = {
  title: 'components/DetailsSideItem',
  component: DetailsSideItem,
  tags: ['autodocs'],
  argTypes: {
    information: {
      title: {
        control: 'select',
        options: [
          '트레이더',
          '최소 투자 금액',
          '투자 원금',
          'KP Ratio',
          'SM SCORE',
          '최종손익입력일자',
          '등록일',
        ],
      },
      data: {
        control: 'text',
      },
    },
  },
}

const sideItems: StoryFn<{ information: InformationModel | InformationModel[] }> = (args) => (
  <div style={{ width: '100%', height: '100%', background: '#fafafa', padding: '20px' }}>
    <DetailsSideItem {...args} />
  </div>
)

export const Default = sideItems.bind({})
Default.args = {
  information: { title: '투자 원금', data: '10,000,000' },
}

export const Trader = sideItems.bind({})
Trader.args = {
  information: { title: '트레이더', data: '수밍' },
}

export const Multiple = sideItems.bind({})
Multiple.args = {
  information: [
    { title: 'KP Ratio', data: 0.3993 },
    { title: 'SM SCORE', data: 67.38 },
  ],
}

export default meta
