import Taro, {PureComponent} from '@tarojs/taro'
import {Text ,View, ScrollView ,Image} from '@tarojs/components'
import './index.scss'
import {observer, inject} from '@tarojs/mobx'
import Item from '../item'
const scrollWarp = {
  width: '100%'
}
import {getWindowHeight} from '@utils/style'
import loadingIcon from '@assets/icon-small-loading.gif'
let height = 0
import { AtLoadMore } from 'taro-ui'
import "~taro-ui/dist/style/components/toast.scss";
import "~taro-ui/dist/style/components/icon.scss";

@inject('indexMod')
@observer
export default class List extends PureComponent {

  static defaultProps = {
  }

  constructor(props) {
    super(props)
    scrollWarp.height = getWindowHeight(process.env.TARO_ENV === 'weapp'?true:false,170)
    this.state = {
      datas:[]
    }
  }

  /**
   * 在已经装载的组件接收到新属性前调用。若你需要更新状态响应属性改变，
   * 你可能需对比 this.props 和 nextProps 并在该方法中使用 this.setState() 处理状态改变。
   * @param nextProps
   */
  async componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps',nextProps)
    if(nextProps.index === nextProps.current){//页面可见状态
      const { indexMod,tabId } = this.props
      if(indexMod.checkTabCached(tabId)) {//数据已缓存，只更新界面
        let temps = indexMod.getCachedTabData(tabId).slice()
        console.log('使用了缓存数据',temps.length)
        this.setState({datas:temps})
      }else {
        Taro.showLoading({
          title: '加载中',
        })
        await indexMod.getDatas(tabId,indexMod.action.TABCHANGE)
        const { indexMod:{currentDatas}  } = this.props
        this.setState({datas:currentDatas.slice()})
        Taro.hideLoading()
      }
    }
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

  onScrollToLower = async() => {
    console.log('onScrollToLower ....')
    const { indexMod,tabId } = this.props
    const { indexMod:{tabs} } = this.props
    let id;
    do{
      let seed = Math.floor(Math.random()*10+5) % 5;
      id = tabs[seed].id
    }while (id === tabId)
    await indexMod.getDatas(id,indexMod.action.LOADMORE)
    const { indexMod:{currentDatas}  } = this.props
    let datasTemp = this.state.datas.concat(currentDatas.slice())
    this.setState({datas:datasTemp})
  }

  onScrollToUpper= () => {
    console.log('onScrollToUpper ....')
  }

  onTabClick(tab){

  }

  onFollowClick(index,active,name) {
    const {indexMod} = this.props
    indexMod.setFollowState(index, !active)
    Taro.showToast({title: (active?'取消关注':'已关注')+name ,icon:'none'});
  }

  render() {
    const {datas} = this.state
    return (
      <ScrollView
        style={scrollWarp}
        data={datas}
        scrollY
        onScrollToUpper={this.onScrollToUpper}
        onScrollToLower={this.onScrollToLower}
      >
        <View className='list'>
          {datas.map((item, index) => {
            return (
              <Item item={item} index={index} key={index} onFollowClick={this.onFollowClick.bind(this)} />
            )
          })}
          {datas.length > 0
          && <AtLoadMore
            status={'loading'}
          />}
        </View>
      </ScrollView>

    )
  }

}
