import { Dispatch, SetStateAction } from 'react'

import Avatar from '@/shared/ui/avatar'

import RoleSelect from '../_ui/role-select'
import UserDeleteButton from '../_ui/user-delete-button'
import { AdminUserInfoModel } from '../types'

interface ArgModel {
  data: AdminUserInfoModel[]
  openModal: () => void
  setDeleteUserId: Dispatch<SetStateAction<number>>
}

const setTableBody = ({ data, openModal, setDeleteUserId }: ArgModel) =>
  data.map((data) => {
    return [
      data.userId,
      <Avatar src={data?.imageUrl ?? undefined} key={data.userId} />,
      data.userName,
      data.nickname,
      data.email,
      data.phone,
      <RoleSelect data={data} key={data.userId} />,
      <UserDeleteButton
        onClick={() => {
          openModal()
          setDeleteUserId(data.userId)
        }}
        key={data.userId}
      />,
    ]
  })

export default setTableBody
