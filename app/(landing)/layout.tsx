'use client'

import { usePathname } from 'next/navigation'

import LogoHeader from '@/shared/ui/header/logo-header'

interface Props {
  children: React.ReactNode
}

const LandingLayout = ({ children }: Props) => {
  const pathname = usePathname()

  const getHeaderType = () => {
    if (pathname.includes('/signin') || pathname.includes('/signup')) return false
    return true
  }

  return (
    <>
      <LogoHeader hasText={true} hasLinks={getHeaderType()} />
      <main className="landing-main">{children}</main>
    </>
  )
}

export default LandingLayout
