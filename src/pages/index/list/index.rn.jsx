import Taro, {PureComponent} from '@tarojs/taro'
import {Text, View, ScrollView} from '@tarojs/components'
import './index.scss'
import {Dimensions, Image} from 'react-native'
import {observer, inject} from '@tarojs/mobx'
import Item from '../item'
const {width, height} = Dimensions.get('window')
const scrollWarp = {
  position: 'absolute',
  width: '100%'
}
import {UltimateListView} from '@components/refresh-list-view'
import LoadingSpinner from "../loadingSpinner";
import TabBar from "../tab-bar";

@inject('appMod')
@inject('indexMod')
@observer
export default class List extends PureComponent {

  static defaultProps = {
    datas: []
  }

  constructor(props) {
    super(props)
    const {topDist} = this.props
    scrollWarp.top = topDist + 'px'
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
    if(nextProps.datas != this.props.datas){
      this.updateDataSource()
      try {
        if(!nextProps.hasTabCached)this.listView.scrollToIndex({viewPosition: 0, index: 0})
      }catch (e) {

      }

    }
  }

  onFetch = async (page = 1, startFetch, abortFetch) => {
    const { indexMod:{currentId}  } = this.props
    const { indexMod } = this.props
    try{
      await indexMod.getDatas(currentId, page > 1)
      const { indexMod:{currentDatas}  } = this.props
      startFetch(currentDatas, 10)
    }catch (err) {
      abortFetch() // manually stop the refresh or pagination if it encounters network error
      console.log(err)
    }
  }

  renderPaginationFetchingView = () => (
    <LoadingSpinner height={height * 0.2} text="加载中..."/>
  )

  onFollowClick(index,active,name) {
    const {indexMod} = this.props
    indexMod.setFollowState(index, !active)
    Taro.showToast({title: (active?'取消关注':'已关注')+name ,icon:'none'});
    this.updateDataSource()
  }

  updateDataSource(){
    const { indexMod: { currentDatas } } = this.props
    this.listView.updateDataSource(currentDatas)
  }

  renderItem = (item, index, separator) => {
    return (
      <Item item={item} index={index} key={index} onFollowClick={this.onFollowClick.bind(this)}/>
    )
  }

  render() {
    const {appMod} = this.props
    return (
      <UltimateListView
        ref={ref => this.listView = ref}
        key={'list'}
        onFetch={this.onFetch}
        keyExtractor={(item, index) => `${index} - ${item}`}
        refreshableMode="advanced"
        item={this.renderItem}
        numColumns={1}
        displayDate
        arrowImageStyle={{width: 20, height: 20, resizeMode: 'contain'}}
        dateStyle={{color: 'lightgray'}}
        refreshViewStyle={appMod.systemInfo.platform === 'ios' ? {height: 80, top: -80} : {height: 80}}
        refreshViewHeight={80}
      />
    )
  }

}
