// import { useMutation, useQueryClient } from '@tanstack/react-query'

// import patchProfile from '../../_api/patch-profile'

// interface PatchUserProfileData {
//   nickname: 'string'
//   password: 'string'
//   imageDto: {
//     imageName: 'string'
//     size: 2097152
//   }
//   phone: 'string'
//   email: 'string'
//   imageChange: true
// }

// const usePatchUserProfile = () => {
//   const queryClient = useQueryClient()

//   return useMutation({
//     mutationFn: ({ userId, profileData }: PatchUserProfileData) =>
//       patchProfile(userId, profileData),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['userProfile'] })
//     },
//     onError: (error) => {
//       console.error('Error updating user profile:', error)
//     },
//   })
// }

// export default usePatchUserProfile
