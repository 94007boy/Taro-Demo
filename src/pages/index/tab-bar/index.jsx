import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'
import './index.scss'

class TabBar extends Component {

  static defaultProps = {
    tabs:[]
  }

  constructor(props) {
    super(props)
    this.state = {
      currentId: '127398'
    }
  }

  onTabClick(tab){
    this.setState({currentId:tab.id})
    this.props.onTabClick(tab)
  }

  render () {
    const {tabs} = this.props
    const {currentId} = this.state
    return(
      <View className='tabBar'>
        {tabs.map((tab) => {
          const active = tab.id === currentId
          return(
            <View
              className={classNames('tabBar__item',active && 'tabBar__item--active')}
              key={tab.id}
              onClick={this.onTabClick.bind(this,tab)}>
              <Text className={classNames('tabBar__item-name',active && 'tabBar__item-name--active')}>{tab.name}</Text>
            </View>
          )
        })}
      </View>
    )
  }

}

export default TabBar
