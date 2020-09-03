import Taro, { PureComponent } from '@tarojs/taro'
import { View } from '@tarojs/components'
import SearchBar from '@components/search-bar'
import Content from './content'
import { observer, inject } from '@tarojs/mobx'
import './index.scss'

@inject('appMod')
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

  render () {
    return (
      <View className='page'>
        <SearchBar/>
        <Content />
      </View>
    )
  }
}

export default Index
