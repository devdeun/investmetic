// import axiosInstance from '@/shared/api/axios'

// interface ImageDto {
//   imageName: string
//   size: number
// }

// interface PatchUserProfileRequest {
//   nickname: string
//   password: string | null
//   email?: string
//   phone: string
//   imageChange: boolean
//   imageDto?: ImageDto
// }

// interface PatchUserProfileResponse {
//   isSuccess: boolean
//   message: string
//   data?: {
//     presignedUrl?: string
//   }
// }

// const patchUserProfile = async (userId: number, profileData: PatchUserProfileRequest) => {
//   try {
//     const response = await axiosInstance.patch<PatchUserProfileResponse>(
//       `/api/users/mypage/profile`,
//       profileData
//     )
//     return response.data.result
//   } catch (err) {
//     console.error('Error updating user profile:', err)
//     throw err
//   }
// }

// export default patchUserProfile
