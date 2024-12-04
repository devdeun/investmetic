import axiosInstance from '@/shared/api/axios'

import { downloadFile } from './helper-download-file'

const getAnalysisDownload = async (strategyId: number, type: 'daily' | 'monthly') => {
  try {
    const response = await axiosInstance.get(
      `/api/strategies/${strategyId}/${type}-analysis/download`,
      {
        responseType: 'blob',
      }
    )
    const blob = new Blob([response.data], { type: response.headers['content-type'] })
    const url = window.URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    const contentDisposition = response.headers['content-disposition']

    downloadFile(blob, contentDisposition, `${type}_분석자료`)
  } catch (err) {
    console.error(err)
  }
}

export default getAnalysisDownload
