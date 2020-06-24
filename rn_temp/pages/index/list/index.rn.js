var _dec, _dec2, _class;

import Taro from '@tarojs/taro-rn';
import React from 'react';
import { PureComponent } from "@tarojs/taro-rn";
import { Text } from "@tarojs/components-rn";
import index_rnStyleSheet from "./index.rn_styles";
import { Dimensions, Image } from 'react-native';
import { observer, inject } from "@tarojs/mobx-rn";
import Item from "../item/index";
const { width, height } = Dimensions.get('window');
const scrollWarp = {
  position: 'absolute',
  width: '100%'
};
import { UltimateListView } from "../../../components/refresh-list-view/index.rn";
import LoadingSpinner from "../loadingSpinner/index";

var _styleSheet = index_rnStyleSheet;
let List = (_dec = inject('appMod'), _dec2 = inject('indexMod'), _dec(_class = _dec2(_class = observer(_class = class List extends PureComponent {

  constructor(props) {
    super(props);

    this.onFetch = async (page = 1, startFetch, abortFetch) => {
      const { indexMod } = this.props;
      try {
        const datas = await indexMod.getDatas(indexMod.currentId, page > 1);
        if (!datas || !datas.length) {
          startFetch([], 10);
          return;
        }
        let tabDatas = []; //当前tab对应的列表数据
        //从全部数组中找出当前tab对应的数组
        datas.map(data => {
          if (data.id === indexMod.currentId) {
            tabDatas = data.res;
          }
        });
        console.log('startFetch', tabDatas.length);
        startFetch(tabDatas, 10);
      } catch (err) {
        abortFetch(); // manually stop the refresh or pagination if it encounters network error
        console.log(err);
      }
    };

    this.renderPaginationFetchingView = () => <LoadingSpinner height={height * 0.2} text="加载中..." />;

    this.renderItem = (item, index, separator) => {
      if (!item.data) {
        console.log('renderItem', item);
      }
      return item.data ? <Item item={item} index={index} key={index} /> : <Text>空</Text>;
    };

    const { topDist } = this.props;
    scrollWarp.top = topDist + 'px';
  }

  /**
   * 在已经装载的组件接收到新属性前调用。若你需要更新状态响应属性改变，
   * 你可能需对比 this.props 和 nextProps 并在该方法中使用 this.setState() 处理状态改变。
   * @param nextProps
   */
  componentWillReceiveProps(nextProps) {}

  /**
   * 当接收到新的 props 或 state 时，componentWillUpdate() 在渲染之前立即被调用。
   * 在更新发生之前，使用这个方法可以作为执行准备更新的一个好机会。
   * 这个方法在第一次渲染时不会被调用。注意，这里不能调用 this.setState()
   * @param nextProps
   * @param nextState
   */
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.currentId != this.props.currentId) {
      Taro.showLoading({ title: '加载中...', mask: true });
      this.listView.refresh();
    }
  }

  onTabClick(tab) {}

  render() {
    const { appMod } = this.props;
    return <UltimateListView ref={ref => this.listView = ref} key={'list'} onFetch={this.onFetch} keyExtractor={(item, index) => `${index} - ${item}`} refreshableMode="advanced" item={this.renderItem} numColumns={1} displayDate arrowImageStyle={{ width: 20, height: 20, resizeMode: 'contain' }} dateStyle={{ color: 'lightgray' }} refreshViewStyle={appMod.systemInfo.platform === 'ios' ? { height: 80, top: -80 } : { height: 80 }} refreshViewHeight={80} />;
  }

}) || _class) || _class) || _class);
List.defaultProps = {
  datas: []
};
export { List as default };