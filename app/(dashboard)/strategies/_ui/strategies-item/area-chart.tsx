'use client'

import dynamic from 'next/dynamic'

import Highcharts from 'highcharts'

import { ProfitRateChartDataModel } from '@/shared/types/strategy-details-data'

const HighchartsReact = dynamic(() => import('highcharts-react-official'), {
  ssr: false,
})
interface Props {
  profitRateChartData: ProfitRateChartDataModel[]
}
const AreaChart = ({ profitRateChartData }: Props) => {
  const profit = profitRateChartData.map((data) => data.profitRate)
  const chartOptions: Highcharts.Options = {
    chart: {
      type: 'areaspline',
      height: 100,
      width: 180,
      backgroundColor: 'transparent',
      margin: [0, 0, 0, 0],
    },
    title: { text: undefined },
    xAxis: {
      visible: false,
    },
    yAxis: {
      visible: false,
      min: Math.min(...profit),
      max: Math.max(...profit),
    },
    legend: { enabled: false },
    plotOptions: {
      areaspline: {
        lineWidth: 1,
        lineColor: '#4d4d4d',
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: false,
            },
          },
        },
      },
    },
    series: [
      {
        type: 'areaspline',
        data: profitRateChartData.map((data) => ({
          x: new Date(data.date).getTime(),
          y: data.profitRate,
        })),
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, '#4d4d4d'],
            [1, 'rgba(255, 255, 255, 0)'],
          ],
        },
      },
    ],
    credits: { enabled: false },
    tooltip: { enabled: false },
  }

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />
}

export default AreaChart
