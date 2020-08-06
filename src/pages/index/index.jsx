import Taro, { PureComponent } from '@tarojs/taro'
import { View, Button, Text,Swiper,SwiperItem } from '@tarojs/components'
import SearchBar from '@components/search-bar'
import TabBar from './tab-bar'
import List from './list/index'
import { observer, inject } from '@tarojs/mobx'
import './index.scss'
import Item from "./item";



import { AtTabs, AtTabsPane } from 'taro-ui'


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
    this.state = {
      current: -1,
    }
  }

  componentDidShow () {
    const { appMod } = this.props
    appMod.init()
    setTimeout(() => {
      this.handleClick(0)
    },100)
  }

  handleClick(value) {
    const { indexMod } = this.props
    const { indexMod: { tabs } } = this.props
    this.setState({
      current: value
    })
    let tabIdTemp = 0
    tabs.map((tab,index) => {
      if(index == value){
        tabIdTemp = tab.id
      }
    })
    console.log('handleClick',tabIdTemp)
    indexMod.onTabClick(tabIdTemp)
  }

  render () {
    const { indexMod: { tabs } } = this.props
    const { current } = this.state
    console.log('render ... ',current)
    const tabList = tabs.map(tab => {
      return {title:tab.name}
    })
    return (
      <View className='page'>
        <SearchBar/>
        <AtTabs className='tabBar' animated={false} current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          {tabs.map((tab,index) => {
            return(
              <AtTabsPane key={index} current={this.state.current} index={index} >
                <List tabId={tab.id} index={index} current={current} />
              </AtTabsPane>
            )
          })}
        </AtTabs>
      </View>
    )
  }
}

export default Index
