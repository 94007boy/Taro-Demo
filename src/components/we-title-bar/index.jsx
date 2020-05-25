import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import SearchBar from "../search-bar";

class WeStatusBar extends Component {

  constructor() {
    super();
  }

  render () {
    const info = Taro.getSystemInfoSync()
    const { statusBarHeight, titleBarHeight } = info
    const height = (statusBarHeight + titleBarHeight)+'px'
    return(
      <View className='statusBar' style={{height}}>
        <Text className='statusBar__title'>小程序</Text>
      </View>
    )
  }
}

export default WeStatusBar
