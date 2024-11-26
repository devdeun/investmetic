'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'

import classNames from 'classnames/bind'
import { Tooltip } from 'react-tooltip'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface ImageSizeModel {
  width: number
  height: number
}

interface Props {
  iconUrls?: string[]
  iconNames?: string[]
}

const StrategiesIcon = ({ iconUrls, iconNames }: Props) => {
  const [imageSizes, setImageSizes] = useState<{ [key: string]: ImageSizeModel }>({})

  useEffect(() => {
    iconUrls?.forEach((url) => {
      const image = new window.Image()
      image.src = url
      image.onload = () => handleImageLoad(url, image)
    })
  }, [iconUrls])

  const handleImageLoad = (url: string, image: HTMLImageElement) => {
    setImageSizes((prev) => ({
      ...prev,
      [url]: { width: image.width, height: image.height },
    }))
  }

  if (iconUrls?.length === 0 || iconNames?.length === 0) return null

  return (
    <div className={cx('icon-container')}>
      {iconUrls?.map((url, idx) => {
        const name = iconNames?.[idx]

        if (!url || !name) return null
        const size = imageSizes[url] || { width: 20, height: 20 }
        return (
          <div key={url} className={cx('icon-wrapper')}>
            <div
              className={cx('icon')}
              style={{
                width: `${size.width}px`,
                height: `${size.height}px`,
              }}
              data-tooltip-id={name}
              data-tooltip-content={name}
              data-tooltip-class-name="tooltip"
            >
              <Image src={url} alt={name} fill />
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
