'use client'

import NoticeDetail from '../../_ui/notice-detail'

const NoticeDetailPage = ({ params }: { params: { noticeId: string } }) => {
  return <NoticeDetail noticeId={params.noticeId} />
}

export default NoticeDetailPage
