import { APIResponseBaseModel } from '@/shared/types/response'

// eslint-disable-next-line
export interface DeleteNoticeResponeseModel extends APIResponseBaseModel<boolean> {}

export interface NoticeFormModel {
  title: string
  content: string
  files?: File[]
}
