import { useMutation, useQueryClient } from '@tanstack/react-query'

import patchProfile from '../../_api/patch-user-profile'

export interface UserProfileModel {
  nickname?: string | null
  password?: string | null
  imageDto?: {
    imageName: string
    size: number
  } | null
  phone?: string | null
  email?: string | null
  imageChange: boolean
}

interface UpdateProfileModel {
  profileData: UserProfileModel
  imageFile?: File | null
}

interface PatchProfileResponseModel {
  isSuccess: boolean
  message: string
  result: string
  code: number
}
interface UserProfileDataModel {
  nickname: string
  imageUrl: string | null
  phone: string | null
  email: string
}

const usePatchUserProfile = () => {
  const queryClient = useQueryClient()

  return useMutation<PatchProfileResponseModel, Error, UpdateProfileModel>({
    mutationFn: async ({ profileData, imageFile }: UpdateProfileModel) => {
      try {
        const updateData = {
          ...profileData,
          ...(imageFile && {
            imageDto: {
              imageName: imageFile.name,
              size: imageFile.size,
            },
          }),
        }

        const profileResponse = await patchProfile(updateData)

        if (imageFile && profileResponse.result) {
          await fetch(profileResponse.result, {
            method: 'PUT',
            body: imageFile,
            headers: {
              'Content-Type': imageFile.type,
            },
          })
        }

        return profileResponse
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(`프로필 업데이트 실패: ${error.message}`)
        }
        throw error
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['userProfile'] })

      if (data.result) {
        const imageUrl = data.result.split('?')[0]
        queryClient.setQueryData<UserProfileDataModel>(['userProfile'], (oldData) => {
          if (!oldData) return oldData
          return {
            ...oldData,
            imageUrl,
          }
        })
      }
    },
    onError: (error: Error) => {
      console.error('프로필 업데이트 실패:', error.message)
    },
  })
}

export default usePatchUserProfile
