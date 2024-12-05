import axios from 'axios'

import { StrategiesResponseModel } from '../types'

const getStrategies = async () => {
  try {
    const res = await axios<StrategiesResponseModel>('/api/admin/strategies')

    if (!res.data.isSuccess) throw new Error(res.data.message)

    console.log('data', res.data.data)

    return res.data.data
  } catch (err) {
    console.log('Error : ' + err)
    throw err
  }
}

export default getStrategies
