import { useMutation } from '@tanstack/react-query'

import axiosInstance from '@/shared/api/axios'

import { NoticeFormModel, PostNoticeResopnseModel } from '../../types'

const usePostNotice = () => {
  return useMutation({
    mutationFn: async (formData: NoticeFormModel) => {
      // Presigned URL 요청
      const { files } = formData
      if (!files) return

      const uploadResponse = await axiosInstance.post<PostNoticeResopnseModel>(
        '/api/admin/notices',
        {
          title: formData.title,
          content: formData.content,
          filePaths: formData?.files?.map((file) => file.name) ?? null,
          sizes: formData?.files?.map((file) => file.size) ?? null,
        }
      )

      const presignedUrls = uploadResponse.data.result

      // Presigned URL로 파일 업로드
      await Promise.all(
        files.map((file, idx) => {
          if (presignedUrls[idx]) {
            return axiosInstance.put(presignedUrls[idx], file)
          } else {
            throw new Error(`Presigned URL이 인덱스 ${idx}에 대해 없습니다.`)
          }
        })
      )
    },
  })
}

export default usePostNotice
