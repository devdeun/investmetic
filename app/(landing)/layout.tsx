'use client'

import { usePathname } from 'next/navigation'

import Footer from '@/shared/ui/footer'
import LogoHeader from '@/shared/ui/header/logo-header'

interface Props {
  children: React.ReactNode
}

const LandingLayout = ({ children }: Props) => {
  const pathname = usePathname()

  const hasFooter = !pathname.includes('/signin') && !pathname.includes('/signup')

  return (
    <>
      <LogoHeader hasText={true} hasLinks={true} />
      <main className="landing-main">{children}</main>
      {hasFooter && <Footer />}
    </>
  )
}

export default LandingLayout
