import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image, ScrollView} from '@tarojs/components'
import './index.scss'
import IconFont from '@components/iconfont';
import bg from '@assets/coupon_bg.png'
import { getWindowHeight } from '@utils/style'

export default class List extends Component{

  render() {
    const {datas,topDist} = this.props
    const height = getWindowHeight(false,topDist)
    const scrollWarp = {
      position: 'absolute',
      width: '100%',
      top: topDist+'px'
    }
    return (
      <ScrollView scrollY className={scrollWarp} style={{ height}}>
        <View className='list'>
          {datas.map((data,index) => (
            <View className='list__item' key={index}>
              <View className='list__item-left'>
                <Image
                  className='list__item-left-img'
                  src={bg}
                  mode='widthFix'/>
                <View className='list__item-left-content'>
                  <View className='list__item-left-content-amt'>
                    <Text className='list__item-left-content-value'>{data.amt}</Text>
                    <Text className='list__item-left-content-unit'>元</Text>
                  </View>
                  <Text className='list__item-left-content-label'>满{data.minamt}元可用</Text>
                </View>
              </View>
              <View className='list__item-right'>
                <Text className='list__item-right-name'>{data.name}</Text>
                <Text className='list__item-right-date'>{`${data.begin_date}至${data.end_date}`}</Text>
                <View className='list__item-right-bottom'>
                  <Text className='list__item-right-bottom-label'>使用详情</Text>
                  <IconFont name="xiangyoujiantou" color='#333333' size={22}/>
                  <View className='list__item-right-bottom-flex'></View>
                  <Text className='list__item-right-bottom-btn'>去使用</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

    )
  }

}
