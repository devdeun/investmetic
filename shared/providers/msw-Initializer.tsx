'use client'

import { useEffect } from 'react'

import { useMSWStore } from '@/shared/stores/msw'
import { isDevelopment } from '@/shared/utils/env'

export const MSWInitializer = () => {
  const setReady = useMSWStore((state) => state.setReady)

  useEffect(() => {
    const initMSW = async () => {
      if (!isDevelopment) {
        setReady(true)
        return
      }

      try {
        const { default: init } = await import('@/mocks')
        await init()
        setReady(true)
      } catch (err) {
        console.error('MSW initialization failed:', err)
      }
    }

    initMSW()
  }, [setReady])

  return null
}
