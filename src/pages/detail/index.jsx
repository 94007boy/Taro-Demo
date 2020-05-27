import Taro, {PureComponent} from '@tarojs/taro'
import {View, Button, Text, Image} from '@tarojs/components'
import IconFont from '@components/iconfont';
import List from './list/index'
import './index.scss'

class Detail extends PureComponent {

  config = {
    navigationBarTitleText: ''
  }

  state = {
    tabPos: 0,
    isPlaying: false
  }

  constructor(props) {
    super(props)
  }

  render() {

    const {tabPos} = this.state

    return (
      <View className={'detail'}>
        <View className={'detail__TopWrap'}>
          <View className={'detail__TopWrap-cover'}>
            <Image className={'detail__TopWrap-cover-img'}/>
            <View className={'detail__TopWrap-cover-BtnMask'}></View>
            <IconFont/>
          </View>
          <View className={'detail__TopWrap-tabWrap'}>
            <View>
              <Text>简介</Text>
            </View>
            <View>
              <Text>评论</Text>
            </View>
          </View>
        </View>
        <View className={'detail__ListWrap'}>
          tabPos === 0 &&
          <View className={'detail__ListWrap-brief'}>
            <View className={'detail__ListWrap-brief-usrInfo'}>
              <Image/>
              <View className={'detail__ListWrap-brief-nameWrap'}>
                <Text className={'detail__ListWrap-brief-name'}></Text>
                <Text className={'detail__ListWrap-brief-subName'}></Text>
              </View>
            </View>
            <View className={'detail__ListWrap-brief-titleWrap'}>
              <Text></Text>
              <IconFont/>
            </View>
            <Text className={'detail__ListWrap-brief-subTitle'}></Text>
            <View className={'detail__ListWrap-brief-icons'}>
              <View className={'detail__ListWrap-brief-iconWrap'}>
                <IconFont/><Text className={'detail__ListWrap-brief-iconTxt'}></Text>
              </View>
              <View className={'detail__ListWrap-brief-iconWrap'}>
                <IconFont/><Text className={'detail__ListWrap-brief-iconTxt'}></Text>
              </View>
              <View className={'detail__ListWrap-brief-iconWrap'}>
                <IconFont/><Text className={'detail__ListWrap-brief-iconTxt'}></Text>
              </View>
              <View className={'detail__ListWrap-brief-iconWrap'}>
                <IconFont/><Text className={'detail__ListWrap-brief-iconTxt'}></Text>
              </View>
            </View>
            <View className={'detail__ListWrap-brief-recoms'}>

            </View>
          </View>
          tabPos === 1 &&
          <View className={'detail__ListWrap-cmt'}>
            <List/>
          </View>
        </View>
      </View>
    )
  }

}

export default Detail
