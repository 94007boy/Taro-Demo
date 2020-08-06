import Taro, { PureComponent } from '@tarojs/taro'
import { View, Button, Text,Swiper,SwiperItem } from '@tarojs/components'
import SearchBar from '@components/search-bar'
import TabBar from './tab-bar'
import List from './list/index'
import { observer, inject } from '@tarojs/mobx'
import './index.scss'
import Item from "./item";

@inject('appMod')
@inject('indexMod')
@observer
class Index extends PureComponent {
  config = {
    navigationBarTitleText: '首页',
    disableScroll: true
  }

  constructor(props) {
    super(props)
  }

  componentDidShow () {
    const { appMod } = this.props
    appMod.init()
  }

  async onTabClick(tab){
    const { indexMod } = this.props
    await indexMod.onTabClick(tab.id)
  }

  render () {
    const { indexMod: { tabs,currentId,hasTabCached } } = this.props
    // if(isLoading){
    //   Taro.showLoading({title: '加载中...', mask: true})
    // }else {
    //   Taro.hideLoading()
    // }
    return (
      <View className='page'>
        <SearchBar/>
        <TabBar tabs={tabs} onTabClick={this.onTabClick.bind(this)}/>
        {tabs.map((tab, index) => {
          return(
            tab.id === currentId && <List key={index} tabId={tab.id} topDist={170} currentId={currentId} hasTabCached={hasTabCached} />
          )
        })}
      </View>
    )
  }
}

export default Index
