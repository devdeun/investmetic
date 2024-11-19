'use client'

import { CSSProperties, ReactNode, createContext } from 'react'

import { CheckboxIcon, ChevronDownIcon, ChevronUpIcon } from '@/public/icons'
import classNames from 'classnames/bind'

import { useDropdown } from './hooks/use-dropdown'
import { useDropdownContext } from './hooks/use-dropdown-context'
import RangeOption from './option/range-option'
import styles from './styles.module.scss'
import { DropdownItemProps, DropdownValueType } from './types'

const cx = classNames.bind(styles)

interface DropdownContextProps {
  isOpen: boolean
  toggleOpen: () => void
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
  value: DropdownValueType
  onChange: (value: DropdownValueType) => void
  isMultiple: boolean
  containerStyle?: CSSProperties
  labelStyle?: CSSProperties
  children?: ReactNode
}

const Dropdown = ({
  Trigger,
  value,
  onChange,
  isMultiple = false,
  containerStyle,
  labelStyle,
  children,
}: DropdownProps) => {
  const { isOpen, toggleOpen, handleSelect, dropdownRef } = useDropdown({
    value,
    onChange,
    isMultiple,
  })

  return (
    <DropdownContext.Provider value={{ isOpen, toggleOpen, handleSelect }}>
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

const Item = ({ isSelected, value, label, hasCheck = false, style }: DropdownItemProps) => {
  const context = useDropdownContext()

  const { handleSelect } = context

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
