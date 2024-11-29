'use client'

import { useState } from 'react'

import Tabs from '@/shared/ui/tabs'

import QuestionsTabContent from '../questions-tab-content'

const QuestionsTab = () => {
  const [activeTab, setActiveTab] = useState('all')

  const TABS = [
    {
      id: 'all',
      label: '모든 질문',
      content: <QuestionsTabContent options="all" />,
    },
    {
      id: 'waiting',
      label: '답변 대기',
      content: <QuestionsTabContent options="waiting" />,
    },
    {
      id: 'complete',
      label: '답변 완료',
      content: <QuestionsTabContent options="complete" />,
    },
  ]

  return <Tabs activeTab={activeTab} onTabChange={setActiveTab} tabs={TABS} />
}

export default QuestionsTab
