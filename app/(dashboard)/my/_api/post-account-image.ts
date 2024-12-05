import axiosInstance from 'shared/api/axios'

interface UploadAccountImagesRequestModel {
  fileName: string
  fileSize: number
  title: string
}

interface UploadAccountImagesResponseModel {
  isSuccess: boolean
  message: string
  result: {
    presignedUrls: {
      presignedUrl: string
    }[]
  }
  code: number
}

export const uploadAccountImages = async (
  strategyId: number,
  data: UploadAccountImagesRequestModel[]
): Promise<UploadAccountImagesResponseModel> => {
  const response = await axiosInstance.post(`/api/my-strategies/${strategyId}/account-images`, data)
  return response.data
}
