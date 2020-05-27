import Taro, {PureComponent} from '@tarojs/taro'
import {Text ,View ,Image} from '@tarojs/components'
import './index.scss'

export default class List extends PureComponent {

  static defaultProps = {
    datas:[]
  }

  render() {
    const {datas} = this.props
    return (
      <View className='list'>
        {datas.map((item, index) => {
          return (
            <View className={'item'} key={index}>
              <View className={'item__coverWrap'}>
                <Image />
                <Text></Text>
              </View>
              <View className={'item__titleWrap'}>
                <Text></Text>
                <Text></Text>
              </View>
            </View>
          )
        })}
      </View>
    )
  }

}
