'use client'

import { CSSProperties, ReactNode, createContext } from 'react'

import { CheckboxIcon, ChevronDownIcon, ChevronUpIcon } from '@/public/icons'
import classNames from 'classnames/bind'

import styles from './dropdown.module.scss'
import { useDropdown } from './hooks/use-dropdown'
import { useDropdownContext } from './hooks/use-dropdown-context'
import RangeOption from './option/range-option'

const cx = classNames.bind(styles)

interface DropdownContextProps {
  isOpen: boolean
  toggleOpen: () => void
  selectedValues: string[]
  handleSelect: (value: string) => void
}

const defaultContext = {
  isOpen: false,
  toggleOpen: () => {},
  selectedValues: [],
  handleSelect: () => {},
}

export const DropdownContext = createContext<DropdownContextProps>(defaultContext)

export interface DropdownProps {
  Trigger: ReactNode
  onChange?: (value: string | string[]) => void
  isMultiple: boolean
  containerStyle?: CSSProperties
  labelStyle?: CSSProperties
  children?: ReactNode
}

const Dropdown = ({
  Trigger,
  onChange,
  isMultiple = false,
  containerStyle,
  labelStyle,
  children,
}: DropdownProps) => {
  const { isOpen, toggleOpen, selectedValues, handleSelect, dropdownRef } = useDropdown({
    onChange,
    isMultiple,
  })

  return (
    <DropdownContext.Provider value={{ isOpen, toggleOpen, selectedValues, handleSelect }}>
      <div style={containerStyle} ref={dropdownRef}>
        <button onClick={toggleOpen} className={cx('container', 'trigger')} style={labelStyle}>
          {Trigger}
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
        {isOpen && <ul className={cx('options')}>{children}</ul>}
      </div>
    </DropdownContext.Provider>
  )
}
interface ItemProps {
  value: string
  label: string
  hasCheck?: boolean
  isMultiple?: boolean
  style?: CSSProperties
}

const Item = ({ value, label, hasCheck = false, style }: ItemProps) => {
  const context = useDropdownContext()

  const { handleSelect, selectedValues } = context
  const isSelected = selectedValues.includes(value)

  return (
    <li
      className={cx('container', 'option', { selected: isSelected })}
      style={style}
      onClick={() => handleSelect(value)}
      aria-hidden
    >
      {label}
      {hasCheck && <CheckboxIcon className={cx('icon', { 'selected-icon': isSelected })} />}
    </li>
  )
}

export default Object.assign(Dropdown, { Item, RangeOption })
