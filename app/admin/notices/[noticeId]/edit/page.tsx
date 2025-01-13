'use client'

import { useEffect } from 'react'

import { useParams } from 'next/navigation'

import useNoticeDetail from '@/app/(landing)/notices/_hooks/use-notice-detail'
import FileInput from '@/app/admin/_ui/file-input'
import InputField from '@/app/admin/_ui/input-field'
import classNames from 'classnames/bind'

import { Button } from '@/shared/ui/button'
import BackHeader from '@/shared/ui/header/back-header'
import Input from '@/shared/ui/input'
import Textarea from '@/shared/ui/textarea'
import Title from '@/shared/ui/title'

import NoticeFileItem from '../../_ui/notice-file-item'
import useNoticeForm from '../../post/_hooks/use-notice-form'
import usePatchNotice from './_hooks/query/use-patch-notice'
import styles from './page.module.scss'

const cx = classNames.bind(styles)

const AdminNoticeEditPage = () => {
  const { noticeId } = useParams()
  const { data } = useNoticeDetail(Number(noticeId as string))
  const { formData, setFormData, onInputChange } = useNoticeForm()
  const { mutate } = usePatchNotice(formData, Number(noticeId as string))

  useEffect(() => {
    if (data) {
      setFormData({
        title: data.title || '',
        content: data.content || '',
        existingFiles: data.files || [],
      })
    }
  }, [data, setFormData])

  const handleDeleteFile = (id: number | string) => {
    if (typeof id === 'number') {
      setFormData((prev) => ({
        ...prev,
        existingFiles: prev.existingFiles?.filter((file) => file.noticeFileId !== id),
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        newFiles: prev.newFiles?.filter((file) => file.name !== id),
      }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || [])

    const hasDuplicateFile = (file: File) => {
      return (
        formData.existingFiles?.some((existingFile) => existingFile.fileName === file.name) ||
        formData.newFiles?.some((newFile) => newFile.name === file.name)
      )
    }

    const uniqueFiles = selectedFiles.filter((file) => !hasDuplicateFile(file))
    const duplicateFiles = selectedFiles.filter((file) => hasDuplicateFile(file))

    if (duplicateFiles.length > 0) {
      alert('이미 추가된 파일이 있습니다.')
      return
    }

    if (uniqueFiles.length > 0) {
      onInputChange('newFiles', [...(formData.newFiles || []), ...uniqueFiles])
    }

    e.target.value = ''
  }

  return (
    <>
      <BackHeader label="공지사항으로 돌아가기" />
      <Title label="공지사항 수정" style={{ margin: '0 0 26px 12.6px' }} />
      <div className={cx('container')}>
        <form
          className={cx('form')}
          onSubmit={(e) => {
            e.preventDefault()
            mutate()
          }}
        >
          <div className={cx('input-field')}>
            <InputField
              label="제목"
              Input={
                <Input
                  type="text"
                  inputSize="full"
                  placeholder="제목을 입력하세요."
                  value={formData.title}
                  onChange={(e) => onInputChange('title', e.target.value)}
                />
              }
            />
            <InputField
              label="내용"
              Input={
                <Textarea
                  className={cx('textarea')}
                  placeholder="내용을 입력하세요."
                  value={formData.content}
                  onChange={(e) => onInputChange('content', e.target.value)}
                />
              }
            />
            <InputField
              label="파일첨부"
              Input={
                <FileInput className={cx('file-input')} onChange={handleFileChange} multiple />
              }
            />
            <div className={cx('notice-files-container')}>
              {formData.existingFiles && formData.existingFiles.length > 0 && (
                <ul className={cx('notice-file-list')}>
                  {formData.existingFiles.map((file) => (
                    <NoticeFileItem
                      key={file.noticeFileId}
                      id={file.noticeFileId}
                      name={file.fileName}
                      onDeleteFile={handleDeleteFile}
                    />
                  ))}
                </ul>
              )}
              {formData.newFiles && formData.newFiles.length > 0 && (
                <ul className={cx('notice-file-list')}>
                  {formData.newFiles.map((file) => (
                    <NoticeFileItem
                      key={file.name}
                      id={file.name}
                      name={file.name}
                      onDeleteFile={handleDeleteFile}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>
          <Button size="small" type="submit" variant="filled">
            공지 수정하기
          </Button>
        </form>
      </div>
    </>
  )
}

export default AdminNoticeEditPage
