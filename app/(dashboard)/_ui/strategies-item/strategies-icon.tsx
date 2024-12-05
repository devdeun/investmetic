'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'

import classNames from 'classnames/bind'
import { Tooltip } from 'react-tooltip'

import styles from './styles.module.scss'

/* eslint-disable react-hooks/exhaustive-deps */

const cx = classNames.bind(styles)

interface ImageSizeModel {
  width: number
  height: number
}

interface Props {
  iconUrls?: string[]
  iconNames?: string[]
  isDetailsPage?: boolean
}

const StrategiesIcon = ({ iconUrls, iconNames, isDetailsPage = false }: Props) => {
  const [imageSizes, setImageSizes] = useState<{ [key: string]: ImageSizeModel }>({})
  const [validImages, setValidImages] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    const images: HTMLImageElement[] = []
    iconUrls?.forEach((url) => {
      const image = new window.Image()
      image.src = url
      image.onload = () => updateImageSize(url, image.width, image.height)
      image.onerror = () => updateImageSize(url, 20, 20)
      images.push(image)
    })

    return () => {
      images.forEach((image) => {
        image.onload = null
        image.onerror = null
      })
    }
  }, [iconUrls])

  const updateImageSize = (url: string, width: number, height: number) => {
    setImageSizes((prev) => ({
      ...prev,
      [url]: { width, height },
    }))
  }

  const getImageSize = (url: string) => imageSizes[url] || { width: 20, height: 20 }

  const handleImageErr = (url: string) => {
    setValidImages((prev) => ({ ...prev, [url]: false }))
  }

  const handleImageLoad = (url: string) => {
    setValidImages((prev) => ({ ...prev, [url]: true }))
  }

  if (iconUrls?.length === 0 || iconNames?.length === 0) return null
  if (iconUrls?.length !== iconNames?.length) return null

  return (
    <div className={cx('icon-container', { details: isDetailsPage })}>
      {iconUrls?.map((url, idx) => {
        const name = iconNames?.[idx]
        if (!url || !name || validImages[url] === false) return null
        const { width, height } = getImageSize(url)

        return (
          <div key={url} className={cx('icon-wrapper')}>
            <div
              className={cx('icon')}
              style={{
                width: `${width}px`,
                height: `${height}px`,
              }}
              data-tooltip-id={name}
              data-tooltip-content={name}
              data-tooltip-class-name="tooltip"
            >
              <Image
                src={url}
                alt={name}
                fill
                onLoadingComplete={() => handleImageLoad(url)}
                onError={() => handleImageErr(url)}
              />
            </div>
            <Tooltip id={name} className={cx('tooltip')} classNameArrow={cx('arrow')} opacity={1}>
              {name}
            </Tooltip>
          </div>
        )
      })}
    </div>
  )
}

export default StrategiesIcon
