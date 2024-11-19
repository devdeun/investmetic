import { useEffect, useRef, useState } from 'react'

import { DropdownStateModel, DropdownValueType } from '../types'

interface UseDropdownProps extends DropdownStateModel {
  isMultiple?: boolean
}

export const useDropdown = ({ isMultiple = false, value, onChange }: UseDropdownProps) => {
  if (isMultiple && typeof value === 'string') {
    throw new Error('multiple 옵션은 객체 value와 사용해야합니다.')
  }

  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleOpen = () => setIsOpen((prev) => !prev)

  const handleSelect = (selectedValue: string) => {
    let result: DropdownValueType = selectedValue

    if (isMultiple && Array.isArray(value)) {
      result = value.includes(selectedValue)
        ? value.filter((v) => v !== selectedValue)
        : [...value, selectedValue]
    }

    onChange?.(result)
    if (!isMultiple) setIsOpen(false)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return {
    isOpen,
    toggleOpen,
    handleSelect,
    dropdownRef,
  }
}
