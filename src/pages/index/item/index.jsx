import Taro, {PureComponent} from '@tarojs/taro'
import {View, Text, Image, ScrollView} from '@tarojs/components'
import './index.scss'
import IconFont from '@components/iconfont';
import classNames from 'classnames'
import gradienBg from '@assets/bg-gradien-gray.png'
import {getWindowWidth} from '@utils/style'
let coverHeight = Math.floor(getWindowWidth() * 0.56)
if(process.env.TARO_ENV !== 'rn')coverHeight += 'px'//动态样式RN端不能加px
import {observer, inject} from '@tarojs/mobx'

@inject('appMod')
@observer
export default class Item extends PureComponent {

  static defaultProps = {
    item:{}
  }

  onFollowClick(index,active,name,e) {//事件对象 e 要放在最后
    e.stopPropagation()//阻止事件冒泡
    const {indexMod} = this.props
    indexMod.setFollowState(index, !active)
    Taro.showToast({title: (active?'取消关注':'已关注')+name ,icon:'none'});
  }

  onItemClick = (e) => {
    // Taro.navigateTo({url: '/pages/detail/index'})
  }

  render () {
    const {item,index} = this.props
    return(
      <View className='list__item' key={index} onClick={this.onItemClick}>
        <View className='list__item-top' style={{height: coverHeight}}>
          <Image mode='widthFix' className='list__item-top-cover' src={item.data.cover.detail}/>
          <View className='list__item-top-maskWrap'><View className='list__item-top-mask'><View><IconFont
            name="bofang" color='#fff' size={50}></IconFont></View></View></View>
          <Image className='list__item-top-titleMask' src={gradienBg}/>
          <Text className='list__item-top-title'>{item.data.title}</Text>
          <Text className='list__item-top-read'>{item.data.read}万次观看</Text>
          <Text className='list__item-top-time'>{item.data.duration}</Text>
        </View>
        <View className='list__item-btm'>
          <View className='list__item-btm-avatar'><Image className='list__item-btm-avatar-img' src={item.data.author.icon}/></View>
          <View className='list__item-btm-midWrap'>
            <View className='list__item-btm-usrInfo'>
              <Text className='list__item-btm-usrInfo-name'>{item.data.author.name}</Text>
              <Text className='list__item-btm-usrInfo-dot'>·</Text>
              <Text
                className={classNames('list__item-btm-usrInfo-flow',
                  item.data.author.follow.followed && 'list__item-btm-usrInfo-flow--active')}
                onClick={this.onFollowClick.bind(this, index, item.data.author.follow.followed,item.data.author.name)}
              >{item.data.author.follow.followed ? '已关注' : '关注'}</Text>
            </View>
            <Text className='list__item-btm-fans'>{item.data.fans}粉丝</Text>
          </View>
          <View className='list__item-btm-flex'></View>
          <View className='list__item-btm-right'>
            <IconFont name='pinglun' color='#555' size={50}></IconFont>
            <Text className='list__item-btm-msg'>{item.data.cmtNum}</Text>
            <IconFont name='xuanxiang' color='#555' size={40}></IconFont>
          </View>
        </View>
      </View>
    )
  }

}
