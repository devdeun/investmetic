import { useRouter } from 'next/navigation'

import { NoticeFormModel } from '@/app/admin/notices/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import axiosInstance from '@/shared/api/axios'
import uploadFileWithPresignedUrl from '@/shared/utils/upload-file-with-presigned-url'

import { PatchNoticeResponeseModel } from '../../types'

const usePatchNotice = (formData: NoticeFormModel, noticeId: string) => {
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      // Presigned URL 요청
      const uploadResponse = await axiosInstance.patch<PatchNoticeResponeseModel>(
        `/api/admin/notices/${noticeId}`,
        {
          title: formData.title,
          content: formData.content,
          filePaths: formData?.files?.map((file) => file.name) ?? [],
          sizes: formData?.files?.map((file) => file.size) ?? [],
        }
      )

      const { files } = formData
      if (!files) return

      const presignedUrls = uploadResponse.data.result

      await uploadFileWithPresignedUrl(files, presignedUrls)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['notices'],
      })
      router.replace('/admin/notices')
    },
  })
}

export default usePatchNotice
