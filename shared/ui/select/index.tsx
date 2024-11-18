'use client'

import { CSSProperties } from 'react'

import Dropdown from '../dropdown'

interface OptionModel {
  value: string
  label: string
}

interface SelectProps {
  title?: string
  isRounded?: boolean
  isMultiple?: boolean
  hasCheck?: boolean
  containerStyle?: CSSProperties
  titleStyle?: CSSProperties
  onChange?: (value: string | string[]) => void
  options: OptionModel[]
}

const Select = ({
  isRounded = false,
  isMultiple = false,
  hasCheck = false,
  containerStyle,
  titleStyle,
  onChange,
  options,
  title = options[0].label,
}: SelectProps) => {
  if (!options.length) return null

  const roundStyle = { borderRadius: '40px', overflow: 'hidden' }
  const labelStyle = isRounded ? { ...roundStyle, ...titleStyle } : titleStyle

  return (
    <Dropdown
      Trigger={<span>{title}</span>}
      isMultiple={isMultiple}
      onChange={onChange}
      containerStyle={containerStyle}
      labelStyle={labelStyle}
    >
      {options.map(({ value, label }) => (
        <Dropdown.Item
          value={value}
          label={label}
          isMultiple={isMultiple}
          hasCheck={hasCheck}
          key={label}
        />
      ))}
    </Dropdown>
  )
}

export default Select
