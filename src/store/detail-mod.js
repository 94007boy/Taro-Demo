import {observable, action, runInAction} from 'mobx'
// import Serv from '@pages/detail/serv';
import '@tarojs/async-await'

const detailMod = observable({
  dataList: [],
  testTxt: 'loading',
})

// detailMod.getTestList = async function (isReload) {
//   console.log('detailMod getTestList >>>> ', this.testTxt)
//   const list = await Serv.getDetail()
//   runInAction(() => {
//     const newList = list.map((data) => {
//       return {
//         imageUrl: data.squareimgurl,
//         title: data.mname,
//         subtitle: `[${data.range}]${data.title}`,
//         price: data.price,
//       }
//     })
//     if (isReload) {
//       this.dataList = newList
//     } else {
//       this.dataList = this.dataList.concat(newList)
//     }
//     this.testTxt = 'loaded'
//     console.log('detailMod getTestList <<< ', this.testTxt)
//   })
// }


export default detailMod
