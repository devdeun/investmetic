export const TABLE_DATA = Array.from({ length: 30 }, (_, i) => ({
  idx: i,
  title: `제목 ${i + 1}`,
  createdAt: new Intl.DateTimeFormat('ko-KR').format(new Date(2024, 11, i + 1)),
  updatedAt: new Intl.DateTimeFormat('ko-KR').format(new Date(2024, 11, i + 2)),
  content: <div>내용 ${i + 1}</div>,
}))
