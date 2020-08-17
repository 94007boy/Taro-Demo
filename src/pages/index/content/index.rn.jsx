import Taro, { PureComponent } from '@tarojs/taro'
import { View } from '@tarojs/components'
import {inject, observer} from "@tarojs/mobx";
import TabBar from "../tab-bar";
import List from "../list";

@inject('indexMod')
@observer
class Index extends PureComponent {

  constructor(props) {
    super(props)
  }

  onTabClick(tab){
    const { indexMod } = this.props
    indexMod.onTabClick(tab.id)
  }

  render () {
    const {indexMod: {tabs, currentId}} = this.props

    return (
      <View className='content'>
        <TabBar tabs={tabs} onTabClick={this.onTabClick.bind(this)}/>
        <View>
          {tabs.map((tab, index) => {
            return(
              tab.id === currentId && <List key={index} tabId={tab.id} currentId={currentId} />
            )
          })}
        </View>
      </View>
    )
  }

}

export default Index
