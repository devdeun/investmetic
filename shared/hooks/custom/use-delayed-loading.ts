import { useEffect, useState } from 'react'

const useDelayedLoading = (isLoading: boolean, minLoadingTime: number = 500) => {
  const [isDelayedLoading, setDelayedLoading] = useState(isLoading)

  useEffect(() => {
    if (isLoading) {
      setDelayedLoading(true)
    }

    if (!isLoading && isDelayedLoading) {
      const timer = setTimeout(() => {
        setDelayedLoading(false)
      }, minLoadingTime)

      return () => clearTimeout(timer)
    }
  }, [isLoading, minLoadingTime, isDelayedLoading])

  return isDelayedLoading
}

export default useDelayedLoading
