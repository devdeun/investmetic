import DetailsSideItem, {
  TitleType,
} from '@/app/(dashboard)/strategies/[strategyId]/_ui/details-side-item'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof DetailsSideItem> = {
  title: 'components/DetailsSideItem',
  component: DetailsSideItem,
  tags: ['autodocs'],
}

const sideItem: StoryFn<{ data: { title: TitleType; data: string | number }[] }> = ({ data }) => (
  <div style={{ width: '100%', height: '100%', background: '#fafafa', padding: '20px' }}>
    {data.map((item, idx) => (
      <DetailsSideItem
        key={item.title}
        title={item.title}
        data={item.data}
        hasGap={idx === 3 || idx === 5 ? false : true}
      />
    ))}
  </div>
)
export const Default = sideItem.bind({})
Default.args = {
  data: [{ title: '투자 원금', data: '10,000,000' }],
}

export const Trader = sideItem.bind({})
Trader.args = {
  data: [{ title: '트레이더', data: '수밍' }],
}

export const LayoutExample = sideItem.bind({})
LayoutExample.args = {
  data: [
    { title: '트레이더', data: '수밍' },
    { title: '최소 투자 금액', data: '1억 ~ 2억' },
    { title: '투자 원금', data: '10,000,000' },
    { title: 'KP Ratio', data: 0.3993 },
    { title: 'SM SCORE', data: 67.38 },
    { title: '최종손익입력일자', data: '2016.04.30' },
    { title: '등록일', data: '2016.02.30' },
  ],
}

export default meta
