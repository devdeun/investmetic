import { AxiosError } from 'axios'

import axiosInstance from '@/shared/api/axios'

import { downloadFile, extractFileName } from './helper-download-file'

const getProposalDownload = async (strategyId: number, name: string) => {
  try {
    const response = await axiosInstance.get(`/api/my-strategies/${strategyId}/download-proposal`, {
      responseType: 'blob',
    })
    const mimeType = response.headers['content-type'] || 'application/octet-stream'
    const blob = new Blob([response.data], { type: mimeType })
    const contentDisposition = response.headers['content-disposition']

    const fileName = extractFileName(contentDisposition, `${name}_제안서`)

    downloadFile(blob, fileName)
  } catch (err) {
    throw new Error('분석자료 다운 실패', err as AxiosError)
  }
}

export default getProposalDownload
