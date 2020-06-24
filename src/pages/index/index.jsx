import Taro, { PureComponent } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import SearchBar from '@components/search-bar'
import TabBar from './tab-bar'
import List from './list/index'
import { observer, inject } from '@tarojs/mobx'
import './index.scss'

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
    const { indexMod } = this.props
    indexMod.onTabClick('127398')
  }

  onTabClick(tab){
    const { indexMod } = this.props
    indexMod.onTabClick(tab.id)
  }

  render () {
    console.log('index render ------')
    const { indexMod: { tabs,currentId,currentDatas } } = this.props
    return (
      <View className='page'>
        <SearchBar/>
        <TabBar tabs={tabs} onTabClick={this.onTabClick.bind(this)}/>
        <List topDist={170} currentId={currentId} datas={currentDatas} />
      </View>
    )
  }
}

export default Index
