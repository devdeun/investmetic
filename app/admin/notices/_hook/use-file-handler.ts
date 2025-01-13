import { SetStateAction } from 'react'

import { NoticeFileModel, NoticeFormModel } from '../types'

interface UseFileHandlerProps {
  formData: NoticeFormModel
  setFormData: React.Dispatch<SetStateAction<NoticeFormModel>>
  onInputChange: (name: keyof NoticeFormModel, value: string | File[] | NoticeFileModel[]) => void
}

const useFileHandler = ({ formData, setFormData, onInputChange }: UseFileHandlerProps) => {
  const hasDuplicateFile = (file: File) => {
    return (
      formData.existingFiles?.some((existingFile) => existingFile.fileName === file.name) ||
      formData.newFiles?.some((newFile) => newFile.name === file.name)
    )
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || [])

    const uniqueFiles = selectedFiles.filter((file) => !hasDuplicateFile(file))
    const duplicateFiles = selectedFiles.filter((file) => hasDuplicateFile(file))

    if (duplicateFiles.length > 0) {
      alert('이미 추가된 파일입니다.')
    }

    if (uniqueFiles.length > 0) {
      onInputChange('newFiles', [...(formData.newFiles || []), ...uniqueFiles])
    }

    e.target.value = ''
  }

  const handleDeleteFile = (id: number | string) => {
    if (typeof id === 'number') {
      setFormData((prev) => ({
        ...prev,
        existingFiles: prev.existingFiles?.filter((file) => file.noticeFileId !== id),
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        newFiles: prev.newFiles?.filter((file) => file.name !== id),
      }))
    }
  }

  return {
    handleFileChange,
    handleDeleteFile,
  }
}

export default useFileHandler
