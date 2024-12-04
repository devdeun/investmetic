'use client'

import { DownloadIcon } from '@/public/icons'
import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const NoticeDetail = () => {
  // TODO: 임시데이터 제거
  const data = {
    title: '공지사항 제목입니다.',
    createdAd: '2024-12-05',
    content: '이것은 공지사항의 내용입니다. 자세한 사항은 첨부 파일을 확인하세요.',
    attachments: [
      { title: '파일제목1.pdf', url: '/path/to/file1.pdf' },
      { title: '파일제목2.pdf', url: '/path/to/file2.pdf' },
      { title: '파일제목3.pdf', url: '/path/to/file3.pdf' },
      { title: '파일제목4.pdf', url: '/path/to/file4.pdf' },
      { title: '파일제목5.pdf', url: '/path/to/file5.pdf' },
    ],
  }

  const handleSave = () => {}

  return (
    <div className={cx('container')}>
      <div className={cx('title-wrapper')}>
        <div className={cx('title')}>{data.title}</div>
        <div className={cx('date')}>{data.createdAd}</div>
      </div>
      <div className={cx('top-line')}></div>
      <div className={cx('content')}>{data.content}</div>
      <div className={cx('bottom-line')}></div>

      <div className={cx('attach-file')}>
        <div className={cx('file-left-wrapper')}>
          <p className={cx('file-count')}>첨부 {data.attachments.length}개</p>
        </div>
        <div className={cx('file-right-wrapper')}>
          {data.attachments.map((file, index) => (
            <div className={cx('file-wrapper')} key={index}>
              <div className={cx('file-title')} onClick={() => handleSave}>
                {file.title}
              </div>
              <DownloadIcon className={cx('file-download')} onClick={() => handleSave} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NoticeDetail
