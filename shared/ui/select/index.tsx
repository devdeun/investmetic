'use client'

// TODO: muliple 일 때는 상단에 placeholder를 그대로 둘지 고민
import { CSSProperties } from 'react'

import Dropdown, { DropdownProps } from '../dropdown'
import { DropdownItemProps, DropdownOptionModel, DropdownValueType } from '../dropdown/types'
import { useSelect } from './hooks/useSelect'

export type SelectType = Pick<DropdownProps, 'isMultiple' | 'containerStyle' | 'labelStyle'> &
  Pick<DropdownItemProps, 'hasCheck'> & {
    placeholder?: string
    value: DropdownValueType
    onChange: (value: DropdownValueType) => void
    isRounded?: boolean
    titleStyle?: CSSProperties
    options: DropdownOptionModel[]
  }

const Select = ({
  isRounded = false,
  isMultiple = false,
  hasCheck = false,
  containerStyle,
  titleStyle,
  placeholder,
  value,
  onChange,
  options,
}: SelectType) => {
  const { isSelected, findLabel } = useSelect()

  if (!options.length) return null

  const roundStyle = { borderRadius: '40px', overflow: 'hidden' }
  const placeholderStyle = isRounded ? { ...roundStyle, ...titleStyle } : titleStyle

  return (
    <Dropdown
      Trigger={<span>{findLabel(options, value) ?? placeholder ?? options[0].label}</span>}
      isMultiple={isMultiple}
      value={value}
      onChange={onChange}
      containerStyle={containerStyle}
      labelStyle={placeholderStyle}
    >
      {options.map(({ value: itemValue, label }) => (
        <Dropdown.Item
          value={itemValue}
          label={label}
          isSelected={isSelected(value, itemValue)}
          isMultiple={isMultiple}
          hasCheck={hasCheck}
          key={placeholder}
        />
      ))}
    </Dropdown>
  )
}

export default Select
