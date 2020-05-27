import Taro, { PureComponent } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import SearchBar from '@components/search-bar'
import TabBar from './tab-bar'
import List from './list/index'
import { observer, inject } from '@tarojs/mobx'
import './index.scss'

@inject('indexMod')
@observer
class Index extends PureComponent {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
  }

  componentDidShow () {
    this.onTabClick({id:'127398',name:"推荐"})
  }

  onTabClick = (tab) => {
    const { indexMod } = this.props
    indexMod.currentId = tab.id
    //判断当前tab的列表数据是否被缓存过
    let hasCached = false
    indexMod.list.map(data => {
      if(data.id === tab.id){
        hasCached = true
      }
    })
    //如果没有缓存当前tab数据，就去请求服务器
    if(!hasCached){
      indexMod.getDatas(tab.id)
    }
    indexMod.onTabClick(tab.id)
  }

  render () {
    const { indexMod: { list,currentId,tabs } } = this.props
    let datas = []//当前tab对应的列表数据
    //从全部数组中找出当前tab对应的数组
    list.map(data => {
      if(data.id === currentId){
        datas = data.res
      }
    })
    return (
      <View className='page'>
        <SearchBar/>
        <TabBar tabs={tabs} onTabClick={this.onTabClick}/>
        <List list-class='page__list' topDist={170} datas={datas} />
      </View>
    )
  }
}

export default Index
