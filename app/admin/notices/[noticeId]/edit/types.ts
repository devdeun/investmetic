import { APIResponseBaseModel } from '@/shared/types/response'

export interface PatchNoticeResponeseModel extends APIResponseBaseModel<boolean> {
  result: string[]
}
