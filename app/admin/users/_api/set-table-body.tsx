import Avatar from '@/shared/ui/avatar'

import RoleSelect from '../_ui/role-select'
import UserDeleteButton from '../_ui/user-delete-button'
import { AdminUserInfoModel } from '../types'

interface ArgModel {
  data: AdminUserInfoModel[]
}

const setTableBody = ({ data }: ArgModel) =>
  data.map((data) => {
    return [
      data.userId,
      <Avatar src={data?.imageUrl ?? undefined} key={data.userId} />,
      data.userName,
      data.nickname,
      data.email,
      data.phone,
      <RoleSelect data={data} key={data.userId} />,
      <UserDeleteButton userId={data.userId} key={data.userId} />,
    ]
  })

export default setTableBody
