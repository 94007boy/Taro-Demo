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
  currentDatas:[],
  datas:[]
})



  indexMod.setFollowState = function (index, isFollow) {
    this.datas = this.datas.map(item => {
      if (item.id === this.currentId) {
        item.res[index].data.author.follow.followed = isFollow
      }
      return item
    })
  }

  indexMod.onTabClick = function (id) {
    this.currentId = id
    let hasCached = false
    this.datas.map(data => {
      if(data.id === id){
        hasCached = true
      }
    })
    //如果没有缓存当前tab数据，就去请求服务器
    if(!hasCached){
      this.getDatas(id)
    }
  }

  indexMod.getDatas = async function (id, isLoadMore = false) {
    if (isLoadMore && this.isLoading) {
      return
    }
    let res = []
    this.isLoading = true
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
    let hasTabData = false
    this.datas = this.datas.map(item => {
      if (item.id === this.currentId) {
        item.res = res//数据替换
        hasTabData = true
      }
      return item
    })
    if(!hasTabData){
      this.datas.push({
        id,
        res:res
      })
    }
    this.currentDatas = res
    this.isLoading = false
    if(!isLoadMore){//刷新时，请求完成需要隐藏loading框
      Taro.hideLoading()
    }
    return this.datas
  }

export default indexMod
