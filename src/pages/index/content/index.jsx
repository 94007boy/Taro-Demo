import Taro, { PureComponent } from '@tarojs/taro'
import { View } from '@tarojs/components'
import {inject, observer} from "@tarojs/mobx";
import List from "../list";
import { AtTabs, AtTabsPane } from 'taro-ui'
import './index.scss'

@inject('indexMod')
@observer
class Index extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      current: -1,
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.handleClick(0)
    },100)
  }

  handleClick(value) {
    const { indexMod } = this.props
    const { indexMod: { tabs } } = this.props
    this.setState({
      current: value
    })
    let tabIdTemp = 0
    tabs.map((tab,index) => {
      if(index == value){
        tabIdTemp = tab.id
      }
    })
    indexMod.onTabClick(tabIdTemp)
  }

  render () {
    const { indexMod: { tabs } } = this.props
    const { current } = this.state
    const tabList = tabs.map(tab => {
      return {title:tab.name}
    })
    return (
      <View className='content'>
        <AtTabs className='my-attabs' animated={false} current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          {tabs.map((tab,index) => {
            return(
              <AtTabsPane key={index} current={this.state.current} index={index} >
                <List tabId={tab.id} index={index} current={current} />
              </AtTabsPane>
            )
          })}
        </AtTabs>
      </View>
    )
  }

}

export default Index
