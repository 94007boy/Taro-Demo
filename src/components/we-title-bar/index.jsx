import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

class WeTitleBar extends Component {

  constructor() {
    super();
  }

  render () {
    const info = Taro.getSystemInfoSync()
    const { statusBarHeight } = info
    const height = (statusBarHeight * 2)+'px'
    console.log(info)
    return(
      <View className='titleBar' style={{height}}>
        <View className='titleBar__status' style={{height:statusBarHeight+'px'}}></View>
        <View className='titleBar__wrap'>
          <Text className='titleBar__wrap-title'>小程序</Text>
        </View>
      </View>
    )
  }
}

export default WeTitleBar
