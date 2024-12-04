'use client'

import { useState } from 'react'

import Image from 'next/image'

import classNames from 'classnames/bind'

import { ACCOUNT_PAGE_COUNT } from '@/shared/constants/count-per-page'
import useModal from '@/shared/hooks/custom/use-modal'
import { Button } from '@/shared/ui/button'
import AccountImageModal from '@/shared/ui/modal/account-image-modal'
import Pagination from '@/shared/ui/pagination'
import sliceArray from '@/shared/utils/slice-array'

import useGetAccountImages from '../../strategies/[strategyId]/_hooks/query/use-get-account-images'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface ImageDataModel {
  id: number
  imageUrl: string
  title: string
}

interface Props {
  strategyId: number
  currentPage: number
  onPageChange: (page: number) => void
  isEditable?: boolean
}

const AccountContent = ({ strategyId, currentPage, onPageChange, isEditable = false }: Props) => {
  const [selectedImage, setSelectedImage] = useState<ImageDataModel | null>(null)
  const { isModalOpen, openModal, closeModal } = useModal()
  const { data } = useGetAccountImages(strategyId)

  const handleOpenModal = (image: ImageDataModel) => {
    setSelectedImage(image)
    openModal()
  }

  if (!data || !Array.isArray(data.content)) return <></>

  const imagesData = data.content
  const croppedImagesData: ImageDataModel[] = sliceArray(
    imagesData ?? [],
    ACCOUNT_PAGE_COUNT,
    currentPage
  )

  const isTwoLines = (croppedImagesData?.length || 0) > 4

  return (
    <div className={cx('table-wrapper')}>
      {isEditable && (
        <div className={cx('edit-button-container')}>
          <Button size="small" className={cx('edit-button')} variant="filled">
            실계좌 이미지 업로드
          </Button>
          <Button size="small" className={cx('delete-button')} variant="outline">
            선택 삭제
          </Button>
        </div>
      )}
      {croppedImagesData && croppedImagesData.length !== 0 ? (
        <>
          <div className={cx('account-images-container', isTwoLines && 'line')}>
            {croppedImagesData?.map((imageData: ImageDataModel) => (
              <div
                key={imageData.imageUrl}
                className={cx('image-data')}
                onClick={() => handleOpenModal(imageData)}
              >
                <div className={cx('image')}>
                  <Image src={imageData.imageUrl} alt={imageData.title} fill sizes="100%" />
                </div>
                <span>{imageData.title}</span>
              </div>
            ))}
          </div>
          {imagesData && (
            <Pagination
              currentPage={currentPage}
              maxPage={data.totalPages}
              onPageChange={onPageChange}
            />
          )}
        </>
      ) : (
        <div className={cx('no-data')}>
          <p>업데이트 된 실거래계좌 이미지가 없습니다.</p>
        </div>
      )}
      {selectedImage && (
        <AccountImageModal
          isOpen={isModalOpen}
          url={selectedImage.imageUrl}
          title={selectedImage.title}
          onClose={closeModal}
        />
      )}
    </div>
  )
}

export default AccountContent
