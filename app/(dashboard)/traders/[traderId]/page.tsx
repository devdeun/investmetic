// 'use client'

// import classNames from 'classnames/bind'

// import BackHeader from '@/shared/ui/header/back-header'
// import Title from '@/shared/ui/title'
// import TradersListCard from '@/shared/ui/traders-list-card'

// import ListHeader from '../../_ui/list-header'
// import StrategiesItem from '../../_ui/strategies-item'
// import useGetTraders from '../_hooks/use-get-traders'
// import styles from './page.module.scss'

// const cx = classNames.bind(styles)

// const TraderDetailPage = () => {
//   const { data: trader, isLoading } = useGetTraders()

//   if (!trader) {
//     return null
//   }

//   return (
//     <>
//       <div className={cx('page-container')}>
//         <BackHeader label={'목록으로 돌아가기'} />
//         <div className={cx('title')}>
//           <Title label={'트레이더 상세보기'}></Title>
//         </div>
//         <div className={cx('card-wrapper')}>
//           <TradersListCard
//             key={trader?.userId}
//             imageUrl={trader?.imageUrl}
//             nickname={trader?.nickname}
//             strategyCount={trader?.strategyCount}
//             subscriberCount={trader?.totalSubCount}
//             userId={trader?.userId}
//           />
//         </div>
//         <ListHeader />

//         <StrategiesItem key={''} strategiesData={''} />
//       </div>
//     </>
//   )
// }

// export default TraderDetailPage
