import Taro, {PureComponent} from '@tarojs/taro'
import {Text ,View, ScrollView} from '@tarojs/components'
import './index.scss'
import {observer, inject} from '@tarojs/mobx'
import Item from '../item'
const scrollWarp = {
  position: 'absolute',
  width: '100%'
}
import {getWindowHeight} from '@utils/style'
let height = 0

@inject('indexMod')
@observer
export default class List extends PureComponent {

  static defaultProps = {
    datas:[]
  }

  constructor(props) {
    super(props)
    const {topDist} = this.props
    scrollWarp.top = topDist + 'px'
    height = getWindowHeight(process.env.TARO_ENV === 'weapp'?true:false, topDist)
  }


  /**
   * 在已经装载的组件接收到新属性前调用。若你需要更新状态响应属性改变，
   * 你可能需对比 this.props 和 nextProps 并在该方法中使用 this.setState() 处理状态改变。
   * @param nextProps
   */
  componentWillReceiveProps(nextProps) {
  }

  /**
   * 当接收到新的 props 或 state 时，componentWillUpdate() 在渲染之前立即被调用。
   * 在更新发生之前，使用这个方法可以作为执行准备更新的一个好机会。
   * 这个方法在第一次渲染时不会被调用。注意，这里不能调用 this.setState()
   * @param nextProps
   * @param nextState
   */
  componentWillUpdate(nextProps, nextState) {

  }

  onScrollToLower(){
    const {indexMod} = this.props
    const {datas} = this.props
    if(datas.length && datas[datas.length - 1].data)indexMod.getDatas(datas[datas.length - 1].data.id,true)
  }

  onScrollToUpper(){
  }

  render() {
    const {datas} = this.props
    return (
      <ScrollView
        className={scrollWarp}
        style={{height}}
        data={datas}
        renderItem={({item,index}) =>
          <View className={'itemWrap'}>
            <Item item={item} index={index} key={index} />
            {datas.length > 0 && index === datas.length-1 && <Text className='list__btmLoading'>正在加载中...</Text>}
          </View>
        }
        scrollY
        keyExtractor = {(item,index) => `${index}`}
        onScrollToUpper={this.onScrollToUpper.bind(this)}
        onScrollToLower={this.onScrollToLower.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
      >
        <View className='list'>
          {datas.map((item, index) => {
            return (
              <Item item={item} index={index} key={index} />
            )
          })}
          {datas.length > 0 && <Text className='list__btmLoading'>正在加载中...</Text>}
        </View>
      </ScrollView>

    )
  }

}
