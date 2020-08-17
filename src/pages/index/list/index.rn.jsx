import Taro, {PureComponent} from '@tarojs/taro'
import './index.scss'
import {Dimensions, Image} from 'react-native'
import {observer, inject} from '@tarojs/mobx'
import Item from '../item'
const {width, height} = Dimensions.get('window')
import {UltimateListView} from '@components/refresh-list-view'
import LoadingSpinner from "../loadingSpinner";
this.currentId = ''
import {getWindowHeight} from '@utils/style'

@inject('appMod')
@inject('indexMod')
@observer
export default class List extends PureComponent {

  static defaultProps = {
  }

  constructor(props) {
    super(props)
    this.scrollHeight = getWindowHeight(false) - 10
    this.state = {
      offset:0
    }
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

  async componentDidMount () {
    const { indexMod,tabId } = this.props
    if(this.listView && indexMod.checkTabCached(tabId)) {//数据已缓存，只更新界面
      this.listView.endFetch()
      this.listView.updateDataSource(indexMod.getCachedTabData(tabId).slice())
      let offset = indexMod.getCurrentTabOffset(tabId)
      setTimeout(()=>{
        this.listView.scrollToOffset({animated: false, offset:parseFloat(offset)})
      },0)
    }else if(this.listView) {
      let page = this.listView.getPage()
      let status
      if(page > 1){
        status = indexMod.action.LOADMORE
      }else{
        status = indexMod.action.TABCHANGE
      }
      try{
        await indexMod.getDatas(tabId,status)
        const { indexMod:{currentDatas}  } = this.props
        this.listView.postRefresh(currentDatas.slice())
      }catch (err) {
        this.listView.endFetch() // manually stop the refresh or pagination if it encounters network error
        console.log(err)
      }
    }
  }

  componentWillUnmount () {
    const { indexMod,tabId } = this.props
    indexMod.updateTabOffset(tabId,this.state.offset)
  }

  onFetch = async (page = 1, startFetch, abortFetch) => {
    const { indexMod,tabId } = this.props
    let status
    if(page > 1){
      status = indexMod.action.LOADMORE
    }else{
      status = indexMod.action.REFRESHING
    }
    try{
      await indexMod.getDatas(tabId,status)
      const { indexMod:{currentDatas}  } = this.props
      startFetch(currentDatas.slice())
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
    let temps = this.listView.getRows().map((row,i) => {
      if(index === i){
        row.data.author.follow.followed = !active
      }
      return row
    })
    Taro.showToast({title: (active?'取消关注':'已关注')+name ,icon:'none'});
    this.listView.updateRows(temps)
  }

  updateDataSource(){
    const { indexMod: { currentDatas } } = this.props
    this.listView.updateDataSource(currentDatas)
  }

  onScroll = e => {
    const { indexMod:{currentId}  } = this.props
    const offset = e.nativeEvent.contentOffset.y
    this.setState({offset})
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
        style={{height:this.scrollHeight}}
        ref={ref => this.listView = ref}
        key={'list'}
        onFetch={this.onFetch}
        onReMount={this.onReMount}
        keyExtractor={(item, index) => `${index} - ${item}`}
        refreshableMode="advanced"
        item={this.renderItem}
        onScroll={this.onScroll}
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
