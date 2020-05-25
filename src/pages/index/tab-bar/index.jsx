import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'
import './index.scss'

class TabBar extends Component {

  static defaultProps = {
    tabs: [
      "门店",
      "外卖",
      "商城",
      "通用"
    ]
  }

  constructor(props) {
    super(props)
    this.state = {
      tabPos: 0
    }
  }

  onTabClick(index){
    this.setState({tabPos:index})
  }

  render () {
    const {tabs} = this.props
    const {tabPos} = this.state
    return(
      <View className='tabBar'>
        {tabs.map((tab, index) => {
          const active = tabPos === index
          return(
            <View
              className={classNames('tabBar__item',
                active && 'tabBar__item--active')}
              key={index}
              onClick={this.onTabClick.bind(this,index)}>
              <Text className={classNames('tabBar__item-name',
                active && 'tabBar__item-name--active')}>{tab}</Text>
            </View>
          )
        })}
      </View>
    )
  }

}

export default TabBar
