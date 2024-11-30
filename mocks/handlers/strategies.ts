import { HttpResponse, http } from 'msw'

import { StrategiesModel } from '@/shared/types/strategy-details-data'

export const strategiesMockData: StrategiesModel[] = [
  {
    strategyId: 1,
    strategyName: 'Dynamic ETF 전략',
    traderImgUrl: '/images/trader1.png',
    nickname: 'AlphaTrader',
    stockTypeInfo: {
      stockTypeIconUrls: ['/images/stock.png'],
      stockTypeNames: ['해외지수선물'],
    },
    profitRateChartData: {
      dates: [
        '2023-01-01',
        '2023-01-02',
        '2023-01-03',
        '2023-01-04',
        '2023-01-05',
        '2023-01-06',
        '2023-01-07',
        '2023-01-08',
        '2023-01-09',
      ],
      profitRates: [7.2, 5.2, 25, 12.8, 17.2, 11.4, 20, 16, 18],
    },
    tradeTypeIconUrl: '/images/trade.png',
    tradeTypeName: '자동',
    mdd: -15432567,
    smScore: 72.1,
    cumulativeProfitRate: 140.5,
    recentYearProfitLossRate: 35.2,
    subscriptionCount: 45,
    averageRating: 4.9,
    totalReviews: 34,
    isSubscribed: true,
    isPublic: '',
  },
  {
    strategyId: 2,
    strategyName: '고수익 ETF',
    traderImgUrl: '/images/trader2.png',
    nickname: 'BetaTrader',
    stockTypeInfo: {
      stockTypeIconUrls: ['/images/stock.png'],
      stockTypeNames: ['해외지수선물'],
    },
    profitRateChartData: {
      dates: [
        '2023-01-01',
        '2023-01-02',
        '2023-01-03',
        '2023-01-04',
        '2023-01-05',
        '2023-01-06',
        '2023-01-07',
        '2023-01-08',
        '2023-01-09',
      ],
      profitRates: [7.2, 5.2, 25, 12.8, 17.2, 11.4, 20, 16, 18],
    },
    tradeTypeIconUrl: '/images/trade.png',
    tradeTypeName: '자동',
    mdd: -12786543,
    smScore: 65.4,
    cumulativeProfitRate: 125.3,
    recentYearProfitLossRate: 28.4,
    subscriptionCount: 67,
    averageRating: 4.6,
    totalReviews: 19,
    isSubscribed: false,
    isPublic: '',
  },
  {
    strategyId: 3,
    strategyName: 'Futures Pro',
    traderImgUrl: '/images/trader3.png',
    nickname: 'Gamma',
    stockTypeInfo: {
      stockTypeIconUrls: ['/images/stock.png'],
      stockTypeNames: ['해외지수선물'],
    },
    profitRateChartData: {
      dates: [
        '2023-01-01',
        '2023-01-02',
        '2023-01-03',
        '2023-01-04',
        '2023-01-05',
        '2023-01-06',
        '2023-01-07',
        '2023-01-08',
        '2023-01-09',
      ],
      profitRates: [7.2, 5.2, 25, 12.8, 17.2, 11.4, 20, 16, 18],
    },
    tradeTypeIconUrl: '/images/trade.png',
    tradeTypeName: '자동',
    mdd: -18234678,
    smScore: 79.6,
    cumulativeProfitRate: 160.4,
    recentYearProfitLossRate: 40.1,
    subscriptionCount: 89,
    averageRating: 4.7,
    totalReviews: 45,
    isSubscribed: true,
    isPublic: '',
  },
  {
    strategyId: 4,
    strategyName: '월별 수익 전략',
    traderImgUrl: '/images/trader4.png',
    nickname: 'TraderX',
    stockTypeInfo: {
      stockTypeIconUrls: ['/images/stock.png'],
      stockTypeNames: ['해외지수선물'],
    },
    profitRateChartData: {
      dates: [
        '2023-01-01',
        '2023-01-02',
        '2023-01-03',
        '2023-01-04',
        '2023-01-05',
        '2023-01-06',
        '2023-01-07',
        '2023-01-08',
        '2023-01-09',
      ],
      profitRates: [7.2, 5.2, 25, 12.8, 17.2, 11.4, 20, 16, 18],
    },
    tradeTypeIconUrl: '/images/trade.png',
    tradeTypeName: '자동',
    mdd: -11456789,
    smScore: 68.4,
    cumulativeProfitRate: 134.5,
    recentYearProfitLossRate: 32.7,
    subscriptionCount: 34,
    averageRating: 4.5,
    totalReviews: 29,
    isSubscribed: false,
    isPublic: '',
  },
  {
    strategyId: 5,
    strategyName: '리스크 관리 전략',
    traderImgUrl: '/images/trader5.png',
    nickname: 'DeltaOne',
    stockTypeInfo: {
      stockTypeIconUrls: ['/images/stock.png'],
      stockTypeNames: ['해외지수선물'],
    },
    profitRateChartData: {
      dates: [
        '2023-01-01',
        '2023-01-02',
        '2023-01-03',
        '2023-01-04',
        '2023-01-05',
        '2023-01-06',
        '2023-01-07',
        '2023-01-08',
        '2023-01-09',
      ],
      profitRates: [7.2, 5.2, 25, 12.8, 17.2, 11.4, 20, 16, 18],
    },
    tradeTypeIconUrl: '/images/trade.png',
    tradeTypeName: '자동',
    mdd: -14345678,
    smScore: 62.3,
    cumulativeProfitRate: 120.3,
    recentYearProfitLossRate: 25.7,
    subscriptionCount: 21,
    averageRating: 4.8,
    totalReviews: 22,
    isSubscribed: true,
    isPublic: '',
  },
  {
    strategyId: 6,
    strategyName: 'Active LongShort',
    traderImgUrl: '/images/trader6.png',
    nickname: 'Hedger',
    stockTypeInfo: {
      stockTypeIconUrls: ['/images/stock.png'],
      stockTypeNames: ['해외지수선물'],
    },
    profitRateChartData: {
      dates: [
        '2023-01-01',
        '2023-01-02',
        '2023-01-03',
        '2023-01-04',
        '2023-01-05',
        '2023-01-06',
        '2023-01-07',
        '2023-01-08',
        '2023-01-09',
      ],
      profitRates: [7.2, 5.2, 25, 12.8, 17.2, 11.4, 20, 16, 18],
    },
    tradeTypeIconUrl: '/images/trade.png',
    tradeTypeName: '자동',
    mdd: -17890234,
    smScore: 80.2,
    cumulativeProfitRate: 175.4,
    recentYearProfitLossRate: 45.8,
    subscriptionCount: 120,
    averageRating: 4.9,
    totalReviews: 52,
    isSubscribed: true,
    isPublic: '',
  },
  {
    strategyId: 7,
    strategyName: '안정적 성장 전략',
    traderImgUrl: '/images/trader7.png',
    nickname: 'SafeGrow',
    stockTypeInfo: {
      stockTypeIconUrls: ['/images/stock.png'],
      stockTypeNames: ['해외지수선물'],
    },
    profitRateChartData: {
      dates: [
        '2023-01-01',
        '2023-01-02',
        '2023-01-03',
        '2023-01-04',
        '2023-01-05',
        '2023-01-06',
        '2023-01-07',
        '2023-01-08',
        '2023-01-09',
      ],
      profitRates: [7.2, 5.2, 25, 12.8, 17.2, 11.4, 20, 16, 18],
    },
    tradeTypeIconUrl: '/images/trade.png',
    tradeTypeName: '자동',
    mdd: -13567890,
    smScore: 70.1,
    cumulativeProfitRate: 138.2,
    recentYearProfitLossRate: 30.9,
    subscriptionCount: 54,
    averageRating: 4.4,
    totalReviews: 18,
    isSubscribed: false,
    isPublic: '',
  },
  {
    strategyId: 8,
    strategyName: 'High Risk High Return',
    traderImgUrl: '/images/trader8.png',
    nickname: 'RiskyTrader',
    stockTypeInfo: {
      stockTypeIconUrls: ['/images/stock.png'],
      stockTypeNames: ['해외지수선물'],
    },
    profitRateChartData: {
      dates: [
        '2023-01-01',
        '2023-01-02',
        '2023-01-03',
        '2023-01-04',
        '2023-01-05',
        '2023-01-06',
        '2023-01-07',
        '2023-01-08',
        '2023-01-09',
      ],
      profitRates: [7.2, 5.2, 25, 12.8, 17.2, 11.4, 20, 16, 18],
    },
    tradeTypeIconUrl: '/images/trade.png',
    tradeTypeName: '자동',
    mdd: -25678345,
    smScore: 85.7,
    cumulativeProfitRate: 200.5,
    recentYearProfitLossRate: 50.4,
    subscriptionCount: 76,
    averageRating: 4.7,
    totalReviews: 37,
    isSubscribed: true,
    isPublic: '',
  },
  {
    strategyId: 9,
    strategyName: 'ETF 분산 투자',
    traderImgUrl: '/images/trader9.png',
    nickname: 'Diversifier',
    stockTypeInfo: {
      stockTypeIconUrls: ['/images/stock.png'],
      stockTypeNames: ['해외지수선물'],
    },
    profitRateChartData: {
      dates: [
        '2023-01-01',
        '2023-01-02',
        '2023-01-03',
        '2023-01-04',
        '2023-01-05',
        '2023-01-06',
        '2023-01-07',
        '2023-01-08',
        '2023-01-09',
      ],
      profitRates: [7.2, 5.2, 25, 12.8, 17.2, 11.4, 20, 16, 18],
    },
    tradeTypeIconUrl: '/images/trade.png',
    tradeTypeName: '자동',
    mdd: -9876543,
    smScore: 58.3,
    cumulativeProfitRate: 112.4,
    recentYearProfitLossRate: 20.7,
    subscriptionCount: 23,
    averageRating: 4.3,
    totalReviews: 11,
    isSubscribed: false,
    isPublic: '',
  },
  {
    strategyId: 10,
    strategyName: 'Momentum 전략',
    traderImgUrl: '/images/trader10.png',
    nickname: 'MomentumKing',
    stockTypeInfo: {
      stockTypeIconUrls: ['/images/stock.png'],
      stockTypeNames: ['해외지수선물'],
    },
    profitRateChartData: {
      dates: [
        '2023-01-01',
        '2023-01-02',
        '2023-01-03',
        '2023-01-04',
        '2023-01-05',
        '2023-01-06',
        '2023-01-07',
        '2023-01-08',
        '2023-01-09',
      ],
      profitRates: [7.2, 5.2, 25, 12.8, 17.2, 11.4, 20, 16, 18],
    },
    tradeTypeIconUrl: '/images/trade.png',
    tradeTypeName: '자동',
    mdd: -18456789,
    smScore: 75.6,
    cumulativeProfitRate: 165.3,
    recentYearProfitLossRate: 38.5,
    subscriptionCount: 89,
    averageRating: 4.9,
    totalReviews: 48,
    isSubscribed: true,
    isPublic: '',
  },
  {
    strategyId: 11,
    strategyName: '소형주 집중 전략',
    traderImgUrl: '/images/trader11.png',
    nickname: 'SmallCapPro',
    stockTypeInfo: {
      stockTypeIconUrls: ['/images/stock.png'],
      stockTypeNames: ['해외지수선물'],
    },
    profitRateChartData: {
      dates: [
        '2023-01-01',
        '2023-01-02',
        '2023-01-03',
        '2023-01-04',
        '2023-01-05',
        '2023-01-06',
        '2023-01-07',
        '2023-01-08',
        '2023-01-09',
      ],
      profitRates: [7.2, 5.2, 25, 12.8, 17.2, 11.4, 20, 16, 18],
    },
    tradeTypeIconUrl: '/images/trade.png',
    tradeTypeName: '자동',
    mdd: -14345678,
    smScore: 69.4,
    cumulativeProfitRate: 130.7,
    recentYearProfitLossRate: 28.2,
    subscriptionCount: 67,
    averageRating: 4.6,
    totalReviews: 26,
    isSubscribed: false,
    isPublic: '',
  },
  {
    strategyId: 12,
    strategyName: 'Active Bond 전략',
    traderImgUrl: '/images/trader12.png',
    nickname: 'BondExpert',
    stockTypeInfo: {
      stockTypeIconUrls: ['/images/stock.png'],
      stockTypeNames: ['해외지수선물'],
    },
    profitRateChartData: {
      dates: [
        '2023-01-01',
        '2023-01-02',
        '2023-01-03',
        '2023-01-04',
        '2023-01-05',
        '2023-01-06',
        '2023-01-07',
        '2023-01-08',
        '2023-01-09',
      ],
      profitRates: [7.2, 5.2, 25, 12.8, 17.2, 11.4, 20, 16, 18],
    },
    tradeTypeIconUrl: '/images/trade.png',
    tradeTypeName: '자동',
    mdd: -10567890,
    smScore: 64.3,
    cumulativeProfitRate: 125.8,
    recentYearProfitLossRate: 27.4,
    subscriptionCount: 42,
    averageRating: 4.5,
    totalReviews: 21,
    isSubscribed: true,
    isPublic: '',
  },
]

export const strategiesHandlers = [
  http.get('/api/strategies', ({ request }) => {
    const url = new URL(request.url)
    const page = parseInt(url.searchParams.get('page') || '1')
    const size = parseInt(url.searchParams.get('size') || '8')

    if (!isNaN(page) && !isNaN(size)) {
      const croppedStrategiesData = strategiesMockData.slice(
        size * (page - 1),
        size * (page - 1) + size
      )

      return HttpResponse.json({
        result: {
          content: croppedStrategiesData,
          totalPages: Math.ceil(strategiesMockData.length / size),
        },
      })
    }

    return HttpResponse.json(
      {
        isSuccess: false,
        message: '전략 목록을 찾을 수 없습니다.',
        code: 1004,
      },
      { status: 400 }
    )
  }),
]
