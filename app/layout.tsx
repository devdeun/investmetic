import type { Metadata } from 'next'

import { QueryProvider } from '@/shared/providers'
import { AuthProvider } from '@/shared/providers/auth-provider'
import '@/shared/styles/global.scss'

import { pretendard } from './fonts'

export const metadata: Metadata = {
  title: 'InvestMetic',
  description: '성공적인 투자 전략을 참고하거나 공유하고 싶다면 인베스트 메틱에서!',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>
        <QueryProvider>
          <AuthProvider>
            {children}
            <div id="modal-root" />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  )
}

export default RootLayout
