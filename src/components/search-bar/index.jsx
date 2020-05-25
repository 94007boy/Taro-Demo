import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import IconFont from '@components/iconfont';
import classNames from 'classnames'
import './index.scss'

class SearchBar extends Component {

  constructor(props) {
    super(props)
  }

  onSearchClick(){
    Taro.showToast({title: '点击了搜索' ,icon:'none'});
  }

  onBtnClick(){
    Taro.showToast({title: '点击了发布' ,icon:'none'});
  }

  render () {
    return(
      <View className='searchBar'>
        <View className='searchBar__leftWrap' onClick={this.onSearchClick.bind(this)}>
          <IconFont name="sousuo" color='#E1251B' size={40} />
          <Text className='searchBar__leftWrap-hint' numberOfLines={1}>台积电回应拒接新单 | 美国拒绝世界卫生组织提案</Text>
        </View>
        <View className='searchBar__rightWrap' onClick={this.onBtnClick.bind(this)}>
          <IconFont name="zhaoxiangji" color='#333333' size={45} />
          <Text className='searchBar__rightWrap-btn'>发布</Text>
        </View>
      </View>
    )
  }

}

export default SearchBar
