import { useState } from 'react'

import { tabs } from '../constants'

const useAdminStrategiesPage = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const [inputValue, setInputValue] = useState('')
  const [keyword, setKeyword] = useState('')

  const setConditionAndKeyword = () => {
    setKeyword(inputValue)
  }

  return {
    tabs,
    activeTab,
    setActiveTab,
    inputValue,
    setInputValue,
    keyword,
    setKeyword,
    setConditionAndKeyword,
  }
}

export default useAdminStrategiesPage
