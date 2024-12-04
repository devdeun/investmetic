'use client'

import { Button } from '@/shared/ui/button'
import BackHeader from '@/shared/ui/header/back-header'
import Title from '@/shared/ui/title'

import InputField from './_ui/input-field'

const AdminNoticePostPage = () => {
  return (
    <>
      <BackHeader label="공지사항으로 돌아가기" />
      {/* TODO: inline css 제거 */}
      <Title label="공지사항 등록" style={{ margin: '0 0 26px 12.6px' }} />
      <div
        style={{
          padding: '0 45px 37px',
          borderRadius: '8px',
          marginBottom: '42px',
          backgroundColor: 'aliceblue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* TODO: 디자인 계속 바뀌는 느낌이라서 일단 가운데 정렬 해둠 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '795px',
              backgroundColor: 'aliceblue',
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
            }}
          >
            <InputField label="제목" inputType="text" placeholder="제목을 입력하세요." />
            <InputField label="내용" inputType="textArea" placeholder="내용을 입력하세요." />
            <InputField label="파일첨부" inputType="file" />
          </div>
          <Button.ButtonGroup>
            {/* TODO: onclick 로직 정의 */}
            <Button size="small" onClick={() => {}}>
              수정
            </Button>
            <Button size="small" onClick={() => {}} variant="filled">
              삭제
            </Button>
          </Button.ButtonGroup>
        </div>
      </div>
    </>
  )
}

export default AdminNoticePostPage
