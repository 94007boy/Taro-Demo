import {observable} from 'mobx'
import Serv from '@pages/index/serv';
import Taro from "@tarojs/taro";
import '@tarojs/async-await'
import Utils from '@utils'

const indexMod = observable({

  list: [],
  currentId: '',
  isLoading:false,
  tabs: [
    {id: '127398', name: "推荐"},
    {id: '193473', name: "影视"},
    {id: '194840', name: "音乐"},
    {id: '194619', name: "搞笑"},
    {id: '194845', name: "娱乐"},
    {id: '194925', name: "动漫"}
  ],

  setFollowState(index, isFollow) {
    this.list = this.list.map(item => {
      if (item.id === this.currentId) {
        item.res[index].data.author.follow.followed = isFollow
      }
      return item
    })
  },

  onTabClick(id) {
    this.currentId = id
  },

  async getDatas(id, isLoadMore = false) {
    if(isLoadMore && this.isLoading){
      Taro.showToast({title: '正在加载...' ,icon:'none'});
      return
    }
    if (!isLoadMore) Taro.showLoading({title: '加载中...', mask: true})
    let res = []
    this.isLoading = true
    const datas = await Serv.getVideos(id)
    //对源数据进行加工，以符合页面字段显示
    datas.map(data => {
      if (data && data.type === 'videoSmallCard' && data.data.author) {
        if (data.data.author.name.length > 8) {
          data.data.author.name = data.data.author.name.substr(0, 8)
        }
        if(data.data.duration){
          data.data.duration = Utils.formatDuration(data.data.duration)
        }
        data.data.read = Math.floor(Math.random()*10+1)
        data.data.fans = parseInt(data.data.id/100)
        data.data.cmtNum = parseInt(data.data.id/10000)
        res.push(data)
      }
    })
    if (isLoadMore) {//加载更多
      this.list = this.list.map(item => {
        if (item.id === this.currentId) {//找到后更新数据
          item.res = item.res.concat(res)
        }
        return item
      })
    } else {
      this.list.push({id, res})
    }
    Taro.hideLoading()
    this.isLoading = false
  }

})

export default indexMod
