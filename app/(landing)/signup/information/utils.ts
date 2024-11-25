export const generateYearOptions = () => {
  const currentYear = new Date().getFullYear()
  return Array.from({ length: 100 }, (_, i) => ({
    value: String(currentYear - i),
    label: String(currentYear - i),
  }))
}

export const generateMonthOptions = () => {
  return Array.from({ length: 12 }, (_, i) => {
    const month = String(i + 1).padStart(2, '0')
    return {
      value: month,
      label: `${month}월`,
    }
  })
}

export const generateDayOptions = () => {
  return Array.from({ length: 31 }, (_, i) => {
    const day = String(i + 1).padStart(2, '0')
    return {
      value: day,
      label: `${day}일`,
    }
  })
}
