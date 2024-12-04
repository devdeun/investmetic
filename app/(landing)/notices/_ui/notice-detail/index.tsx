'use client'

import { DownloadIcon } from '@/public/icons'
import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  title: React.ReactNode
  date: string
  children?: React.ReactNode
  hasAttachFile?: boolean
}

const NoticeDetail = ({ title, date, children, hasAttachFile = true }: Props) => {
  const handleSave = () => {}
  return (
    <div className={cx('container')}>
      <div className={cx('title-wrapper')}>
        <div className={cx('title')}>{title}</div>
        <div className={cx('date')}>{date}</div>
      </div>
      <div className={cx('top-line')}></div>
      <div className={cx('content')}>{children}</div>
      <div className={cx('bottom-line')}></div>

      {hasAttachFile && (
        <div className={cx('attach-file')}>
          <div className={cx('file-left-wrapper')}>
            <p className={cx('file-count')}>첨부 {'5'}개</p>{' '}
          </div>
          <div className={cx('file-right-wrapper')}>
            <div className={cx('file-wrapper')}>
              <div className={cx('file-title')} onClick={handleSave}>
                {'파일제목1.pdf'}
              </div>
              <DownloadIcon className={cx('file-download')} onClick={handleSave} />
            </div>

            <div className={cx('file-wrapper')}>
              <div className={cx('file-title')} onClick={handleSave}>
                {'파일제목2.pdf'}
              </div>
              <DownloadIcon className={cx('file-download')} onClick={handleSave} />
            </div>
            <div className={cx('file-wrapper')}>
              <div className={cx('file-title')} onClick={handleSave}>
                {'파일제목3.pdf'}
              </div>
              <DownloadIcon className={cx('file-download')} onClick={handleSave} />
            </div>
            <div className={cx('file-wrapper')}>
              <div className={cx('file-title')} onClick={handleSave}>
                {'파일제목4.pdf'}
              </div>
              <DownloadIcon className={cx('file-download')} onClick={handleSave} />
            </div>
            <div className={cx('file-wrapper')}>
              <div className={cx('file-title')} onClick={handleSave}>
                {'파일제목5.pdf'}
              </div>
              <DownloadIcon className={cx('file-download')} onClick={handleSave} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NoticeDetail
