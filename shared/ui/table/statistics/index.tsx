import classNames from 'classnames/bind'

import { inKoreanData } from './inKorean'
import styles from './statistics.module.scss'

const cx = classNames.bind(styles)

interface StatisticsDataModel {
  [key: string]: string | number
}
interface Props {
  title: string
  statisticsData: StatisticsDataModel
}

const StatisticsTable = ({ title, statisticsData }: Props) => {
  const inKoreanDataToArray: string[][] = Object.entries(inKoreanData)

  const mappedDataInKorean: { [key: string]: string | number } = {}
  for (const [key, value] of inKoreanDataToArray) {
    if (statisticsData[key] !== undefined) {
      mappedDataInKorean[value] = statisticsData[key]
    }
  }

  const groupedData = []
  const mappedDataInKoreanToArray = Object.entries(mappedDataInKorean)
  for (let i = 0; i < mappedDataInKoreanToArray.length; i += 2) {
    groupedData.push([
      mappedDataInKoreanToArray[i][0],
      mappedDataInKoreanToArray[i][1],
      mappedDataInKoreanToArray[i + 1]?.[0],
      mappedDataInKoreanToArray[i + 1]?.[1],
    ])
  }

  return (
    <div className={cx('container')}>
      <p>{title}</p>
      <table>
        <tbody>
          {groupedData.map((row, index) => (
            <tr key={index}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
              {row[2] && (
                <>
                  <td>{row[2]}</td>
                  <td>{row[3]}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StatisticsTable
