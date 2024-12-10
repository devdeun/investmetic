import { APIResponseBaseModel } from '@/shared/types/response'

export interface NoticeFormModel {
  title: string
  content: string
  files?: File[]
}

export interface PostNoticeResopnseModel extends APIResponseBaseModel<boolean> {
  result: string[]
}
