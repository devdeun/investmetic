import { useState } from 'react'

import { NoticeFormModel } from '../../types'

const useNoticeForm = (
  initialValue = {
    title: '',
    content: '',
    // files: [],
  }
) => {
  const [formData, setFormData] = useState<NoticeFormModel>(initialValue)

  const onInputChange = (name: keyof NoticeFormModel, value: string | File[]) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return {
    formData,
    setFormData,
    onInputChange,
  }
}

export default useNoticeForm
