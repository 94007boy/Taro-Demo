import {observable} from 'mobx'
import Serv from '@pages/index/serv';
import Taro from "@tarojs/taro";
import '@tarojs/async-await'
import Utils from '@utils'

const indexMod = observable({
  currentId: '127398',
  isLoading: false,
  tabs: [
    {id: '127398', name: "推荐"},
    {id: '193473', name: "影视"},
    {id: '194840', name: "音乐"},
    {id: '194619', name: "搞笑"},
    {id: '194845', name: "娱乐"},
    {id: '194925', name: "动漫"}
  ],
  currentDatas: [],
  datas: [],
  tabOffsets:[],
  hasTabCached: false,//当前请求的接口数据，是否缓存过
  action: {
    REFRESHING: 0,
    LOADMORE: 1,
    TABCHANGE: 2
  }
})

indexMod.updateTabOffset = function (id,offset) {
  let hasCached = false
  this.tabOffsets = this.tabOffsets.map(off => {
    if(off && off.id === id){
      hasCached = true
      off.offset = offset
    }
    return off
  })
  if(!hasCached){
    this.tabOffsets.push({id,offset})
  }
  console.log('updateTabOffset',this.tabOffsets.slice())
}

indexMod.getOffsetByTabId = function (id){
  let temp = 0
  this.tabOffsets.slice().map(off => {
    if(off && off.id === id){
      temp = off.offset
    }
  })
  return temp
}

indexMod.setFollowState = function (index, isFollow) {
  console.log('setFollowState', index, isFollow)
  this.datas = this.datas.map(item => {
    if (item && item.id === this.currentId) {
      item.res[index].data.author.follow.followed = isFollow
    }
    return item
  })
  this.currentDatas[index].data.author.follow.followed = isFollow
}

indexMod.onTabClick = function (id) {
  this.currentId = id
  // this.getDatas(id,2)
}

//是否有缓存
indexMod.checkTabCached = function (id) {
  let cached = false
  this.datas.slice().map(item => {
    if (item && item.id === id) {
      cached = true
    }
  })
  return cached
}

//返回缓存的数据
indexMod.getCachedTabData = function (id) {
  let datas = []
  this.datas.slice().map(item => {
    if (item && item.id === id) {
      datas = item.res
    }
  })
  this.currentDatas = datas
  return datas
}

/**
 * 请求数据
 * @param id tab的id
 * @param action 手势动作 0下拉刷新，1加载更多，2tab切换
 * @returns {Promise<*>}
 */
indexMod.getDatas = async function (id, action = this.action.TABCHANGE) {
  let res = []
  console.log('Serv.getVideos', 'xxxxxxxxxx')
  let datas = await Serv.getVideos(id)
  //对源数据进行加工，以符合页面字段显示
  datas.map(data => {
    if (data && data.type === 'videoSmallCard' && data.data.author) {
      if (data.data.author.name.length > 8) {
        data.data.author.name = data.data.author.name.substr(0, 8)
      }
      if (data.data.duration) {
        data.data.duration = Utils.formatDuration(data.data.duration)
      }
      data.data.read = Math.floor(Math.random() * 10 + 1)
      data.data.fans = parseInt(data.data.id / 100)
      data.data.cmtNum = parseInt(data.data.id / 10000)
      res.push(data)
    }
  })

  if (action === this.action.LOADMORE) {

  } else if (action === this.action.REFRESHING) {

  } else {
    this.datas.push({
      id,
      res: res
    })
  }
  this.currentDatas = res
  this.isLoading = false
  if (action === this.action.REFRESHING) {//刷新时，请求完成需要隐藏loading框
    Taro.hideLoading()
  }
}

export default indexMod
