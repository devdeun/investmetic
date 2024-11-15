import classNames from 'classnames/bind'

import TabButton from '@/shared/ui/tabs/tab-button'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

export interface TabItemModel {
  id: string
  label: string
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
  content: React.ReactElement
}

interface Props {
  tabs: TabItemModel[]
  activeTab: string
  onTabChange: (id: string) => void
}

const Tabs = ({ tabs, activeTab, onTabChange }: Props) => {
  return (
    <>
      <ul className={cx('tab-list')}>
        {tabs.map(({ id, label, icon: Icon }) => (
          <li key={id}>
            <TabButton isActive={id === activeTab} onClick={() => onTabChange(id)}>
              {Icon && <Icon className={cx('icon')} />}
              {label}
            </TabButton>
          </li>
        ))}
      </ul>
      <div>{tabs.find((tab) => tab.id === activeTab)?.content}</div>
    </>
  )
}

export default Tabs
