'use client'

import { CSSProperties } from 'react'

import Image, { StaticImageData } from 'next/image'

import { ProfileIcon } from '@/public/icons'
import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

type AvatarSizeType = 'small' | 'medium' | 'large'

interface Props {
  src?: string | StaticImageData
  size?: AvatarSizeType
  avatarStyle?: CSSProperties
}

const Avatar = ({ src, size = 'small', avatarStyle }: Props) => {
  return (
    <div className={cx('avatar', size, avatarStyle)}>
      {src ? <Image src={src} alt="프로필" fill /> : <ProfileIcon />}
    </div>
  )
}

export default Avatar
