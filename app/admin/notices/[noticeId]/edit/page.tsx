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

import useNoticeForm from '../../post/_hooks/use-notice-form'
import usePatchNotice from './_hooks/query/use-patch-notice'
import styles from './page.module.scss'

const cx = classNames.bind(styles)

const AdminNoticeEditPage = () => {
  const { noticeId } = useParams()
  const { data } = useNoticeDetail(Number(noticeId as string))
  const { formData, setFormData, onInputChange } = useNoticeForm(data)
  const { mutate } = usePatchNotice(formData, noticeId as string)

  useEffect(() => {
    if (data) {
      setFormData({
        title: data.title || '',
        content: data.content || '',
      })
    }
  }, [data, setFormData])

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
                <FileInput
                  className={cx('file-input')}
                  onChange={(e) => onInputChange('files', Array.from(e.target.files || []))}
                  multiple
                />
              }
            />
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
