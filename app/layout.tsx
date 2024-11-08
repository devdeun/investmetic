import type { Metadata } from 'next'

import initMSW from '@/mocks'

import { ENV } from '@/shared/constants/env'
import { QueryProvider } from '@/shared/providers'
import '@/shared/styles/global.scss'

import { pretendard } from './fonts'

export const metadata: Metadata = {
  title: 'InvestMetic',
  description: '',
}

if (process.env.NODE_ENV === ENV.DEVELOPMENT) {
  initMSW()
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}

export default RootLayout
