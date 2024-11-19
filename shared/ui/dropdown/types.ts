import { CSSProperties } from 'react'

export interface DropdownOptionModel {
  value: string
  label: string
}

export type DropdownValueType = string | string[] | null

export interface DropdownItemProps {
  value: string
  label: string
  isSelected: boolean
  hasCheck?: boolean
  isMultiple?: boolean
  style?: CSSProperties
}

export interface DropdownStateModel {
  value: DropdownValueType
  onChange?: (value: DropdownValueType) => void
}
