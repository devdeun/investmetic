import { useRouter } from 'next/navigation'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import axiosInstance from '@/shared/api/axios'
import { QUERY_KEY } from '@/shared/constants/query-key'
import uploadFileWithPresignedUrl from '@/shared/utils/upload-file-with-presigned-url'

import { NoticeFormModel } from '../../../types'
import { PostNoticeResopnseModel } from '../../types'

const usePostNotice = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (formData: NoticeFormModel) => {
      // Presigned URL 요청`
      const uploadResponse = await axiosInstance.post<PostNoticeResopnseModel>(
        '/api/admin/notices',
        {
          title: formData.title,
          content: formData.content,
          filePaths: formData?.newFiles?.map((file) => file.name) ?? [],
          sizes: formData?.newFiles?.map((file) => file.size) ?? [],
        }
      )

      const { newFiles } = formData
      if (!newFiles) return

      const presignedUrls = uploadResponse.data.result

      await uploadFileWithPresignedUrl(newFiles, presignedUrls)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.NOTICES],
      })
      router.replace('/admin/notices')
    },
  })
}

export default usePostNotice
