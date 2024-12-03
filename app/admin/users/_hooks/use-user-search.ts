import { DropdownOptionModel } from '@/shared/ui/dropdown/types'

const useUserSearch = () => {
  const searchOptions: DropdownOptionModel[] = [
    { label: '닉네임', value: 'NICKNAME' },
    { label: '이메일', value: 'EMAIL' },
    { label: '이름', value: 'NAME' },
    { label: '핸드폰 번호', value: 'PHONE' },
  ]

  return {
    searchOptions,
  }
}

export default useUserSearch
