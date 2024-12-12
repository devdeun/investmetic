import { useRouter } from 'next/navigation'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import axiosInstance from '@/shared/api/axios'

import { NoticeFormModel, PostNoticeResopnseModel } from '../../types'

const usePostNotice = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

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
      try {
        await Promise.all(
          files.map((file, idx) => {
            if (presignedUrls[idx]) {
              return fetch(presignedUrls[idx], {
                method: 'PUT',
                body: file,
                headers: {
                  'Content-Type': file.type,
                },
              })
            } else {
              throw new Error(`Presigned URL이 인덱스 ${idx}에 대해 없습니다.`)
            }
          })
        )
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(`File upload failed: ${err.message}`)
        }
        throw err
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['notices'],
      })
      router.replace('/admin/notices')
    },
  })
}

export default usePostNotice
