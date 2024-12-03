'use client'

import { Suspense, useState } from 'react'

import Tabs from '@/shared/ui/tabs'

import QuestionsTabContent from '../questions-tab-content'

const QuestionsTab = () => {
  const [activeTab, setActiveTab] = useState('all')

  const TABS = [
    {
      id: 'all',
      label: '모든 질문',
      content: (
        <Suspense>
          <QuestionsTabContent
            options={{
              stateCondition: 'ALL',
            }}
          />
        </Suspense>
      ),
    },
    {
      id: 'waiting',
      label: '답변 대기',
      content: (
        <Suspense>
          <QuestionsTabContent
            options={{
              stateCondition: 'WAITING',
            }}
          />
        </Suspense>
      ),
    },
    {
      id: 'completed',
      label: '답변 완료',
      content: (
        <Suspense>
          <QuestionsTabContent
            options={{
              stateCondition: 'COMPLETED',
            }}
          />
        </Suspense>
      ),
    },
  ]

  return <Tabs activeTab={activeTab} onTabChange={setActiveTab} tabs={TABS} />
}

export default QuestionsTab
