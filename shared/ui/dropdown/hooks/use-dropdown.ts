import { useEffect, useRef, useState } from 'react'

interface UseDropdownProps {
  onChange?: (value: string | string[]) => void
  isMultiple?: boolean
}

export const useDropdown = ({ onChange, isMultiple = false }: UseDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValues, setSelectedValues] = useState<string[]>([])
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleOpen = () => setIsOpen((prev) => !prev)

  const handleSelect = (value: string) => {
    if (isMultiple) {
      // 다중 선택 모드
      setSelectedValues((prev) => {
        if (prev.includes(value)) {
          const result = prev.filter((item) => item !== value)
          onChange?.(result)
          return result
        }
        const result = [...prev, value]
        onChange?.(result)
        return result
      })
    } else {
      // 단일 선택 모드
      switchValue(value)
    }
  }

  const switchValue = (value: string) => {
    setSelectedValues((prev) => {
      const result = prev[0] === value ? [] : [value]
      onChange?.(result)
      return result
    })
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
    selectedValues,
    handleSelect,
    switchValue,
    dropdownRef,
  }
}
